

import { Component } from 'react'
import Card from 'react-bootstrap/Card'
import MyBadge from './MyBadge'


class SingleBook extends Component {
    state = {
        selected: false
    }

    bookObj = {}

    render() {
        return (
            <Card className="book-cover" onClick={() => this.setState(({ selected: true }))}>
                {this.state.selected && <MyBadge content="SELECTED!" colour="gold" />}
                <Card.Img variant="top" src={this.props.bookObj.img} />
                <Card.Body>
                    <Card.Title>{this.props.bookObj.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default SingleBook