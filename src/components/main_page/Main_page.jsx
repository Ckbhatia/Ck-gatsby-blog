import React from "react";
import styled from "styled-components";
import "../../assets/main.scss";

import Latestpost from "./Latest_post";
import SideBar from "./Sidebar";
import Articles from "./Articles";
import Subscribe from "../Subscribe";

export default function MainPage() {
  return (
    <Section className="main-page-main-container wrapper">
      <section className="hero-section">
        <Latestpost />
        <SideBar />
      </section>
      <section className="articles-section">
        <Articles />
      </section>
      <section className="form-section">
        <Subscribe />
      </section>
    </Section>
  );
}

const Section = styled.section`
  .hero-section {
    display: grid;
    grid-template-columns: 65% 30%;
    grid-gap: 4rem;
    align-items: center;
    @media screen and (max-width: 992px) {
      grid-template-columns: 70%;
      justify-content: center;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 68%;
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: 88%;
    }
  }
  .articles-section {
    margin-top: 4rem;
  }
  .form-section {
    margin: 4rem 0;
  }
`;
