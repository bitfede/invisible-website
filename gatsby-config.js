module.exports = {
  siteMetadata: {
    title: 'Invisible Glass',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-i18n',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://techlit.us14.list-manage.com/subscribe/post?u=9a1f91d2717ff0377509a250e&amp;id=ca6a51b701', // see instructions section below
      }
    }
  ],
};
