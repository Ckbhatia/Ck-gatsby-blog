import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../context";

export default function Footer() {
  const value = useContext(Context);
  const { isDay } = value;

  return (
    <FooterElement
      className={`footer-main-container footer-bg-${isDay ? "light" : "dark"}`}
    >
      <div className="footer-container">
        {/* Add dynamic text */}
        <span className="footer-text">2020 @ chetan's blog</span>
      </div>
    </FooterElement>
  );
}

const FooterElement = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 6rem;
  .footer-text {
    font-size: 1rem;
    color: #a6adc9;
  }
`;
