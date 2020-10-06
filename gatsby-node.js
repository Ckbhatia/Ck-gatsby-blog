const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog.js");
  const topicTemplate = path.resolve("./src/templates/topic.js");
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
            topic
          }
        }
      }
    }
  `);

  new Set(
    res.data.allContentfulBlogPost.edges.map(edge =>
      edge.node.topic.toLowerCase()
    )
  ).forEach(topic => {
    createPage({
      component: topicTemplate,
      path: `/topic/${topic}`,
      context: {
        topic,
        regexQuery: `/${topic}/i`,
      },
    });
  });

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
