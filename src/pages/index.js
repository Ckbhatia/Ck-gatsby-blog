import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/main.scss";
import Mode from "../components/Mode";
import Layout from "../components/Layout";
import Head from "../components/Head";
import MainPage from "../components/main_page/Main_page";

export default () => {
  return (
    <div className="main-app-container">
      <Head title="Home" />
      <Mode>
        <Layout>
          <MainPage />
        </Layout>
      </Mode>
    </div>
  );
};
