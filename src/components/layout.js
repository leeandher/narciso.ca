/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { createGlobalStyle } from "styled-components"
import "../styles/normalize.css"

import Header from "./Header"
import Nav from "./Nav"

const GlobalStyle = createGlobalStyle`

`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
