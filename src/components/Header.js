import React from "react"
import styled from "styled-components"
import { MdWbSunny } from "react-icons/md"
import { IoIosMoon } from "react-icons/io"
import { GoSearch } from "react-icons/go"
import { Dropdown } from "react-bootstrap"

export default function Header({ isDay, toggleDay }) {
  return (
    <>
      {/* <!-- navbar -->   */}
      <Div className="container-fluid">
        <nav className="navbar navbar-expand-lg fixed-top flex-between">
          <div className="navbar-header-and-list-container flex-start">
            <div className="navbar-header-container">
              {/* TODO: Add owner name dynamically */}
              <h1 className="navbar-main-heading-text">
                chetan's <span className="header-blog-text">blog</span>
              </h1>
            </div>
            <div className="nav-list-main-container">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Topic
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">React</Dropdown.Item>
                  <Dropdown.Item href="#">Express</Dropdown.Item>
                  <Dropdown.Item href="#">javascript</Dropdown.Item>
                  <Dropdown.Item href="#">HTML CSS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          {/*  */}
          <div className="search-container flex-center">
            <div className="search-btn-container">
              <button className="search-btn">
                <GoSearch />
              </button>
            </div>
            <div className="search-input-container">
              <input
                className="search-input"
                type="text"
                placeholder="SEARCH"
              />
            </div>
            <div className="mode-toggler-container">
              {isDay ? (
                <button
                  onClick={() => toggleDay(() => !isDay)}
                  className="mode-toggle-btn"
                >
                  <MdWbSunny />
                </button>
              ) : (
                <button
                  onClick={() => toggleDay(() => !isDay)}
                  className="mode-toggle-btn"
                >
                  <IoIosMoon />
                </button>
              )}
            </div>
          </div>
        </nav>
      </Div>
    </>
  )
}

const Div = styled.div`
  .navbar {
    margin: 0 2rem;
  }
  // Navbar header and list container child
  .navbar-header-container {
    margin-left: 2rem;
    .navbar-main-heading-text {
      font-family: "Roboto", sans-serif;
      // font-family: "Source Serif Pro", serif;
      font-size: 1.4rem;
      letter-spacing: 0.04rem;
      color: #3b3e4d;
      font-weight: 700;
      .header-blog-text {
        color: #12ab87;
      }
    }
  }
  .nav-list-main-container {
    margin-left: 2rem;
  }

  .btn-secondary.dropdown-toggle {
    font-family: "Roboto", serif;
    font-weight: 700;
    margin-left: 1.4rem;
    font-size: 0.9rem;
    background-color: transparent;
    color: #3b3e4d;
    border: none;
    box-shadow: none;
    text-transform: uppercase;
    &:hover {
      color: darkgrey;
      background-color: transparent;
      border: none;
    }
  }
  .dropdown {
    margin-top: 0.2rem;
  }
  .dropdown-menu {
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(154, 160, 185, 0.05),
      0 5px 20px rgba(166, 173, 201, 0.2);
    text-transform: uppercase;
    padding: 9px 4px 15px;
    z-index: 1;
    .dropdown-item {
      font-size: 0.8rem;
      letter-spacing: 0.04rem;
      word-height: 0.4rem;
      margin: 0.4rem 0;
    }
  }

  .search-container {
    margin-top: 0.2rem;
  }

  // Search button
  .search-btn {
    background-color: transparent;
    border: none;
    outline: none;
    &:active {
      color: rgba(156, 156, 156);
    }
  }
  .search-input {
    font-size: 0.9rem;
    border-radius: 2px;
    border: none;
    outline: none;
    margin-left: 0.4rem;
  }
  // Toggle Button
  .mode-toggle-btn {
    background-color: transparent;
    border: none;
    outline: none;
  }
`
