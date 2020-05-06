import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Share({ author, topic, title }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    setLocation(window.location.href);
  }, []);

  return (
    <Aside className="post-social-share-container">
      <div className="social-icon-container">
        <a
          href={`https://twitter.com/intent/tweet?text=${author}'s%20Blog&url=${location}&hashtags=${topic}&original_referer=`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <span className="social-icon">
            <FaTwitter />
          </span>
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${location}&title=${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <span className="social-icon">
            <FaLinkedinIn />
          </span>
        </a>
        <a
          href={`https://www.facebook.com/sharer.php?u=${location}&t=${title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <span className="social-icon">
            <FaFacebookF />
          </span>
        </a>
        <a
          href={`mailto:?subject=The amazing blog that you should read.&body=Hi,%0D%0AI got this fantastic blog. It will help you to enhance your learning if you read it once. Here's the link: ${location}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <span className="social-icon">
            <MdEmail />
          </span>
        </a>
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
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
