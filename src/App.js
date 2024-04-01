import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./App.css"; // You can create this CSS file for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Import pages
import Home from "./HomePage";
import About from "./AboutPage";
import PhotoGallery from "./PhotoGalleryPage";
import Discography from "./Discography";
import VideoGallery from "./VideoGalleryPage";
import Contact from "./ContactPage";
import NoPage from "./NoPage";

function App() {
  return (
    <Router>
      <Navbar
        bg="white"
        variant="white"
        expand="lg"
        style={{ boxShadow: "0.1rem 0.1rem 0.1rem #010101" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={require("./assets/imgs/navband.jpg")} alt="band logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ color: "#010101" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={{ color: "#010101" }} href="/">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "#010101" }} href="/discography">
                Discography
              </Nav.Link>
              <Nav.Link style={{ color: "#010101" }} href="/photo-gallery">
                Photo Gallery
              </Nav.Link>
              <Nav.Link style={{ color: "#010101" }} href="/video-gallery">
                Video Gallery
              </Nav.Link>
              <Nav.Link style={{ color: "#010101" }} href="/contact">
                Contact
              </Nav.Link>
              <Nav.Link style={{ color: "#010101" }} href="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
