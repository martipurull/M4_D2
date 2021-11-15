
import { Component } from 'react'
import Card from 'react-bootstrap/Card'
import MyBadge from './MyBadge'
// import CommentArea from './CommentArea'


class SingleBook extends Component {
    state = {
        selectedBookAsin: this.props.bookObj.asin
    }

    bookObj = {}

    render() {
        return (
            <Card className="book-cover" onClick={this.props.handleClick(this.state.selectedBookAsin)}>
                {this.state.selected && <MyBadge content="SELECTED!" colour="gold" />}
                <Card.Img variant="top" src={this.props.bookObj.img} />
                <Card.Body>
                    <Card.Title>{this.props.bookObj.title}</Card.Title>
                </Card.Body>
                {/* {
                    this.state.selected && <CommentArea {...this.state}/>
                } */}
            </Card>
        )
    }
}

export default SingleBook