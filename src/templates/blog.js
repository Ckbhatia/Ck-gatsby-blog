import React from "react";
import { graphql } from "gatsby";
import MainBlog from "../components/Article_page/MainBlog";
import Mode from "../components/Mode";

export default function blog({ data }) {
  return (
    <Mode>
      <div className="blog-container">
        <MainBlog data={data} />
      </div>
    </Mode>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
        topic
      }
      html
    }
  }
`;
