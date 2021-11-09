import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'



const MyNavbar = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#">SB</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)

export default MyNavbar