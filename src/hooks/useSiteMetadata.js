import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          email
          social {
            twitter
            github
            instagram
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
