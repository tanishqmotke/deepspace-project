import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
const Header = ({ active, setActive, onSearch }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setActive('search');
      onSearch(query);
      setQuery('');
    }
  };
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" style={{ boxShadow: '0 3px 16px #0007' }}>
      <Container fluid>
        <Navbar.Brand
          href="#"
          onClick={() => setActive('apod')}
          className="d-flex align-items-center"
        >
          <span style={{ fontWeight: 700, fontSize: 22, marginLeft: 6 }}>🚀 DeepSpace</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              href="#"
              active={active === 'apod'}
              onClick={() => setActive('apod')}
            >APOD</Nav.Link>
            <Nav.Link
              href="#"
              active={active === 'mars'}
              onClick={() => setActive('mars')}
            >Mars Rover</Nav.Link>
            <Form className="d-flex ms-3" onSubmit={handleSubmit}>
              <FormControl
                type="search"
                placeholder="Search NASA Images"
                className="me-2"
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={{ minWidth: 160 }}
                aria-label="Search"
              />
              <Button type="submit" variant="outline-info">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
