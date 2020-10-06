import React, { useContext } from "react";
import Img from "gatsby-image";
import Context from "../../context";
import { Link } from "gatsby";
import styled from "styled-components";
import "../../assets/main.scss";

export default function FeaturedPost({ data }) {
  const { isDay } = useContext(Context);
  const { title, topic, slug, thumbnail, author, published } = data?.node;
  return (
    <>
      <Article className="featured-post-main-container">
        <Link to={`/blog/${slug}`} className="featured-post-link">
          <div className={`featured-post-container`}>
            <div className="featured-post-img-container">
              <Img fluid={thumbnail.fluid} alt={"latest post thumbnail"} />
            </div>
            <div className="featured-post-header-container">
              <span
                className={`featured-post-header-topic-cate-text text-${
                  isDay ? "light" : "dark"
                }`}
              >
                {topic}
              </span>
              <h2
                className={`featured-post-heading heading-${
                  isDay ? "light" : "dark"
                }`}
              >
                {title}
              </h2>
              <h6
                className={`featured-post-author heading-${
                  isDay ? "light" : "dark"
                }`}
              >
                {author}
              </h6>
              <p
                className={`featured-post-published heading-${
                  isDay ? "light" : "dark"
                }`}
              >
                {published}
              </p>
            </div>
          </div>
        </Link>
      </Article>
    </>
  );
}
const Article = styled.article`
  .featured-post-link {
    text-decoration: none;
  }
  .featured-post-container {
    border-radius: 10px;
    cursor: pointer;
    .featured-post-img {
      width: 100%;
    }
    picture > img {
      border-radius: 10px 10px 0 0;
    }
    .featured-post-header-container {
      margin: 0.5rem 0;
      .featured-post-header-topic-cate-text {
        font-size: 1rem;
        font-weight: 700;
      }
      .text-light {
        color: #343a40 !important;
      }
      .text-dark {
        color: rgba(245, 245, 245, 0.9) !important;
      }
      .featured-post-heading {
        margin-top: 1rem;
        margin-bottom: 2rem;
        line-height: 1.8rem;
        font-weight: 600;
      }

      .featured-post-author {
        margin-bottom: 0;
      }

      .featured-post-published {
        text-decoration: none;
      }
    }
  }
`;
