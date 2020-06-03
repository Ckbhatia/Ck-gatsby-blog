import React, { useContext, useState, useLayoutEffect } from "react";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Context from "../../context";
import styled from "styled-components";
import Sidebar from "./Sidebar";

export default function Post({
  title,
  author,
  published,
  topic,
  body,
  thumbnail,
}) {
  const { isDay } = useContext(Context);
  const [width, updateWidth] = useState(0);

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img src={url} alt={alt} />;
      },
    },
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", updateWidth(window.innerWidth));
    };
  }, []);

  return (
    <Article className="post-container">
      <div className="post-heading-container">
        <h1 className={`post-heading heading-${isDay ? "light" : "dark"}`}>
          {title}
        </h1>
      </div>
      <div className="post-image-container">
        <Img fluid={thumbnail.fluid} alt={"post thumbnail"} />
      </div>
      {/* Only shows to devices with this or below width */}
      {width <= 768 && (
        <Sidebar author={author} published={published} topic={topic} />
      )}
      <div
        className={`post-paragraph-container para-cont-${
          isDay ? "light" : "dark"
        }`}
      >
        {documentToReactComponents(body.json, options)}
      </div>
    </Article>
  );
}

const Article = styled.article`
  margin: 2rem 0;
  .post-heading-container {
    margin: 2rem 0;
  }
  .post-heading {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: 0.01rem;
    text-align: center;
  }
  .post-image-container {
    margin: 0 auto;
    .post-image {
      width: 100%;
      border-radius: 10px;
    }
  }

  picture > img {
    border-radius: 10px;
  }

  .post-paragraph-container {
    margin: 1rem 0;
    p {
      font-size: 1.3rem;
      font-weight: 400;
      margin-top: 2rem;
    }
    code {
      display: block;
      color: rgba(0, 0, 0, 0.84);
      background: rgba(0, 0, 0, 0.05) none repeat scroll 0% 0%;
      padding: 20px;
      margin: 4rem 0;
    }
  }

  // Text items color
  .para-cont-dark > h3,
  h4,
  h5,
  p,
  span,
  li {
    // color: #d9d7e0;
    color: #b3b9c5;
    font-family: Helvetica Neue, Inter, -apple-system, BlinkMacSystemFont,
      Helvetica, Arial, sans-serif;
  }

  .para-cont-light > h3,
  .para-cont-light > h4,
  .para-cont-light > h5,
  .para-cont-light > p,
  .para-cont-light > span,
  .para-cont-light li {
    color: #36313d;
  }

  .post-paragraph-container li {
    font-size: 1.3rem;
  }

  h2 {
    font-size: 2.1rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.9rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.7rem;
    font-weight: 600;
  }

  h5 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
