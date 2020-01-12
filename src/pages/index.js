import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/main.scss";
import Mode from "../components/Mode";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

const MainPage = lazy(() => import("../components/main_page/Main_page"));

export default () => {
  return (
    <div className="main-app-container">
      <Mode>
        <Layout>
          <Suspense fallback={<Loader />}>
            <MainPage />
          </Suspense>
        </Layout>
      </Mode>
    </div>
  );
};
