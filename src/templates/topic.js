import React from "react";
import { graphql } from "gatsby";
import MainTopic from "../components/Topic_page/MainTopic";
import Mode from "../components/Mode";
import Head from "../components/Head";

export default function topic({ data, pageContext: { topic } }) {
  return (
    <Mode>
      <Head title={topic} />
      <MainTopic data={data} />
    </Mode>
  );
}

export const query = graphql`
  query($regexQuery: String!) {
    allContentfulBlogPost(filter: { topic: { regex: $regexQuery } }) {
      edges {
        node {
          title
          slug
          published(formatString: "Do, MMMM YYYY")
          author
          thumbnail {
            fluid(maxWidth: 1600, maxHeight: 800) {
              srcSet
              srcWebp
              aspectRatio
            }
          }
        }
      }
    }
  }
`;
