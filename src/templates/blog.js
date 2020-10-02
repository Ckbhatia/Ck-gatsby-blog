import React from "react";
import { graphql } from "gatsby";
import MainBlog from "../components/Article_page/MainBlog";
import Mode from "../components/Mode";
import Head from "../components/Head";
require("prismjs/themes/prism.css");

export default function blog({ data }) {
  return (
    <Mode>
      <Head title={data.contentfulTestBlog.title} />
      <div className="blog-container">
        <MainBlog data={data} />
      </div>
    </Mode>
  );
}

export const query = graphql`
  query($slug: String!) {
    contentfulTestBlog(slug: { eq: $slug }) {
      title
      published(formatString: "Do, MMMM YYYY")
      topic
      author
      thumbnail {
        fluid(maxWidth: 1600, maxHeight: 800) {
          srcSet
          srcWebp
          aspectRatio
        }
      }
      body {
        json
      }
    }
  }
`;
