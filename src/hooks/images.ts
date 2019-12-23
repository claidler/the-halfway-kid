import { useStaticQuery, graphql } from 'gatsby';

export const socialImage = graphql`
  fragment socialImage on File {
    childImageSharp {
      fixed(width: 55, height: 55){
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`

export const albumImage = graphql`
  fragment albumImage on File {
    childImageSharp {
      fluid(maxHeight: 500, maxWidth: 500){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const useImage = () => {
  const images = useStaticQuery(
    graphql`
      query {
        new_album: file(relativePath: { eq: "new_album.jpg"}) {
          ...albumImage
        }
        facebook: file(relativePath: { eq: "facebook.png"}) {
          ...socialImage
        }
        apple: file(relativePath: { eq: "apple.png"}) {
          ...socialImage
        }
        instagram: file(relativePath: { eq: "instagram.png"}) {
          ...socialImage
        }
        spotify: file(relativePath: { eq: "spotify.png"}) {
          ...socialImage
        }
        soundcloud: file(relativePath: { eq: "soundcloud.png"}) {
          ...socialImage
        }
        twitter: file(relativePath: { eq: "twitter.png"}) {
          ...socialImage
        }
        facebook_hover: file(relativePath: { eq: "facebook_hover.png"}) {
          ...socialImage
        }
        apple_hover: file(relativePath: { eq: "apple_hover.png"}) {
          ...socialImage
        }
        instagram_hover: file(relativePath: { eq: "instagram_hover.png"}) {
          ...socialImage
        }
        spotify_hover: file(relativePath: { eq: "spotify_hover.png"}) {
          ...socialImage
        }
        soundcloud_hover: file(relativePath: { eq: "soundcloud_hover.png"}) {
          ...socialImage
        }
        twitter_hover: file(relativePath: { eq: "twitter_hover.png"}) {
          ...socialImage
        }
      }

    `
  )
  return images;
}