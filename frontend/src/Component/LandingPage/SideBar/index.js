import React from 'react'
import { 
    CloseIcon, 
    Icon, 
    SidebarContainer, 
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap,
    SidebarLink,
    SidebarMenu
} from './SideBarElements'

function SideBar({isOpen, toggle}) {
  return (
    <>
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="net-banking" onClick={toggle}>
                        Net Banking
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/sign-in">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    </>
  )
}

export default SideBar