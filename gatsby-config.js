module.exports = {
  siteMetadata: {
    title: "cctInGatsby",
  },
  pathPrefix: "/cct",
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
