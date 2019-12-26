import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/css/bootstrap-theme.css"
import "../assets/main.scss"
import Header from "../components/Header"

export default () => {
  const [isDay, toggleDay] = useState(true)

  useEffect(() => {
    if (!isDay) {
      document.body.style.backgroundColor = "black"
    }
    return () => {
      document.body.style.backgroundColor = "white"
    }
  }, [isDay])

  return (
    <div className={`main-app ${isDay ? "day" : "dark"}`}>
      <Header isDay={isDay} toggleDay={toggleDay} />
    </div>
  )
}
