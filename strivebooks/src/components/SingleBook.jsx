
import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import MyBadge from './MyBadge'
// import CommentArea from './CommentArea'


const SingleBook = ({ bookObj, handleClick }) => {
    // eslint-disable-next-line
    const [selectedBookAsin, setSelectedBookAsin] = useState(bookObj.asin)
    const [isSelected, setIsSelected] = useState(false)

    // state = {
    //     selectedBookAsin: this.props.bookObj.asin
    // }
    return (
        <Card className="book-cover" onClick={() => { handleClick(selectedBookAsin); setIsSelected(true) }}>
            {isSelected && <MyBadge content="SELECTED!" colour="gold" />}
            <Card.Img variant="top" src={bookObj.img} />
            <Card.Body>
                <Card.Title>{bookObj.title}</Card.Title>
            </Card.Body>
            {/* {
                    this.state.selected && <CommentArea {...this.state}/>
                } */}
        </Card>
    )
}

export default SingleBook