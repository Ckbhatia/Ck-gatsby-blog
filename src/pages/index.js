import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/main.scss";
import Mode from "../components/Mode";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MainPage from "../components/main_page/MainPage";

export default () => {
  return (
    <div className="main-app-container">
      <SEO title="Home" pathname="/"/>

      <Mode>
        <Layout>
          <MainPage />
        </Layout>
      </Mode>
    </div>
  );
};
