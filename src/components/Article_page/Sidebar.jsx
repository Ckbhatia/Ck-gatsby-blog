import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Context from "../../context";

export default function Sidebar({ author, published, topic }) {
  const { isDay } = useContext(Context);

  return (
    <Aside className="post-sidebar-container">
      <div className="post-info-container">
        <div className="author-image-container">
          {/* TODO: image should be loaded dynamically */}
          <Link to="/" className="author-image-link">
            <img
              src="https://i.imgur.com/Te4JVdU.jpg"
              alt="author"
              className="author-image"
            />
          </Link>
        </div>
        <div className="post-author-text-container">
          <Link to="/" className="post-author-text-link">
            <span
              className={`post-author-text text-${isDay ? "light" : "dark"}`}
            >
              {author}
            </span>
          </Link>
        </div>
        <div className="post-time-container">
          <span className="post-time-text">{published}</span>
        </div>
        <div className="post-cate-container">
          <Link to="/" rel="noopener noreferrer" className="post-cate-link">
            <span className="post-cate-text">{topic}</span>
          </Link>
        </div>
      </div>
      <div className="post-social-share-container">
        <div className="social-icon-container">
          <a
            // href="https://twitter.com/intent/tweet?text=Chetan%20Blog&url=https%3A%2F%2Fchetanblog.com/learnnew&hashtags=chetanblog&original_referer="
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <span className="social-icon">
              <FaTwitter />
            </span>
          </a>
          <a
            // href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://chetanblog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <span className="social-icon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            // href="http://www.facebook.com/sharer.php?u=https://chetanblog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <span className="social-icon">
              <FaFacebookF />
            </span>
          </a>
          <a
            // href="mailto://"
            className="social-icon-link"
          >
            <span className="social-icon">
              <MdEmail />
            </span>
          </a>
        </div>
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  display: grid;
  grid-template-rows: 40px 80px;
  grid-gap: 400px;
  margin: 14rem 0;
  .post-info-container {
    height: 100%;
    display: grid;
    justify-items: space-evenly;
    grid-gap: 25%;
    // Auth
    .author-image-container {
      width: 100%;
      .author-image {
        width: 5rem;
        border-radius: 50%;
        border: 2px solid #4c7af1;
        padding: 2px;
      }
    }
  }
  .post-author-text {
    font-size: 1rem;
    font-weight: 600;
    margin-right: 0.5rem;
  }

  .text-light {
    color: #2b2d38 !important;
  }
  .text-dark {
    color: rgba(245, 245, 245, 0.9) !important;
  }
  .post-time-text {
    width: 60%;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1;
    color: darkgray;
  }
  .post-cate-text {
    font-size: 0.9rem;
    font-weight: 600;
    color: #8189a9;
    margin-top: 0.4rem;
  }
  .social-icon-container {
    display: grid;
    justify-items: start;
    grid-row-gap: 15px;
  }
  .social-icon {
    display: block;
    background-color: #f1f2fc;
    border-radius: 50px;
    padding: 0.6rem;
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
      -webkit-box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 1);
      -moz-box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 1);
    }
  }
  .social-icon > svg {
    font-size: 1.4rem;
    fill: #8189a9;
  }
  a {
    text-decoration: none;
  }
`;
