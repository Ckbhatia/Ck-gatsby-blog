import React from "react";
import styled from "styled-components";
import LatestPosts from "./LatestPosts";
import Layout from "../Layout";

const MainTopic = ({ data }) => {
  const postList = data.allContentfulBlogPost.edges;

  return (
    <Layout>
      <Topics>
        <div className="post-container wrapper">
          <LatestPosts posts={postList} />
        </div>
      </Topics>
    </Layout>
  );
};

const Topics = styled.main`
  .post-container {
    display: grid;
    @media all and (max-width: 992px) {
      grid-template-columns: 70%;
      justify-content: center;
    }
    @media all and (max-width: 768px) {
      grid-template-columns: 68%;
    }
    @media all and (max-width: 600px) {
      grid-template-columns: 88%;
    }
  }
`;

export default MainTopic;
