import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'


export default function navbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand className="logo">
                </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link href="/presentation">Who am I ?</Nav.Link>
                          <NavDropdown title="My projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/project1">Projet 1</NavDropdown.Item>
                            <NavDropdown.Item href="/project2">Projet 2</NavDropdown.Item>
                            <NavDropdown.Item href="/project3">Projet 3</NavDropdown.Item>
                          </NavDropdown>
                        <Nav.Link href="/skills">My skills</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}