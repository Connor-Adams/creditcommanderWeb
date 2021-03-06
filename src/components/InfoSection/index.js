import React from 'react'
import { Button } from '../ButtonElement';
import { InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    Img, 
    ImgWrap,
    NavBtn,
    NavBtnLink} 
    from './InfoElements';
    

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine,darkText,description1, description2, description3, link, linkLabel, buttonLabel, img, alt, primary, dark, dark2, secondary}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description1}</Subtitle>
                        <Subtitle darkText={darkText}>{description2}</Subtitle>
                        <Subtitle darkText={darkText}>{description3}</Subtitle>
                        <BtnWrap>
                        <NavBtn>
                     <NavBtnLink smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1: 0}
                                secondary={secondary ? 1 : 0}  to='//www.amazon.com/gp/product/B09XTHNZ9T' target="_blank">
                         {linkLabel}
                     </NavBtnLink>
                 </NavBtn>
                                {/* <Button
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1: 0}
                                secondary={secondary ? 1 : 0}
                                >{buttonLabel}</Button> */}
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection
