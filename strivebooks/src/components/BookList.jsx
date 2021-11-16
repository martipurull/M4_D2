import { useState } from "react"
import { Container, Row, Col, } from "react-bootstrap";
import items from '../data/scifi.json';
import SingleBook from "./SingleBook";
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import CommentArea from "./CommentArea";



const BookList = () => {

    const [selectedBookAsin, setSelectedBookAsin] = useState(null)

    const [bookQuery, setBookQuery] = useState('')

    const [bookArr, setBookArr] = useState(items)
    // state = {
    //     selectedBookAsin: null,
    //     bookQuery: '',
    // }

    // let bookArr = items

    const searchBook = (e) => {
        e.preventDefault()
        setBookArr(items.filter(b => b.title.toLowerCase().includes(bookQuery)))
    }
    const getAsin = (asin) => {
        console.log('getAsin: ' + asin)
        setSelectedBookAsin(asin)
    }
    return (
        <Container>
            <Form className="mt-3 mb-3" onInput={searchBook}>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="m  r-sm-2 mb-2"
                    value={bookQuery}
                    onChange={(e) => { setBookQuery(e.target.value.toLowerCase()) }} />
            </Form>
            <Row>
                <Col className="d-flex flex-wrap col-12 col-sm-8">
                    {bookArr.map((item) => (
                        <SingleBook key={item.asin} bookObj={item} handleClick={(asin) => getAsin(asin)} />
                    ))}
                </Col>
                <Col className="col-12 col-sm-4">
                    <CommentArea selectedBookAsin={selectedBookAsin} />
                </Col>
            </Row>
        </Container>
    )
}

export default BookList;