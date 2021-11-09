import { Component } from 'react'
import { Container, Figure, Alert } from "react-bootstrap";
import scifiBooks from '../data/scifi.json'

class LatestReleases extends Component {
    state = {
        selectedBookPrice: null
    }
    render() {
        return (
            <Container fluid>
                {
                    this.state.selectedBookPrice ? <Alert variant="success">
                        <Alert.Heading>Price for selected book: ${this.state.selectedBookPrice}</Alert.Heading>
                    </Alert> : ''
                }
                {
                    scifiBooks.map((book) => (
                        <Figure key={book.asin}>
                            <Figure.Image
                                className="bookCover"
                                width={171}
                                height={180}
                                alt={book.title}
                                src={book.img}
                                onClick={() => this.setState(
                                    {
                                        selectedBookPrice: book.price
                                    }
                                )}
                            />
                        </Figure>
                    ))
                }
            </Container>
        )
    }
}


export default LatestReleases