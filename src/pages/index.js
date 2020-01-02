import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap-theme.css"
import "../assets/main.scss";
import Layout from "../components/Layout";

import Context from "../context";

export default () => {
  const [isDay, toggleDay] = useState(true);

  useEffect(() => {
    if (!isDay) {
      document.getElementById("___gatsby").style.backgroundColor = "#131217";
    }
    return () => {
      document.getElementById("___gatsby").style.backgroundColor = "#fafafc";
    };
  }, [isDay]);

  return (
    <div className={`main-app ${isDay ? "light" : "dark"}`}>
      <Context.Provider value={{ isDay, toggleDay }}>
        <Layout>{/* Content or components */}</Layout>
      </Context.Provider>
    </div>
  );
};
