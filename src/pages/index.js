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
      document.body.style.backgroundColor = "black";
    }
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, [isDay]);

  return (
    <div className={`main-app ${isDay ? "day" : "dark"}`}>
      <Context.Provider value={{ isDay, toggleDay }}>
        <Layout>{/* Content or components */}</Layout>
      </Context.Provider>
    </div>
  );
};
