import { useState } from 'react'
import { Container, Figure, Alert } from "react-bootstrap";
import scifiBooks from '../data/scifi.json'

const LatestReleases = () => {

    const [selectedBookPrice, setSelectedBookPrice] = useState(null)

    // state = {
    //     selectedBookPrice: null
    // }

    return (
        <Container fluid>
            {
                selectedBookPrice ? <Alert variant="success">
                    <Alert.Heading>Price for selected book: ${selectedBookPrice}</Alert.Heading>
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
                            onClick={setSelectedBookPrice(book.price)}
                        />
                    </Figure>
                ))
            }
        </Container>
    )
}


export default LatestReleases