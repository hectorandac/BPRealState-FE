import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import LogoBase from '../images/logo-base-letters.svg'
import { main, soft } from './colors'
import { Dropdown } from 'semantic-ui-react'

const HeaderContainer = styled.header`
background-color: ${soft};
backdrop-filter: blur(12px);
display: flex;
position: fixed;
top: 0;
left: 0;
right: 0;
width: 100%;
box-shadow: 0px 1px 26px 0px rgba(0, 0, 0, 0.20);
transition: .5s;
z-index: 100;
`

const ItemsContainer = styled.div`
margin: 0 auto;
max-width: 1100px;
width: 100%;
display: flex;
justify-content: space-between;
`

const Logo = styled.img`
width: 100px;
height: 100%;
margin-left: 8px;
user-select: none;
`

const Menu = styled.div`
display: flex;
justify-content: center;
justify-items: center;
align-content: center;
align-items: center;
`

const MenuItem = styled(Link)`
color: black;
text-decoration: none;
user-select: none;
margin-left: 32px;
transition: .5s;
font-weight: 100;
font-size: 20px;
cursor: pointer;
:hover {
  color: ${main};
}
`

const OnlyDesktop = styled.div`
@media only screen and (max-width: 760px){
  display: none;
}
`

const OnlyMobile = styled.div`
@media only screen and (min-width: 760px){
  display: none;
}
`

const DropdownCustom = styled(Dropdown)`
margin-left: 32px;
`

const Header = () => {

  const languages = [
    {
      key: 'ES',
      text: 'Español',
      value: 'ES',
      image: { avatar: true, src: 'http://purecatamphetamine.github.io/country-flag-icons/1x1/ES.svg' },
    },
    {
      key: 'US',
      text: 'English',
      value: 'US',
      image: { avatar: true, src: 'http://purecatamphetamine.github.io/country-flag-icons/1x1/US.svg' },
    },
    {
      key: 'FR',
      text: 'Français',
      value: 'FR',
      image: { avatar: true, src: 'http://purecatamphetamine.github.io/country-flag-icons/1x1/FR.svg' },
    },
  ]

  return (
    <HeaderContainer>
      <ItemsContainer>
        <Link to="/"><Logo src={LogoBase} /></Link>
        <Menu>
          <OnlyDesktop><MenuItem to="#home">Home</MenuItem></OnlyDesktop>
          <OnlyDesktop><MenuItem to="#about">About</MenuItem></OnlyDesktop>
          <OnlyDesktop><MenuItem to="#features">Features</MenuItem></OnlyDesktop>
          <OnlyDesktop><MenuItem to="#features">Images</MenuItem></OnlyDesktop>
          <OnlyDesktop><MenuItem to="#contact">Contact</MenuItem></OnlyDesktop>
          <OnlyDesktop><DropdownCustom inline defaultValue={languages[0].value} options={languages}/></OnlyDesktop>
          <OnlyMobile></OnlyMobile>
        </Menu>
      </ItemsContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header