import React from "react"
import Img from "gatsby-image"
import { useImage } from "../hooks/images"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => {
  const images = useImage()
  return (
    <Layout>
      <SEO title="Home" />
      <Img
        className="albumImage"
        fluid={images.new_album.childImageSharp.fluid}
      />
      <p className="comingSoonText">coming soon</p>
    </Layout>
  )
}

export default IndexPage
