import { Jumbotron, Container } from 'react-bootstrap'


const Welcome = () => (
    <Jumbotron fluid>
        <Container>
            <h1>StriveBooks</h1>
            <p className="mt-5">“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”</p>
            <figcaption>― Jane Austen</figcaption>
        </Container>
    </Jumbotron>
)

export default Welcome