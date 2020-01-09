import React, { lazy, Suspense, useContext } from "react";
import styled from "styled-components";
import "../../assets/main.scss";
import Loader from "../Loader";

const Latestpost = lazy(() => import("./Latest_post"));
const SideBar = lazy(() => import("./Sidebar"));
const Articles = lazy(() => import("./Articles"));

export default function MainPage() {
  return (
    <Section className="main-page-main-container wrapper">
      <Suspense fallback={<Loader />}>
        <section className="hero-section">
          <Latestpost />
          <SideBar />
        </section>
        <section className="articles-section">
          <Articles />
        </section>
      </Suspense>
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
      // grid-template-columns: 57%;
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
`;
