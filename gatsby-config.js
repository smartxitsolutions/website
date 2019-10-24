module.exports = {
  siteMetadata: {
    title: "SmartxItSolutions",
    author: "SmartxItSolutions.com",
    description: "We are professionals. We provide rapid solutions for your business, making you Ideas happens....!",
    siteUrl: 'https://smartxitsolutions.com/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SmartxItSolutions',
        short_name: 'SmartxIt',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-150692692-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      }
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
