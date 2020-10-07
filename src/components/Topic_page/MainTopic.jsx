import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import FeaturedPost from "./FeaturedPost";
import LatestPosts from "./LatestPosts";
import Layout from "../Layout";
import Context from "../../context";

const MainTopic = ({ data }) => {
  const { isDay } = useContext(Context);
  const [topic, setTopic] = useState("Topic");
  const [featuredPost, ...postList] = data.allContentfulBlogPost.edges;

  useEffect(() => {
    setTopic(window.location.pathname.split("/topic/")[1]);
  }, []);

  return (
    <Layout>
      <Topics>
        <div className="post-container wrapper">
          <div className="topics-header-container">
            <FeaturedPost data={featuredPost} />

            <h1
              className={`topics-header-name heading-${
                isDay ? "light" : "dark"
              }`}
            >
              {topic}
            </h1>
            {/* Add some topic information */}
          </div>

          <div class="topics-latest">
            <h3 className={`heading-${isDay ? "light" : "dark"}`}>Latest</h3>
          </div>
          <LatestPosts posts={postList} />
        </div>
      </Topics>
    </Layout>
  );
};

const Topics = styled.main`
  .topics-header-container {
    display: grid;
    grid-template-columns: 60% 40%;
    padding-top: 4.2rem;
    .topics-header-name {
      text-align: center;
      text-transform: capitalize;
    }
  }
  .topics-latest {
    margin-top: 2rem;
    border-bottom: 1px solid rgb(204, 204, 204);
    h3 {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

export default MainTopic;
