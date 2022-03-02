import { Navbar, Container, Nav } from 'react-bootstrap'


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
                        <Nav.Link href="/projects">My projects</Nav.Link>
                        <Nav.Link href="/skills">My skills</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}