import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            HAI BANK
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    exact='true'
                                    offset={-80}
                                    activeClass="active"
                                >
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="net-banking"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    exact='true'
                                    offset={-80}
                                    activeClass="active"
                                >
                                    Net Banking
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    exact='true'
                                    offset={-80}
                                    activeClass="active"
                                >
                                    Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="about"                                   
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    exact='true'
                                    offset={-80}
                                    activeClass="active"
                                >
                                    About Us
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/sign-in">
                                Sign In
                            </NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;