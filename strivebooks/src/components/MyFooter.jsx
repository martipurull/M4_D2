import { Container, Row, Col } from 'react-bootstrap'
import { Facebook, Instagram, Twitter, Book } from 'react-bootstrap-icons'

const MyFooter = () => (
    <footer>
        <Container fluid className="bg-dark text-white mt-3 py-5">
            <Row>
                <Col><Facebook className="mr-3" /><Instagram className="mr-3" /><Twitter className="mr-3" /></Col>
                <Col xs={6}>StriveBooks Corp. 2021</Col>
                <Col><Book /></Col>
            </Row>
        </Container>
    </footer>
)

export default MyFooter