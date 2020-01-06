import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../context";
import { FaHotjar } from "react-icons/fa";

export default function SideBar() {
  const { isDay } = useContext(Context);
  return (
    <Aside className="aside-main-container">
      <div className="picks-container">
        <span className="picks-icon">
          <FaHotjar />
        </span>
        <h2 className={`picks-heading heading-${isDay ? "light" : "dark"}`}>
          Popular Picks
        </h2>
      </div>
      <div className="picks-list-main-container">
        <ul className="picks-list-container">
          {/* NOTE: Limit it to four article list only and also follow DIY rule*/}
          <li className="picks-list-item-container">
            {/* TODO: Add dynamic url */}
            <a href="#" className="picks-item-link">
              <div
                className={`picks-item-container picks-item-cont-bg-${
                  isDay ? "light" : "dark"
                }`}
              >
                <span className="picks-item-cat-container">
                  {/* TODO: Add dynamic item category */}
                  DevOps
                </span>
                <h4
                  className={`picks-item-heading heading-${
                    isDay ? "light" : "dark"
                  }`}
                >
                  {/* TODO: Add dynamic item category */}
                  Don't panic when you get stuck
                </h4>
              </div>
            </a>
          </li>
          <li className="picks-list-item-container">
            {/* TODO: Add dynamic url */}
            <a href="#" className="picks-item-link">
              <div
                className={`picks-item-container picks-item-cont-bg-${
                  isDay ? "light" : "dark"
                }`}
              >
                <span className="picks-item-cat-container">
                  {/* TODO: Add dynamic item category */}
                  ReactJs
                </span>
                <h4
                  className={`picks-item-heading heading-${
                    isDay ? "light" : "dark"
                  }`}
                >
                  {/* TODO: Add dynamic item category */}
                  How to optimise react web app?
                </h4>
              </div>
            </a>
          </li>
          <li className="picks-list-item-container">
            {/* TODO: Add dynamic url */}
            <a href="#" className="picks-item-link">
              <div
                className={`picks-item-container picks-item-cont-bg-${
                  isDay ? "light" : "dark"
                }`}
              >
                <span className="picks-item-cat-container">
                  {/* TODO: Add dynamic item category */}
                  Javascript
                </span>
                <h4
                  className={`picks-item-heading heading-${
                    isDay ? "light" : "dark"
                  }`}
                >
                  {/* TODO: Add dynamic item category */}
                  What is DOM?
                </h4>
              </div>
            </a>
          </li>
          <li className="picks-list-item-container">
            {/* TODO: Add dynamic url */}
            <a href="#" className="picks-item-link">
              <div
                className={`picks-item-container picks-item-cont-bg-${
                  isDay ? "light" : "dark"
                }`}
              >
                <span className="picks-item-cat-container">
                  {/* TODO: Add dynamic item category */}
                  ExpressJs
                </span>
                <h4
                  className={`picks-item-heading heading-${
                    isDay ? "light" : "dark"
                  }`}
                >
                  {/* TODO: Add dynamic item category */}
                  What are middlewares?
                </h4>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  display: grid;
  grid-template-rows: 20% 70%;
  grid-gap: 20px;
  align-items: center;
  .picks-container {
    .picks-icon > svg {
      font-size: 1.6rem;
      color: #26f8ff;
    }
    .picks-heading {
      display: inline-block;
      margin-left: 0.6rem;
      font-size: 1.4rem;
      font-weight: 700;
    }
  }
  .picks-list-main-container {
    margin-top: 1.8rem;
    margin-left: 1.5rem;
  }
  .picks-item-link {
    text-decoration: none;
  }
  .picks-item-container {
    background-color: transparent;
    padding: 0.8rem;
    &:hover {
      border-radius: 10px;
    }
  }
  // Picks item container background changes on mode
  .picks-item-cont-bg-light:hover {
    background-color: #f2f3ff;
  }
  .picks-item-cont-bg-dark:hover {
    background-color: #101014;
  }
  .picks-item-cat-container {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #12ab87;
    margin: 0.8rem 0;
  }
  .picks-item-heading {
    font-size: 1.1rem;
    letter-height: 0.8rem;
    line-height: 2rem;
  }
`;
