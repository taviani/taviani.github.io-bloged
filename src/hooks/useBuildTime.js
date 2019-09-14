import { useStaticQuery, graphql } from 'gatsby'

const useBuildTime = () => {
  const time = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "dddd Do MMMM, YYYY", locale: "fr")
      }
    }
  `)

  return time.site.buildTime
}

export default useBuildTime