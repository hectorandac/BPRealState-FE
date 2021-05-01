import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'semantic-ui-css/semantic.min.css'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import styled from "styled-components"

const Container = styled.div`
margin: 0 auto;
`

const Layout = ({ children, noFooter }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <main>{children}</main>
        {noFooter ? '' : <Footer />}
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout