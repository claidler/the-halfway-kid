import React from "react"
import Img from "gatsby-image"
import { useImage } from "../hooks/images"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const images = useImage();
  return(
  <Layout>
    <SEO title="Home" />
    <Img style={{maxWidth: 500, maxHeight: 500, margin: '0 auto'}} fluid={images.new_album.childImageSharp.fluid} />
    <p style={{fontFamily: 'Courier New, Courier, monospace', marginTop: 10, textAlign: 'center'}}>coming soon</p>

  </Layout>
)}

export default IndexPage
