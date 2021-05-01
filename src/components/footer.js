import React from 'react';
import styled from 'styled-components';
import LogoWhite from '../images/logo-base-light.svg'
import { main } from './colors';
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const FooterContainer = styled.footer`
margin-top: 64px;
width: 100%;
min-height: 320px;
padding: 32px;
background-color: ${main};
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
color: white;
`

const ContentHolder = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
justify-items: start;
align-content: start;
align-items: start;
margin-bottom: 48px;
@media only screen and (max-width: 870px) {
    flex-wrap: wrap;
    justify-content: start;
}
`

const FooterSection = styled.div`
text-align: left;
height: 100%;
display: flex;
flex-direction: column;
justify-content: start;
justify-items: start;
align-content: start;
align-items: start;
margin-top: 16px;
margin-right: 64px;
`

const ImageHolder = styled.div`
display: flex;
flex-direction: row;
@media only screen and (max-width: 870px) {
    width: calc(100vw - 100px);
}
`

const Image = styled.img`
height: 56px;
margin-right: 8px;
max-width: inherit;
`

const CustomLink = styled.div`
opacity: .5;
margin-top: 8px;
font-size: 18px;
line-height: 24px;
cursor: pointer;
transition: .5s;
:hover {
    opacity: 1 !important;
}

* {
    transition: .5s;
}

* :hover {
    opacity: 1 !important;
}
`

export default function Footer() {
    return (
        <FooterContainer>
            <ContentHolder>
                <FooterSection style={{flexDirection: 'row'}}>
                    <ImageHolder>
                        <Image src={LogoWhite}></Image>
                    </ImageHolder>
                    
                    <FooterSection style={{margin: '0'}}>
                        <CustomLink style={{margin: '0'}}>Home</CustomLink>
                        <CustomLink>About</CustomLink>
                        <CustomLink>Features</CustomLink>
                        <CustomLink>Images</CustomLink>
                        <CustomLink>Contact</CustomLink>
                    </FooterSection>
                </FooterSection>
                <FooterSection>
                    <CustomLink style={{ opacity: 1, margin: '0' }}><AiFillTwitterCircle style={{ color: 'white' }}/><span style={{opacity: 0.5}}> Twitter</span></CustomLink>
                    <CustomLink style={{ opacity: 1 }}><AiFillFacebook style={{ color: 'white' }}/><span style={{opacity: 0.5}}> Facebook</span></CustomLink>
                    <CustomLink style={{ opacity: 1 }}><AiFillInstagram style={{ color: 'white' }}/><span style={{opacity: 0.5}}> Instagram</span></CustomLink>
                    <CustomLink style={{ opacity: 1 }}><AiFillLinkedin style={{ color: 'white' }}/><span style={{opacity: 0.5}}> LinkedIn</span></CustomLink>
                </FooterSection>
            </ContentHolder>
            © Copyright {(new Date()).getFullYear()} by Hector A. Acosta @hectorandac. All rights reserved
        </FooterContainer>
    )
}