import React, { useContext, useState, useLayoutEffect } from "react";
import Context from "../../context";
import Sidebar from "./Sidebar";
import Post from "./Post";
import styled from "styled-components";
import Layout from "../Layout";
import Articles from "../main_page/Articles";
import Subscribe from "../Subscribe";
import Share from "./Share";

const MainBlog = ({ data }) => {
  const { isDay } = useContext(Context);
  const [width, updateWidth] = useState(0);

  const {
    title,
    published,
    author,
    topic,
    body,
    thumbnail,
  } = data.contentfulBlogPost;

  useLayoutEffect(() => {
    window.addEventListener("resize", updateWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", updateWidth(window.innerWidth));
    };
  }, []);

  return (
    <Layout>
      <Div className="main-blog-container wrapper">
        {/* Only shows to devices with this or below width */}
        {width >= 769 && (
          <Sidebar author={author} published={published} topic={topic} />
        )}
        <Share author={author} topic={topic} />
        <Post
          author={author}
          published={published}
          topic={topic}
          title={title}
          thumbnail={thumbnail}
          body={body}
        />
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
  // display: grid;
  // grid-template-columns: 17% 65%;
  // // grid-template-columns: 70%;
  // @media screen and (max-width: 768px) {
  //   grid-template-columns: 5% 75%;
  //   grid-template-rows: 95% 5%;
  // }
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
