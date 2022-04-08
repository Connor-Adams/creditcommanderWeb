import React from 'react'
import { ServicesCard, 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP } from './ServicesElements';
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-5.svg';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our App's Features</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Survey</ServicesH2>
                <ServicesP>Our Survey is powered by a dynamic algorithm that will find the best card for you and your lifestyle and spending.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Credit Card Information</ServicesH2>
                <ServicesP>Browse our extensive credit card list for specific credit card details in a one-stop place.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Flexibility</ServicesH2>
                <ServicesP>Don't see a credit card you are looking for? Don't worry! Just submit the card and our team will find that card and update our app.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
