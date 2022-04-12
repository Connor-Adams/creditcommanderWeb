import ReactImg1 from '../../images/svg-1.svg';
import ReactImgDom from '../../images/Dom.png';
import ReactImgConnor from '../../images/ConnorAdams.png';
import ReactImgDennis from '../../images/DennisMenace.png';
import ReactImgJackson from '../../images/JackAttack.png';
import ReactImg2 from '../../images/svg-2.svg';

export const homeObjOne = {
    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Discover',
    headLine: 'Find the Perfect Credit Card For You',
    description1: 'Download our app and fill out the quick survey to find the perfect card for your lifestyle spending.',
    // link: '"' + '//play.google.com/store/apps?&utm_source=na_Med&utm_medium=hasem&utm_content=Oct0120&utm_campaign=Evergreen&pcampaignid=MKT-EDR-na-ca-1000189-Med-hasem-py-Evergreen-Oct0120-Text_Search_BKWS-id_101415_%7cEXA%7cONSEM_kwid_43700057579875204&gclid=CjwKCAjwur-SBhB6EiwA5sKtjgUXc0x0AhEzRJrHIg7p5icKkJfv1sNNo3GTk5-Xu9Q6GLQ0OLOmVBoC6fUQAvD_BwE&gclsrc=aw.ds' + '"',
    linkLabel: 'Download',
    imgStart: false,
    buttonLabel: 'Download',
    img: ReactImg1,
    alt: 'Card Payment',
    dark: true,
    primary: true,
    secondary: false,
    darkText: false
}

export const homeObjTwo = {
    id: 'team',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Developer',
    headLine: 'Dominic Olszewski',
    description1: '• 4th year CPA student at Conestoga with 7 years of programming experience.', 
    description2: '• React Developer.',
    // description3: 'dolszewski3461@conestogac.on.ca',
    imgStart: true,
    img: ReactImgDom,
    alt: 'Dominic Olszewski',
    dark: true,
    primary: true,
    secondary: true,
    darkText: false
}

export const homeObjThree = {
    id: 'team',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Developer',
    headLine: 'Connor Adams',
    description1: '• 4th year Conestoga CPA Student with 8 years of Java experience.', 
    description2: '• A founding team member of a Waterloo area startup.',
    // description3: 'cadams9438@conestogac.on.ca',
    imgStart: true,
    img: ReactImgConnor,
    alt: 'Connor Adams',
    dark: false,
    primary: false,
    secondary: true,
    darkText: true
}

export const homeObjFive = {
    id: 'team',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Developer',
    headLine: 'Dennis Pandea',
    description1: '• 4th year Conestoga CPA Student with 4 years of programming experience', 
    description2: '• 8 Years of server hosting and Linux Experience.', 
    // description3: 'dpandea1111@conestogac.on.ca',
    imgStart: true,
    img: ReactImgDennis,
    alt: 'Dennis Pandea',
    dark: false,
    primary: false,
    secondary: true,
    darkText: true
}

export const homeObjFour = {
    id: 'team',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Project Manager',
    headLine: 'Jackson Wiese',
    description1: '• 4th year CPA student at Conestoga with experience in analytics and graphic design.', 
    // description2: 'jwiese5363@conestogac.on.ca',
    imgStart: false,
    img: ReactImgJackson,
    alt: 'Jackson Wiese',
    dark: true,
    primary: true,
    secondary: true,
    darkText: false
}

export const homeObjSix = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Us',
    headLine: 'Our Story:',
    description1: 'Credit Commander is an app developed by 4 students from Conestoga College in Ontario, Canada. The Credit Commander app is our capstone project and the convergence of all the skills we learned at Conestoga. We made this project to help users find a credit card that best suits their needs. We use a simple but effective algorithm to assess how much money an individual will save from different credit cards and recommend a card based on money saved.',
    imgStart: false,
    img: ReactImg2,
    alt: 'React',
    dark: true,
    primary: true,
    secondary: true,
    darkText: false
}