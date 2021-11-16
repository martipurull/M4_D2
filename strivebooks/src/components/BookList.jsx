import { Component } from "react"
import { Container, Row, Col, } from "react-bootstrap";
import items from '../data/scifi.json';
import SingleBook from "./SingleBook";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import CommentArea from "./CommentArea";



class BookList extends Component {
    state = {
        selectedBookAsin: null,
        bookQuery: '',
    }

    bookArr = items
    searchBook = (e) => {
        e.preventDefault()
        this.setState(
            this.bookArr = items.filter(b => b.title.toLowerCase().includes(this.state.bookQuery))
        )
    }
    getAsin = (asin) => {
        console.log('getAsin: ' + asin)
        this.setState({
            selectedBookAsin: asin
        })
    }

    render() {
        return (
            <Container>
                <Form className="mt-3 mb-3" onInput={this.searchBook}>
                    <FormControl type="text" placeholder="Search" className="m  r-sm-2 mb-2" value={this.state.bookQuery} onChange={(e) => this.setState({
                        bookQuery: e.target.value.toLowerCase()
                    })} />
                    <Button variant="outline-primary" onClick={this.searchBook}>Search</Button>
                </Form>
                <Row>
                    <Col className="d-flex flex-wrap col-12 col-sm-8">
                        {this.bookArr.map((item) => (
                            <SingleBook key={item.asin} bookObj={item} handleClick={(asin) => this.getAsin(asin)} />
                        ))}
                    </Col>
                    <Col className="col-12 col-sm-4">
                        <CommentArea selectedBookAsin={this.state.selectedBookAsin} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BookList;