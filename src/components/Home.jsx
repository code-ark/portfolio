import React from "react"
import "./home.css"
import Nav from "react-bootstrap/Nav"

export default function Home() {
  return (
    <div className="wrapper">
      <div className="left-container">
        <p className="hello">HELLO.</p>
      </div>
      <div className="nav-link">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/home">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item></Nav.Item>
          </Nav>
        </div>
      <div className="right-container">
        
        <p className="intro">
          My name is Noah King and I'm a full-stack Developer
        </p>
      </div>
    </div>
  )
}
