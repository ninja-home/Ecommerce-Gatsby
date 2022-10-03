import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import {GlobalStyle} from "./styles/globalStyles"



const Layout = ({ children }) => (
  <>
    <GlobalStyle /> 
    <Header />
         <main>{children}</main>
       </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
