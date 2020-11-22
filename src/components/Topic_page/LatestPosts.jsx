import React, { useContext } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
import Context from "../../context";

const LatestPosts = ({ posts }) => {
  const { isDay } = useContext(Context);

  return (
    <>
      {posts.map(({ node }) => (
        <Post>
          <Link to={`/blog/${node.slug}`} className="post-link">
            <div
              className={`post-topic-container container-bg-${
                isDay ? "light" : "dark"
              }`}
            >
              <div className="post-image">
                <Img
                  fluid={node.thumbnail.fluid}
                  alt={"post thumbnail"}
                  className="post-image-thumbnail"
                />
              </div>
              <div className="post-info">
                <h4
                  className={`post-info-title heading-${
                    isDay ? "light" : "dark"
                  }`}
                >
                  {node.title}
                </h4>
                <h5
                  className={`post-info-topic topic-text-${
                    isDay ? "light" : "dark"
                  }`}
                >
                  {node.topic}
                </h5>
                <p
                  className={`post-info-published heading-${
                    isDay ? "light" : "dark"
                  }`}
                >
                  {node.published}
                </p>
              </div>
            </div>
          </Link>
        </Post>
      ))}
    </>
  );
};

const Post = styled.div`
  .post-link {
    text-decoration: none;
  }

  .post-topic-container {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 30% 70%;
    @media all and (max-width: 768px) {
      display: block;
    }

    .post-image {
      grid-column: 1;
      .post-image-thumbnail {
        border-radius: 10px;
      }
    }
    .post-info {
      padding: 1rem;
      grid-column: 2;
      @media all and (max-width: 992px) {
        display: grid;
        .post-info-title {
          margin-bottom: 1rem;
        }
        .post-info-topic {
          grid-row: 1;
        }
      }

      .post-info-topic {
        margin-bottom: 1.5rem;
        &.topic-text-light {
          color: #696969;
        }
        &.topic-text-dark {
          color: #969696;
        }
      }
    }
  }
`;

export default LatestPosts;
