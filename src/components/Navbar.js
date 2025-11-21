import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import './Navbar.css';

function MyNavbar({ movies, setFilteredMovies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('English');

  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = movies.filter(movie =>
      movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  // Handle language change
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Future: Could also filter content based on language
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#">BookMyShow</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
        </Nav>

        {/* Search Form */}
        <Form className="d-flex" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Search movies..."
            className="me-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" variant="danger">Search</Button>
        </Form>

        {/* Language Dropdown */}
        <Dropdown className="ms-3">
          <Dropdown.Toggle variant="secondary" id="dropdown-language">
            {language}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleLanguageChange('English')}>English</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('Tamil')}>Tamil</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('Hindi')}>Hindi</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
