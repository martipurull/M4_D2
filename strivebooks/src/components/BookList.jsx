import { Component } from "react"
import { Container, Row, Col, } from "react-bootstrap";
import items from '../data/scifi.json';
import SingleBook from "./SingleBook";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'



class BookList extends Component {
    state = {
        selectedBook: null,
        bookQuery: '',
    }

    bookArr = items
    searchBook = (e) => {
        e.preventDefault()
        this.setState(
            this.bookArr = items.filter(b => b.title.toLowerCase().includes(this.state.bookQuery))
        )
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

                    <Col className="d-flex flex-wrap">
                        {this.bookArr.map((item) => (
                            <SingleBook key={item.asin} bookObj={item} />
                        ))}
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default BookList;