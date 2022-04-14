import React, {useState, useEffect} from 'react'
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement';
import { animateScroll as scroll } from 'react-scroll/modules';
import { InfoContainer } from '../InfoSection/InfoElements';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    const toggleHome = () => {
        
    };
    
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Picking a Credit Card Made Easy</HeroH1>
            <HeroP>
                Click the download button to download our APK and install it on your phone.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="discover"
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
