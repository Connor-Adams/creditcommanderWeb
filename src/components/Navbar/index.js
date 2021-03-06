import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    Img
} from './NavbarElements';
import logo from '../../images/creditcommander.png';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=> {
        if(Window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
        // <Img src={logo} alt='icon' />

    <>
    <IconContext.Provider value={{color: '#E8A838'}}>
         <Nav scrollNav={scrollNav}>
             <NavbarContainer>
                 <NavLogo to="/" onClick={toggleHome}>
                  Credit Commander 
                 </NavLogo>
                 <MobileIcon onClick={toggle}>
                     <FaBars />
                 </MobileIcon>
                 <NavMenu>
                 <NavItem>
                         <NavLinks to="discover" 
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact='true'
                         offset={-80}
                         >
                             Discover
                         </NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to="team"
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact='true'
                         offset={-80}
                         >
                             Team
                         </NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to="about"
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact='true'
                         offset={-80}
                         >
                             About Us
                         </NavLinks>
                     </NavItem>
                     <NavBtn>
                     <NavBtnLink to="//paypal.me/Kitzurea?country.x=CA&locale.x=en_US" target="_blank">
                         Donate
                     </NavBtnLink>
                 </NavBtn>
                 </NavMenu>
             </NavbarContainer>
        </Nav>  
        </IconContext.Provider>  
    </>
  )
}

export default Navbar;
