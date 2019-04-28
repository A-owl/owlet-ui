const Path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://vowlet.github.io/owlet-ui`
      }
    },
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Page.js')
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: Path.resolve(__dirname, `../src/`),
        name: 'owlet-ui'
      }
    },
    'gatsby-transformer-react-docgen',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss'
  ],
  siteMetadata: {
    title: 'Owlet UI documentation',
    description: 'Owlet UI Design System by Segment'
  }
}
