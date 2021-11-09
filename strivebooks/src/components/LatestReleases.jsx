import { Container, Row, Col, Figure } from "react-bootstrap";
import scifiBooks from '../data/scifi.json'


const LatestReleases = () => (
    <Container fluid>
        {
            scifiBooks.map((book) => (
                <Figure key={book.asin}>
                    <Figure.Image
                        className="bookCover"
                        width={171}
                        height={180}
                        alt={book.title}
                        src={book.img}
                    />
                </Figure>
            ))
        }
    </Container>
)

export default LatestReleases