import React, { useContext } from "react";
import Context from "../../context";
import styled from "styled-components";
import "../../assets/main.scss";

export default function Latestpost() {
  const { isDay } = useContext(Context);

  return (
    <Article className="latest-post-main-container">
      {/* TODO: Add dynamic url */}
      <a href="#" className="latest-post-link">
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
              // Note: cate stands for category
              className={`latest-post-header-topic-cate-text text-${
                isDay ? "light" : "dark"
              }`}
            >
              {/* TODO: Add dynamic topic category */}
              TECHNOLOGY
            </span>
            <h3
              className={`latest-post-heading heading-${
                isDay ? "light" : "dark"
              }`}
            >
              {/* TODO: Add dynamic topic category */}
              Are you ready to take a deep dive into the web in 2020?
            </h3>
          </div>
        </div>
      </a>
    </Article>
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
        font-size: 0.7rem;
        font-weight: 700;
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
