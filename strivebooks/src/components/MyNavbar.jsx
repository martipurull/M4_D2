import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'



const MyNavbar = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand className="navbar-fake-logo" href="#">SB</Navbar.Brand>
            <Nav className="ml-auto">
                <Link to="/">
                    <div className="nav-link">Home</div>
                </Link>
                <Link to="/about">
                    <div className="nav-link">About</div>
                </Link>
                <Link to="/register">
                    <div className="nav-link">Register</div>
                </Link>
            </Nav>
        </Container>
    </Navbar>
)

export default MyNavbar