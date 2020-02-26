import React, { memo } from "react";
import styled from "styled-components";
import "../assets/main.scss";

const Subscribe = memo(() => {
  return (
    <Div className="subscribe-container">
      <div className="subscribe-items-container">
        <div className="form-text-container">
          <p className="form-text">Get latest tech articles in your inbox</p>
        </div>
        <div className="form-main-container">
          {/* <div className="form-container"> */}
          <form className="form-control">
            <input
              type="email"
              placeholder="Email address..."
              aria-label="email"
              className="email-input"
            />
            <button className="btn-input">Subscribe</button>
          </form>
        </div>
      </div>
    </Div>
  );
});

export default Subscribe;

const Div = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  margin: 0 1rem;
  background-image: linear-gradient(
    -71deg,
    #15c39a,
    #19bea0 6%,
    #19bea0 7%,
    #4c7af1 95%
  );
  height: 25rem;
  border-radius: 10px;
  .form-main-container {
    margin: 0 auto;
    width: 90%;
    background-color: #fcfcfc;
    padding: 0.5rem;
    border-radius: 3px;
  }
  .form-text {
    font-size: 2.4rem;
    color: #fcfcfc;
    padding: 1rem 2.5rem;
    margin-bottom: 2.5rem;
  }
  .form-control {
    padding: 0;
    display: grid;
    grid-template-columns: 84% 16%;
    .email-input {
      padding: 0.5rem 1rem;
      border: none;
      outline: none;
      &::placeholder {
        color: #d1cdc5;
        opacity: 1;
      }
    }
    .btn-input {
      color: #fcfcfc;
      font-size: 0.8rem;
      letter-spacing: 0.04rem;
      padding: 0.5rem 0;
      background-color: #446dd8;
      text-transform: uppercase;
      border: none;
      border-radius: 3px;
      &:hover {
        background-color: #5379db;
      }
    }
  }

  @media all and (max-width: 768px) {
    .form-text {
      font-size: 2rem;
    }
    .btn-input {
      font-size: 0.7rem;
    }
  }
  @media all and (max-width: 600px) {
    .form-text {
      font-size: 1.8rem;
    }
    .btn-input {
      font-size: 0.6rem;
    }
  }
  @media all and (max-width: 520px) {
    .form-text {
      font-size: 1.6rem;
    }
    .btn-input {
      font-size: 0.4rem;
    }
  }
`;
