import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function ContohNavbar() {
    return(
        <Navbar expand="lg" className="bg-body-secondary">
            <Container>
        <Navbar.Brand href="#home">Go Healthy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <NavDropdown title="Other" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Delivery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default ContohNavbar;