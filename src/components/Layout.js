import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaHome, FaUser, FaCog, FaBars } from 'react-icons/fa';
import styled from 'styled-components';



const SIDEBAR_WIDTH = '75px';

const SideBar = styled.aside`
    left: 0;
    height: 100vh;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
    width: ${SIDEBAR_WIDTH};
    position: fixed; /* Required for 'left' to work */
    z-index: 999;
    background-color: var(--theme-blue);
    &.expanded {
        width: 200px;
    }
    transition: all .2s ease-out;

    left: ${({isMobile, isExpanded}) => isMobile ? `
        ${isExpanded ? '0' : `-${SIDEBAR_WIDTH}`}
    ` : '0'};
`;

const MainContent = styled.div`
    position: absolute;
    transition: left .2s ease-out;
    left: ${({isMobile}) => isMobile ? '0' : `${SIDEBAR_WIDTH}`};
`

const SideBarHeader = styled.h1`
    font-size: 30px;
    color: white;
    top: 0;
    margin: 0;
    padding-top: 12px;
    transition: text-align 1s ease-out;

    ${({expanded}) => expanded ? `
            padding-left: 8px;
            text-align: left;
        ` : ''
    }}

    ${({isMobile}) => isMobile && `
        padding-top: 62px;
    `}
`;

const NamePart = styled.div`
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 8px 0;
    padding-left: 25px;
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

const MainContentShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0;
    transition: opacity .2s ease-out;

    ${({sidebarExpanded}) => sidebarExpanded && `
        opacity: .5;
    `}
`;

const NavBar = styled.div`
    height: 50px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    background-color: var(--theme-blue);
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: white;
    position: sticky;
    z-index: 999;
`;

const Layout = ({ children }) => {
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

  const handleMouseEnter = () => {
    if (isMobile) {
        return;
    }
    setIsExpanded(true);
  }

  const handleMouseLeave = () => {
    if (isMobile) {
        return;
    }

    setIsExpanded(false);
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
        <div style={{display: 'flex'}}>
            <SideBar
            className={`sidebar ${getSidebarState()}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            isMobile={isMobile}
            isExpanded={isExpanded}
            >
              <SideBarHeader expanded={isExpanded} isMobile={isMobile}>
                  <NamePart expanded={isExpanded}>L<span>akelon</span></NamePart>
                  <NamePart expanded={isExpanded}>B<span>ailey</span></NamePart>
              </SideBarHeader>
            </SideBar>
            <MainContent isMobile={isMobile}>
                {isMobile && (
                    <NavBar>
                        <IconContext.Provider value={{ className: 'sidebar-icon' }}>
                            <FaBars  onClick={toggleExpanded}/>
                        </IconContext.Provider>
                    </NavBar>
                )}
                <MainContentShadow  sidebarExpanded={isExpanded}/>
              {children}
            </MainContent>
        </div>
    </>
  );
};

export default Layout;

