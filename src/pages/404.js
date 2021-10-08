import React from "react";
import Mode from "../components/Mode";
import { Link } from "gatsby";
import Head from "../components/Head";
import Layout from "../components/Layout";
import styled from "styled-components";

export default function PageNotFound() {
  return (
    <Mode>
      <Layout>
        <Head title="404" />
        <Div className="page-not-found-main center-child">
          <h1 className="page-not-found-heading">Oops, we could not find that page on this server.</h1>
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
