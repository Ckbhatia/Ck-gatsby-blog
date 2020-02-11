import React from "react";
import SideBar from "./Sidebar";
import Post from "./Post";
import styled from "styled-components";
// import "../../assets/main.scss";
import Layout from "../Layout";

const MainBlog = ({ data }) => {
  const {
    title,
    published,
    author,
    topic,
    body,
    thumbnail,
  } = data.contentfulBlogPost;
  return (
    <Layout>
      <Div className="main-blog-container wrapper">
        <SideBar author={author} published={published} topic={topic} />
        <Post title={title} thumbnail={thumbnail} body={body} />
      </Div>
    </Layout>
  );
};

export default MainBlog;

const Div = styled.div`
  display: grid;
  grid-template-columns: 17% 65%;
`;
