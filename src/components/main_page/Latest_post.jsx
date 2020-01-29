import React, { useContext } from "react";
import Context from "../../context";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

export default function Latestpost() {
  const { isDay } = useContext(Context);

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              topic
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { title, topic } = data.allMarkdownRemark.edges[0].node.frontmatter;
  const slug = data.allMarkdownRemark.edges[0].node.fields.slug;
  return (
    <>
      <Article className="latest-post-main-container">
        <Link to={`/blog/${slug}`} className="latest-post-link">
          <div
            className={`latest-post-container container-bg-${
              isDay ? "light" : "dark"
            }`}
          >
            <div className="latest-post-img-container">
              {/* TODO: Add dynamic image url */}
              <img
                src="https://tinyurl.com/smxee9n"
                alt="latest-post"
                className="latest-post-img"
              />
            </div>
            <div className="latest-post-header-container">
              <span
                className={`latest-post-header-topic-cate-text text-${
                  isDay ? "light" : "dark"
                }`}
              >
                {topic}
              </span>
              <h3
                className={`latest-post-heading heading-${
                  isDay ? "light" : "dark"
                }`}
              >
                {title}
              </h3>
            </div>
          </div>
        </Link>
      </Article>
    </>
  );
}

const Article = styled.article`
  margin-top: 4.2rem;
  .latest-post-link {
    text-decoration: none;
  }
  .container-bg-light {
    -webkit-box-shadow: 0px 1px 4px 2px rgba(209, 209, 209, 1);
    -moz-box-shadow: 0px 1px 4px 2px rgba(209, 209, 209, 1);
    box-shadow: 0px 1px 4px 2px rgba(209, 209, 209, 1);
    &:hover {
      -webkit-box-shadow: 0px 1px 4px 0px rgba(209, 209, 209, 1);
      -moz-box-shadow: 0px 1px 4px 0px rgba(209, 209, 209, 1);
      box-shadow: 0px 1px 4px 0px rgba(209, 209, 209, 1);
    }
  }
  .container-bg-dark {
    -webkit-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.75);
    &:hover {
      -webkit-box-shadow: 0px 2px 13px -19px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 2px 13px -19px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 2px 13px -19px rgba(0, 0, 0, 0.75);
    }
  }
  .latest-post-container {
    border-radius: 10px;
    cursor: pointer;
    .latest-post-img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
    .latest-post-header-container {
      margin: 1rem 2rem 0 2rem;
      padding: 0.4rem 0 1.6rem 0;
      .latest-post-header-topic-cate-text {
        font-size: 1rem;
        font-weight: 700;
      }
      .text-light {
        color: #343a40 !important;
      }
      .text-dark {
        color: rgba(245, 245, 245, 0.9) !important;
      }
      .latest-post-heading {
        font-size: 1.6rem;
        line-height: 1.8rem;
        font-weight: 600;
        margin-top: 1rem;
        @media all and (max-width: 992px) {
          font-size: 1.45rem;
          font-weight: 500;
        }
        @media all and (max-width: 768px) {
          font-size: 1.4rem;
        }
        @media all and (max-width: 600px) {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
