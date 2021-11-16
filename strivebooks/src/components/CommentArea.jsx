import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Trash } from 'react-bootstrap-icons'
import WarningSign from './WarningSign'

const CommentArea = ({ selectedBookAsin }) => {
    const authorization = { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU" }
    const commentsEndpoint = "https://striveschool-api.herokuapp.com/api/comments/"
    const [selectedBookComments, setSelectedBookComments] = useState([])
    const [isError, setIsError] = useState(false)
    const [commentToSubmit, setCommentToSubmit] = useState({
        comment: '',
        rate: 5,
        elementId: selectedBookAsin
    })

    // state = {

    //     authorization: {
    //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
    //     },
    //     commentsEndpoint: "https://striveschool-api.herokuapp.com/api/comments/",

    //     selectedBookComments: [],
    //     isError: false,
    //     commentToSubmit: {
    //         comment: '',
    //         rate: 5,
    //         elementId: this.props.selectedBookAsin
    //     },
    // }

    // useEffect(() => {
    //     fetchComments()
    // }, [])


    // componentDidMount = () => {
    //     this.fetchComments()
    // }

    useEffect(() => {
        fetchComments()
        setCommentToSubmit({
            ...commentToSubmit,
            elementId: selectedBookAsin
        })
    }, [selectedBookAsin])

    // componentDidUpdate = (prevProps) => {
    //     console.log(`prevProps.selectedBookAsin: ${ prevProps.selectedBookAsin } VS this.props.selectedBookAsin: ${ this.props.selectedBookAsin }`)
    //     if (prevProps.selectedBookAsin !== this.props.selectedBookAsin) {
    //         this.fetchComments()
    //     }
    // }

    const fetchComments = async () => {
        try {
            let response = await fetch(commentsEndpoint + selectedBookAsin, { headers: authorization })
            if (response.ok) {
                let data = await response.json()
                setSelectedBookComments(data)

                // this.setState({
                //     selectedBookComments: data
                // })
            } else {
                setIsError(true)

                // this.setState({
                //     isError: true
                // })
            }
        } catch (error) {
            setIsError(true)

            // this.setState({
            //     isError: true
            // })
            console.log(error)
        }
    }

    const handleInput = (fieldName, value) => {
        setCommentToSubmit({
            ...commentToSubmit,
            [fieldName]: value
        })

        //    this.setState({
        //         commentToSubmit: {
        //             ...this.state.commentToSubmit,
        //             [fieldName]: value
        //         }
        //     })
    }

    const submitComment = async (e) => {
        e.preventDefault()
        console.log(commentToSubmit)
        try {
            let response = await fetch(commentsEndpoint, {
                method: 'POST',
                body: JSON.stringify(commentToSubmit),
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
                }
            })
            if (response.ok) {
                setCommentToSubmit({
                    comment: '',
                    rate: 5,
                    elementId: selectedBookAsin
                })

                // this.setState({
                //     commentToSubmit: {
                //         comment: '',
                //         rate: 5,
                //         elementId: this.props.selectedBookAsin
                // }
                // })
            } else {
                setIsError(true)

                // this.setState({
                //     isError: true
                // })
            }
        } catch (error) {
            console.log(error)
            setIsError(true)

            // this.setState({
            //     isError: true
            // })
        }
    }

    const deleteComment = async (commentId) => {
        try {
            await fetch(commentsEndpoint + commentId, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
                }
            })
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {isError && <WarningSign content="There seems to be an error with the comments for this book..." />}
            <h5>Readers' Comments</h5>
            {/* {selectedBookAsin && <h6></h6>} */}
            <ListGroup className="mt-2 mb-2 readers-comments">

                {
                    selectedBookComments.map((item) => (
                        <ListGroup.Item key={item._id}>
                            {item.comment} -- Rating: {item.rate} --
                            <Button
                                variant="danger"
                                size="sm"
                                className="mt-2"
                                onClick={() => deleteComment(item._id)}>
                                <Trash />
                            </Button>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
            <Form onSubmit={submitComment}>
                <Form.Group className="mt-2 mb-2">
                    <Form.Label className="comment-area-label">Your rating</Form.Label>
                    <Form.Control
                        as="select"
                        value={commentToSubmit.rate}
                        onChange={(e) => {
                            handleInput('rate', e.target.value)
                        }}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    <Form.Label className="comment-area-label">Leave your comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={commentToSubmit.comment}
                        onChange={(e) => {
                            handleInput('comment', e.target.value)
                        }} />
                    <Button
                        variant="dark"
                        size="sm"
                        className="mt-2"
                        onClick={submitComment}>Submit Comment!</Button>
                </Form.Group>
            </Form>
        </>
    )
}


export default CommentArea