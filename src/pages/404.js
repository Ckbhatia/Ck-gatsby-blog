import React from "react";
import Mode from "../components/Mode";
import Head from "../components/Head";
import Layout from "../components/Layout";
import styled from "styled-components";

export default function PageNotFound() {
  return (
    <Mode>
      <Layout>
        <Head title="404" />
        <Div className="page-not-found-main center-child">
          <h1 className="page-not-found-heading">404 Page not found</h1>
        </Div>
      </Layout>
    </Mode>
  );
}

const Div = styled.div`
  height: 79vh;
  a {
    display: block;
  }
`;
