import React, { useContext } from "react";
import Context from "../../context";
import SideBar from "./Sidebar";
import Post from "./Post";
import styled from "styled-components";
import Layout from "../Layout";
import Articles from "../main_page/Articles";
import Subscribe from "../Subscribe";
import "../../assets/main.scss";

const MainBlog = ({ data }) => {
  const { isDay } = useContext(Context);
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
      <ExtraCont className="extra-container wrapper">
        <div className="related-articles">
          <h2
            className={`related-articles-heading heading-${
              isDay ? "light" : "dark"
            }`}
          >
            Related Articles
          </h2>
          <Articles />
        </div>
        <div className="subscribe-container">
          <Subscribe />
        </div>
      </ExtraCont>
    </Layout>
  );
};

export default MainBlog;

const Div = styled.div`
  display: grid;
  grid-template-columns: 17% 65%;
`;

const ExtraCont = styled.div`
  .related-articles {
    margin: 4rem 0;
  }
  .subscribe-container {
    margin: 8rem 0;
  }
  .related-articles-heading {
    font-size: 1.4rem;
    margin: 3rem 0;
  }
`;
