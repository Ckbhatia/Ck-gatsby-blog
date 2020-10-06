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
            <div className="post-topic-container">
              <div className="post-info">
                <h4 className={`heading-${isDay ? "light" : "dark"}`}>
                  {node.title}
                </h4>
                <div className="post-footer">
                  <h6 className={`heading-${isDay ? "light" : "dark"}`}>
                    {node.author}
                  </h6>
                  <p className={`heading-${isDay ? "light" : "dark"}`}>
                    {node.published}
                  </p>
                </div>
              </div>
              <div className="post-image">
                <Img
                  fluid={node.thumbnail.fluid}
                  imgStyle={{ objectFit: "contain" }}
                  alt={"post thumbnail"}
                />
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
    margin: 1.5rem 0;
    height: 8rem;
    display: grid;
    grid-template-columns: 80% 20%;
    .post-info {
      grid-column: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .post-footer {
        h6,
        p {
          margin: 0;
          text-decoration: none;
        }
      }
    }
    .post-image {
      grid-column: 2;
      > div {
        height: 8rem;
      }
    }
  }
`;

export default LatestPosts;
