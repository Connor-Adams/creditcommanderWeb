import React from 'react';
import {FaLinkedin, FaEnvelope, FaGithub} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';
import { FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterLinkWrapper } 
    from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Dominic Olszewski</FooterLinkTitle>
                            <FooterLinkWrapper>
                            {/* <FooterLink to='//www.linkedin.com' target="_blank"><SocialIconLink href="//www.linkedin.com" target="_blank"
                        aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink></FooterLink> */}
                            <FooterLink to='mailto:dolszewski3461@conestogac.on.ca' target="_blank"><SocialIconLink href='mailto:dolszewski3461@conestogac.on.ca' target="_blank"
                        aria-label="Email">
                            <FaEnvelope />
                        </SocialIconLink></FooterLink>
                            <FooterLink to='//github.com/Dominicols' target="_blank"><SocialIconLink href='//github.com/Dominicols' target="_blank"
                        aria-label="Email">
                            <FaGithub />
                        </SocialIconLink></FooterLink>
                        </FooterLinkWrapper>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Connor Adams</FooterLinkTitle>
                        <FooterLinkWrapper>
                            <FooterLink to='//www.linkedin.com/in/connor-adams-53785019' target="_blank"><SocialIconLink href="//www.linkedin.com/in/connor-adams-53785019" target="_blank"
                        aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink></FooterLink>
                            <FooterLink to="mailto:cadams9438@conestogac.on.ca" target="_blank"><SocialIconLink href="mailto:cadams9438@conestogac.on.ca" target="_blank"
                        aria-label="Email">
                            <FaEnvelope />
                        </SocialIconLink></FooterLink>
                            <FooterLink to='//github.com/Connor-Adams' target="_blank"><SocialIconLink href="//github.com/Connor-Adams" target="_blank"
                        aria-label="Email">
                            <FaGithub />
                        </SocialIconLink></FooterLink>
                        </FooterLinkWrapper>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Dennis Pandea</FooterLinkTitle>
                            <FooterLinkWrapper>
                            {/* <FooterLink to='//www.linkedin.com' target="_blank"><SocialIconLink href="//www.linkedin.com" target="_blank"
                        aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink></FooterLink> */}
                            <FooterLink to='mailto:dpandea1111@conestogac.on.ca' target="_blank"><SocialIconLink href='mailto:dpandea1111@conestogac.on.ca' target="_blank"
                        aria-label="Email">
                            <FaEnvelope />
                        </SocialIconLink></FooterLink>
                            <FooterLink to='//github.com/Dennispandea' target="_blank"><SocialIconLink href="//github.com/Dennispandea" target="_blank"
                        aria-label="Email">
                            <FaGithub />
                        </SocialIconLink></FooterLink>
                        </FooterLinkWrapper>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Jackson Wiese</FooterLinkTitle>
                        <FooterLinkWrapper>
                            {/* <FooterLink to='//www.linkedin.com' target="_blank"><SocialIconLink href="//www.linkedin.com" target="_blank"
                        aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink></FooterLink> */}
                            <FooterLink to='mailto:jwiese5363@conestogac.on.ca' target="_blank"><SocialIconLink href='mailto:jwiese5363@conestogac.on.ca' target="_blank"
                        aria-label="Email">
                            <FaEnvelope />
                        </SocialIconLink></FooterLink>
                            <FooterLink to='//github.com/jwiese5363' target="_blank"><SocialIconLink href="//github.com/jwiese5363" target="_blank"
                        aria-label="Email">
                            <FaGithub />
                        </SocialIconLink></FooterLink>
                        </FooterLinkWrapper>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Credit Commander
                    </SocialLogo>
                    <WebsiteRights>
                        Credit Commander &copy; {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer