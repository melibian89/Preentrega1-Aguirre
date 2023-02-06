import "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">INICIO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="header__link" to="/productos/bebidassinalcohol">Bebidas sin alcohol</Nav.Link>
            <Nav.Link className="header__link" to="/productos/bebidasconalcohol">Bebidas con alcohol</Nav.Link>
            <Nav.Link className="header__link" to="/productos/congelados">Congelados</Nav.Link>
            <Nav.Link className="header__link" to="/productos/snacks">Snacks</Nav.Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;