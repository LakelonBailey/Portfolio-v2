import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';
import styled, {keyframes} from 'styled-components';



const SIDEBAR_WIDTH = '75px';
const SIDEBAR_EXPANDED_WIDTH = '200px';
const MOBILE_TRANSITION_DURATION = '.3s';
const NAVBAR_HEIGHT = '50px';

const animations = {
    'labelSlideIn': keyframes`
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    `,
    'labelSlideOut': keyframes`
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(-100%);
            opacity: 0;
        }
    `,
    'slideDown': keyframes`
        0% {
          transform: translateY(-100%);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
    `
}

const SideBar = styled.aside`
    left: 0;
    height: 100vh;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
    width: ${SIDEBAR_WIDTH};
    position: fixed;
    z-index: 999;
    background-color: var(--theme-1);
    &.expanded {
        width: ${SIDEBAR_EXPANDED_WIDTH};
    }
    transition: all ${MOBILE_TRANSITION_DURATION} ease-out;

    left: ${({isMobile, isExpanded}) => isMobile ? `
        ${isExpanded ? '0' : `-${SIDEBAR_WIDTH}`}
    ` : '0'};
`;

const SideBarHeader = styled.h1`
    font-size: 30px;
    color: white;
    top: 0;
    margin: 0;
    padding-top: 12px;
    padding-bottom: 24px;
    transition: all .3s ease-out;

    ${({isMobile}) => isMobile && `
        padding-top: 62px;
    `}
`;

const SideBarDivider = styled.div`
    height: 0px;
    transition: all .3s ease-out;
    margin: 0 auto;
    border-bottom: 2px solid ${({expanded}) => expanded ? 'var(--theme-2)' : 'transparent'}};
    width: ${({expanded}) => expanded ? SIDEBAR_EXPANDED_WIDTH : '0'}};
`

const NavBarName = styled.h1`
    font-size: 25px;
    color: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
`


const SideBarLinks = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const SideBarLink = styled.a`
    transition: all .3s ease;
    font-size: 24px;
    width: calc(100% - 35px);
    border: none;
    white-space: nowrap;
    overflow: hidden;
    text-decoration: none;
    color: ${({isCurrent}) => isCurrent ? 'white' : 'var(--theme-2)'};
    margin-left: 25px;
    margin-top: 25px;

    &:hover {
        color: white;
        transform: scale(1.10);
    }
`;

const SideBarLabel = styled.span`
    position: relative;
    margin-left: 8px;
    transition: opacity .3s ease;
    opacity: 0;
    &.active {
        opacity: 1;
    }
`

const NamePart = styled.div`
    position: relative;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 8px 0 0 25px;

    & span {
        display: inline-block;
        max-width: 0;
        overflow: hidden;
        transition: max-width 0.2s ease-out;
        ${({ expanded }) => expanded && `
            max-width: 150px; // You may need to adjust this value
        `}
    }
`;

const MainContent = styled.div`
    position: fixed;
    transition: left ${MOBILE_TRANSITION_DURATION} ease-out,
                width ${MOBILE_TRANSITION_DURATION} ease-out,
                margin-top ${MOBILE_TRANSITION_DURATION} ease-out;
    height: calc(100% - ${({isMobile}) => isMobile ? NAVBAR_HEIGHT : '0px'});
    display: flex;
    justify-content: center;
    align-items: center;
    left: ${({isMobile, isExpanded}) => isMobile ? '0' : isExpanded ? SIDEBAR_EXPANDED_WIDTH : `${SIDEBAR_WIDTH}`};
    width: ${({isMobile}) => isMobile ? '100%' : `calc(100% - ${SIDEBAR_WIDTH})`};
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 100;
    margin-top: ${({isMobile}) => isMobile ? NAVBAR_HEIGHT : '0'};
`;

const MainContentShadow = styled.div`
    position: fixed;
    height: 0;
    width: 100%;
    background-color: black;
    opacity: 0;
    z-index: 0;
    transition: opacity .2s ease-out;

    ${({sidebarExpanded}) => sidebarExpanded && `
        height: 100%;
        opacity: .5;
        z-index: 900;
    `}
`;

const NavBar = styled.div`
    height: ${NAVBAR_HEIGHT};
    width: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    background-color: var(--theme-1);
    display: flex;
    align-items: center;
    animation: ${animations['slideDown']} ${MOBILE_TRANSITION_DURATION} ease-out forwards;
    padding: 0 12px;
    color: white;
    position: fixed;
    z-index: 999;
`;

const NavBarIcon = styled.div`
    transition: all .3s ease;
    &:hover {
        transform: scale(1.25);
    }
`

const Layout = ({ children, pages, setPage, currentPage}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

    const updateScreenState = () => {
        setIsMobile(
            window.innerWidth < 700
        );
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenState);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', updateScreenState);
        }
    }, []);

  const getSidebarState = () => {
    return isExpanded ? 'expanded' : '';
  }

  const handleMouseAction = isEntering => {
    if (isMobile) {
        return;
    }
    setIsExpanded(isEntering);
  }

  const handleShadowClick = () => {
    if (isExpanded) {
        setIsExpanded(false);
    }
  }

  const changePage = (pageKey) => {
    setPage(pageKey);
    if (isMobile) {
        setIsExpanded(false);
    }
  }

  return (
    <div>
        <SideBar
        className={getSidebarState()}
        onMouseEnter={() => handleMouseAction(true)}
        onMouseLeave={() => handleMouseAction(false)}
        isMobile={isMobile}
        isExpanded={isExpanded}
        >
        {!isMobile && (
            <div>
                <SideBarHeader expanded={isExpanded} isMobile={isMobile}>
                    <NamePart expanded={isExpanded}>L<span>akelon</span></NamePart>
                    <NamePart expanded={isExpanded}>B<span>ailey</span></NamePart>
                </SideBarHeader>
                <SideBarDivider expanded={isExpanded} />
            </div>
        )}
            <SideBarLinks>
            <IconContext.Provider value={{}}>
                {Object.entries(pages).map(([pageKey, pageInfo], i) => (
                    <SideBarLink
                    key={i}
                    href='#'
                    onClick={() => {changePage(pageKey)}}
                    isCurrent={pageKey === currentPage}
                    >
                        {pageInfo.icon}
                        <SideBarLabel className={isExpanded ? 'active' : ''}>
                            {pageInfo.name}
                        </SideBarLabel>
                    </SideBarLink>
                ))}
            </IconContext.Provider>
            </SideBarLinks>
        </SideBar>
        {isMobile && (
            <NavBar>
                <IconContext.Provider value={{}}>
                    <NavBarIcon>
                        <FaBars  onClick={() => setIsExpanded(!isExpanded)}/>
                    </NavBarIcon>
                </IconContext.Provider>
                <NavBarName>Lakelon Bailey</NavBarName>
            </NavBar>
        )}
        <MainContent isMobile={isMobile} id='main-content'>
            <MainContentShadow  sidebarExpanded={isExpanded} onClick={handleShadowClick}/>
            {children}
        </MainContent>
    </div>
  );
};

export default Layout;

