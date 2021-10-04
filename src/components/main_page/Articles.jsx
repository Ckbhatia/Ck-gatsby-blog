import React, { useContext , useState} from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Context from "../../context";
import styled from "styled-components";
import "../../assets/main.scss";

export default function Articles() {
  const { isDay } = useContext(Context);
  const [showArticles , setShowArticles] = useState(6);
  
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(skip: 5, sort: { fields: published, order: DESC }) {
        edges {
          node {
            title
            thumbnail {
              fluid(maxWidth: 1600, maxHeight: 800) {
                srcSet
                srcWebp
                aspectRatio
                base64
              }
            }
            slug
            topic
            published(formatString: "Do, MMMM YYYY")
          }
        }
      }
    }
  `);

  const readMore = ()=>{
    setShowArticles(showArticles+6);
  }

  return (
    <Div className="article-main-container">
      <ul className="article-list-container">
        {/* Get articles data dynamicaly */}
        {data.allContentfulBlogPost.edges.slice(0,showArticles).map((edge, i) => {
          return (
            <li key={i} className="article-item-container">
              <Link
                to={`/blog/${edge.node.slug}`}
                className="article-item-link"
              >
                <div
                  className={`article-container container-bg-${isDay ? "light" : "dark"
                    }`}
                >
                  <div className="article-banner-container">
                    <Img
                      className="article-thumbnail"
                      fluid={edge.node.thumbnail.fluid}
                      alt={"article thumbnail"}
                    />
                  </div>
                  <div className="article-text-container">
                    <span
                      // Note: cate stands for category
                      className={`article-cate-text topic-text-${isDay ? "light" : "dark"
                        }`}
                    >
                      {edge.node.topic}
                    </span>
                    <h4
                      className={`article-heading heading-${isDay ? "light" : "dark"
                        }`}
                    >
                      {edge.node.title}
                    </h4>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {/*Not showing read more if no more articles are left*/}
      
       {data.allContentfulBlogPost.edges.length > showArticles &&
        <div className="read-more text-center">
        <button className="read-more-btn" onClick={()=>{readMore()}}
        style={{padding: "1rem 15vw",
          border: "none",
          background: "white",
          borderRadius: "2rem",
          fontSize: "15px",
          fontWeight: "500",
          color: "#6565bb",
          boxShadow: "0px 2px 5px 5px rgb(0 0 255 / 7%)"
          }}>Read More</button>
      </div>}
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
  .article-thumbnail {
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
