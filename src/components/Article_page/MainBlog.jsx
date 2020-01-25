import React from "react";
import SideBar from "./Sidebar";
import Post from "./Post";
import styled from "styled-components";
// import "../../assets/main.scss";
import Layout from "../Layout";

const MainBlog = ({ data }) => {
  const { title, date, author, topic } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Div className="main-blog-container wrapper">
        <SideBar author={author} date={date} topic={topic} />
        <Post title={title} data={data.markdownRemark.html} />
      </Div>
    </Layout>
  );
};

export default MainBlog;

const Div = styled.div`
  display: grid;
  grid-template-columns: 17% 65%;
`;
