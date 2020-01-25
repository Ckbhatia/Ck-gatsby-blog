import React, { useContext } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Image } from "gatsby-image";
import Context from "../../context";
import styled from "styled-components";

export default function Articles() {
  const { isDay } = useContext(Context);

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
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
  return (
    <Div className="article-main-container">
      <ul className="article-list-container">
        {/* Get articles data dynamicaly */}
        {data.allMarkdownRemark.edges.map((edge, i) => {
          console.log(edge.node.frontmatter.image);
          return (
            <li key={i} className="article-item-container">
              <Link
                to={`/blog/${edge.node.fields.slug}`}
                className="article-item-link"
              >
                <div
                  className={`article-container container-bg-${
                    isDay ? "light" : "dark"
                  }`}
                >
                  <div className="article-banner-container center-child">
                    {/* TODO: Add dynamic image url */}
                    <img
                      src="https://tinyurl.com/qvy5ln3"
                      alt="article"
                      className="article-image"
                    />

                    {/* <Image fluid={edge.node.frontmatter.image} /> */}
                  </div>
                  <div className="article-text-container">
                    <span
                      // Note: cate stands for category
                      className={`article-cate-text topic-text-${
                        isDay ? "light" : "dark"
                      }`}
                    >
                      {edge.node.frontmatter.topic}
                    </span>
                    <h4
                      className={`article-heading heading-${
                        isDay ? "light" : "dark"
                      }`}
                    >
                      {edge.node.frontmatter.title}
                    </h4>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  .article-list-container {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    grid-gap: 5px;
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
  .article-item-link {
    text-decoration: none;
  }
  .article-container {
    padding: 1rem;
    border-radius: 10px;
  }
  .container-bg-light:hover {
    -webkit-box-shadow: 0px 1px 4px 0px rgba(209, 209, 209, 1);
    -moz-box-shadow: 0px 1px 4px 0px rgba(209, 209, 209, 1);
    box-shadow: 0px 1px 4px 0px rgba(209, 209, 209, 1);
  }
  .container-bg-dark {
    -webkit-box-shadow: 0px 2px 9px -2px rgba(19, 18, 23, 1);
    -moz-box-shadow: 0px 2px 9px -2px rgba(19, 18, 23, 1);
    box-shadow: 0px 2px 9px -2px rgba(19, 18, 23, 1);
    &:hover {
      -webkit-box-shadow: 0px 1px 1px -5px rgba(19, 18, 23, 1);
      -moz-box-shadow: 0px 1px 1px -5px rgba(19, 18, 23, 1);
      box-shadow: 0px 1px 1px -5px rgba(19, 18, 23, 1);
    }
  }

  .article-image {
    width: 100%;
    border-radius: 10px;
  }
  .article-text-container {
    margin-top: 1rem;
  }
  // Category text
  .article-cate-text {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0.8rem 0;
  }
  .article-heading {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.02rem;
    line-height: 2.3rem;
  }
  .topic-text-light {
    color: #696969;
  }
  .topic-text-dark {
    color: #969696;
  }
`;
