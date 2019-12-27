import React from "react"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap"
import { GoSearch } from "react-icons/go"
import { MdWbSunny } from "react-icons/md"
import { IoIosMoon } from "react-icons/io"
import styled from "styled-components"

export default function Header({ isDay, toggleDay }) {
  return (
    <Div className="navbar-main-container">
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/">
          {/* TODO: Add owner name dynamically */}
          <h1 className="navbar-main-heading-text">
            chetan's <span className="header-blog-text">blog</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Topic" id="basic-nav-dropdown">
              {/* ADD Dynamic names */}
              <NavDropdown.Item href="#">ReactJs</NavDropdown.Item>
              <NavDropdown.Item href="#">JavaScript</NavDropdown.Item>
              <NavDropdown.Item href="#">Express</NavDropdown.Item>
              <NavDropdown.Item href="#">HTML & CSS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Button variant="outline-success">
              <GoSearch />
            </Button>
            <FormControl type="text" placeholder="SEARCH" className="mr-sm-2" />
          </Form>
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
        </Navbar.Collapse>
      </Navbar>
    </Div>
  )
}

const Div = styled.div`
  margin: 0 2rem;
  .navbar-main-heading-text {
    font-family: "Roboto", sans-serif;
    // font-family: "Source Serif Pro", serif;
    font-size: 1.4rem;
    letter-spacing: 0.01rem;
    color: #3b3e4d;
    font-weight: 700;
    .header-blog-text {
      color: #12ab87;
    }
  }

  .dropdown-menu {
    font-size: 0.8rem;
    text-transform: uppercase;
    .dropdown-item {
      padding-bottom: 0.4rem;
      padding-top: 0.4rem;
    }
  }

  .nav-link {
    font-family: "Roboto", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .btn-outline-success {
    color: #3b3e4d;
    border: none;
    outline: 0;
    &:hover {
      color: darkgrey;
      background-color: transparent;
    }
    &:focus {
      background-color: transparent;
      // RESET
      box-shadow: 0 0 0;
    }
  }

  .form-control {
    // RESET
    box-shadow: 0 0 0;
  }

  // Toggle Button
  .mode-toggle-btn {
    background-color: transparent;
    border: none;
    outline: none;
  }
`
