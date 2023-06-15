
import React, {useMemo, useEffect, useContext, useState} from "react";
import styled, {keyframes} from "styled-components";
import { PageTransitionContext } from '../context/PageTransitionContext';


const SLIDE_DURATION = '.8s';
const SLIDE_OUT_TRANSLATION = '100%';
const SLIDE_IN_TRANSLATION = '100%';
const SLIDE_PATTERN = 'ease-in-out';

const animations = {
    'pageSlideInLeft': keyframes`
        0% {
            transform: translateX(-${SLIDE_IN_TRANSLATION});
        }
        100% {
            transform: translateX(0);
        }
    `,
    'pageSlideInRight': keyframes`
        0% {
            transform: translateX(+${SLIDE_IN_TRANSLATION});
        }
        100% {
            transform: translateX(0);
        }
    `,
    'pageSlideOutLeft': keyframes`
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-${SLIDE_OUT_TRANSLATION});
        }
    `,
    'pageSlideOutRight': keyframes`
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(+${SLIDE_OUT_TRANSLATION});
        }
    `,
};

const InnerPageContainer = styled.div`
    width: 100%;

    &.inactive {
        display: none;
    }

    &.active {
        display: block;
    }

    &.enter-left {
        animation:  ${animations['pageSlideInLeft']} ${SLIDE_DURATION} ${SLIDE_PATTERN} forwards;
    }
    &.enter-right {
        animation:  ${animations['pageSlideInRight']} ${SLIDE_DURATION} ${SLIDE_PATTERN} forwards;
    }
    &.exit-left {
        animation:  ${animations['pageSlideOutLeft']} ${SLIDE_DURATION} ${SLIDE_PATTERN} forwards;
    }
    &.exit-right {
        animation:  ${animations['pageSlideOutRight']} ${SLIDE_DURATION} ${SLIDE_PATTERN} forwards;
    }
`;

const PageContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
`;

const Page = ({pages, currentPage, previousPage, setPage}) => {
    const pageKeys = Object.keys(pages);
    const currentPageIndex = useMemo(() => pageKeys.indexOf(currentPage), [currentPage]);
    const previousPageIndex = useMemo(() => pageKeys.indexOf(previousPage), [previousPage]);

    const { setIsPageTransitioning } = useContext(PageTransitionContext);


    const [animationEnded, setAnimationEnded] = useState(
        Object.keys(pages).reduce((obj, pageKey) => ({ ...obj, [pageKey]: false }), {})
    );

    const handleAnimationEnd = (pageKey) => {
        setAnimationEnded(prevState => ({ ...prevState, [pageKey]: true }));
    };


    useEffect(() => {
      setAnimationEnded(Object.keys(pages).reduce((obj, pageKey) => ({ ...obj, [pageKey]: false }), {}));
      setIsPageTransitioning(true);
    }, [currentPage]);

    useEffect(() => {
        if(animationEnded[currentPage]){
          setIsPageTransitioning(false);
        }
    }, [animationEnded, currentPage]);


    const getPageClass = (pageKey, i) => {
        if (pageKey === currentPage) {
            if (!previousPage) {
                return 'active';
            }

            if (currentPageIndex < previousPageIndex) {
                return 'enter-left';
            }

            return 'enter-right';
        }

        if (pageKey === previousPage) {
            if (previousPageIndex < currentPageIndex) {
                return 'exit-left';
            }

            return 'exit-right';
        }

        return 'inactive';
    }
    return (
        <div>
            {Object.entries(pages).map(([pageKey, pageInfo], i) => (
                <PageContainer
                    key={i}
                    style={{display: (pageKey === currentPage || (pageKey === previousPage && !animationEnded[pageKey])) ? "block" : "none"}}
                >
                    <InnerPageContainer onAnimationEnd={() => handleAnimationEnd(pageKey)} className={getPageClass(pageKey, i)}>
                        {pageKey === 'projects' && React.cloneElement(pageInfo.element, { setPage })}
                        {pageKey !=='projects' && pageInfo.element}
                    </InnerPageContainer>
                </PageContainer>
            ))}
        </div>
    );
}


export default Page;