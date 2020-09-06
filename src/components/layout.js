/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SocialLinks from "./socialLinks"
import "./layout.css"
import "./content.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <div className="socialLinks">
          <SocialLinks />
        </div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
