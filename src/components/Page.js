
import React, {useMemo} from "react";
import styled, {keyframes} from "styled-components";


const ELEVATED_PAGE_SCALE = '1.05';
const SLIDE_DURATION = '.8s';
const RAISE_DROP_DURATION = '.2s';
const ENTRANCE_BOX_SHADOW = '0 0 50px rgba(0, 0, 0, .75)';
const SLIDE_OUT_TRANSLATION = '150%';
const SLIDE_IN_TRANSLATION = '250%';

const animations = {
    'pageSlideInLeft': keyframes`
        0% {
            transform: translateX(-${SLIDE_IN_TRANSLATION}) scale(${ELEVATED_PAGE_SCALE});
            box-shadow: ${ENTRANCE_BOX_SHADOW};
        }
        100% {
            transform: translateX(0) scale(${ELEVATED_PAGE_SCALE});
            box-shadow: ${ENTRANCE_BOX_SHADOW};
        }
    `,
    'pageSlideInRight': keyframes`
        0% {
            transform: translateX(+${SLIDE_IN_TRANSLATION}) scale(${ELEVATED_PAGE_SCALE});
            box-shadow: ${ENTRANCE_BOX_SHADOW};
        }
        100% {
            transform: translateX(0) scale(${ELEVATED_PAGE_SCALE});
            box-shadow: ${ENTRANCE_BOX_SHADOW};
        }
    `,
    'pageSlideOutLeft': keyframes`
        0% {
            transform: translateX(0) scale(${ELEVATED_PAGE_SCALE});
            box-shadow: ${ENTRANCE_BOX_SHADOW};
        }
        100% {
            transform: translateX(-${SLIDE_OUT_TRANSLATION}) scale(${ELEVATED_PAGE_SCALE});
            box-shadow: ${ENTRANCE_BOX_SHADOW};
        }
    `,
    'pageSlideOutRight': keyframes`
        0% {
            transform: translateX(0) scale(${ELEVATED_PAGE_SCALE});
            box-shadow: ${ENTRANCE_BOX_SHADOW};
        }
        100% {
            transform: translateX(+${SLIDE_OUT_TRANSLATION}) scale(${ELEVATED_PAGE_SCALE});
            box-shadow: ${ENTRANCE_BOX_SHADOW};
        }
    `,
    'dropIn': keyframes`
        0% {
            box-shadow: ${ENTRANCE_BOX_SHADOW};
            transform: scale(${ELEVATED_PAGE_SCALE});
        }
        100% {
            box-shadow: none;
            transform: scale(1);
        }
    `,
    'raiseUp': keyframes`
        0% {
            box-shadow: none;
            transform: scale(1);
        }
        100% {
            box-shadow: ${ENTRANCE_BOX_SHADOW};
            transform: scale(${ELEVATED_PAGE_SCALE});
        }
    `,
};

const Pages = styled.div`
    border: 1px solid red;
`

const InnerPageContainer = styled.div`
    width: 100%;

    &.inactive {
        display: none;
    }

    &.active {
        display: block;
    }

    &.enter-left {
        animation:  ${animations['pageSlideInLeft']} ${SLIDE_DURATION} ease-in-out forwards,
                ${animations['dropIn']} ${RAISE_DROP_DURATION} ${SLIDE_DURATION} ease-in-out forwards;
    }
    &.enter-right {
        animation:  ${animations['pageSlideInRight']} ${SLIDE_DURATION} ease-in-out forwards,
                ${animations['dropIn']} ${RAISE_DROP_DURATION} ${SLIDE_DURATION} ease-in-out forwards;
    }

    &.exit-left {
        animation:  ${animations['pageSlideOutLeft']} ${SLIDE_DURATION} ${RAISE_DROP_DURATION} ease-in-out forwards,
                ${animations['dropOut']} ${RAISE_DROP_DURATION} ease-in-out forwards;
    }
    &.exit-right {
        animation:  ${animations['pageSlideOutRight']} ${SLIDE_DURATION} ${RAISE_DROP_DURATION} ease-in-out forwards,
                ${animations['dropOut']} ${RAISE_DROP_DURATION} ease-in-out forwards;
    }
`;

const PageContainer = styled.div`
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
`;

const Page = ({pages, currentPage, previousPage}) => {
    const pageKeys = Object.keys(pages);
    const currentPageIndex = useMemo(() => pageKeys.indexOf(currentPage), [currentPage]);
    const previousPageIndex = useMemo(() => pageKeys.indexOf(previousPage), [previousPage]);

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
        <Pages>
            {Object.entries(pages).map(([pageKey, pageInfo], i) => (
                <PageContainer key={i}>
                    <InnerPageContainer className={getPageClass(pageKey, i)}>
                        {pageInfo.element}
                    </InnerPageContainer>
                </PageContainer>
            ))}
        </Pages>
    );
}


export default Page;