import React, { useContext } from "react";
import Context from "../../context";
import styled from "styled-components";

export default function Post({ title, data }) {
  const { isDay } = useContext(Context);

  return (
    <Article className="post-container">
      <div className="post-heading-container">
        <h1 className={`post-heading heading-${isDay ? "light" : "dark"}`}>
          {title}
        </h1>
      </div>
      <div
        className="post-image-container"
        // dangerouslySetInnerHTML={{ __html: hero }}
      >
        {/* <img src="http://tiny.cc/61thiz" alt="post" className="post-image" /> */}
      </div>
      <div
        className={`post-paragraph-container para-cont-${
          isDay ? "light" : "dark"
        }`}
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
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
  .gatsby-resp-image-image {
    // width: 100%;
    border-radius: 10px;
  }

  // .post-paragraph-container {
  //   margin: 1rem 0;
  //   .post-paragraph {
  //     font-size: 1.3rem;
  //     font-weight: 400;
  //   }
  // }
  .post-paragraph-container {
    margin: 1rem 0;
    p {
      font-size: 1.3rem;
      font-weight: 400;
    }
  }

  // Text items color
  .para-cont-dark > h3,
  h4,
  h5,
  p,
  span,
  li {
    color: #d9d7e0;
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
