import React from 'react'
import { 
    SidebarContainer,
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute,
    SideBtnWrap } 
    from './SidebarElements';

const Sidebar = ( {isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='discover' onClick={toggle}>
                    Discover
                </SidebarLink>
                <SidebarLink to='team' onClick={toggle}>
                    Team
                </SidebarLink>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
                <SideBtnWrap>
                    <SidebarRoute to='//paypal.me/Kitzurea?country.x=CA&locale.x=en_US' onClick={toggle} target='_blank'>Donate</SidebarRoute>
                </SideBtnWrap>
            </SidebarMenu>
            
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
