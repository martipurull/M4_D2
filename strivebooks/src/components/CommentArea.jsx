import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Trash } from 'react-bootstrap-icons'

class CommentArea extends Component {
    state = {
        headers: {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
            }
        },
        commentsEndpoint: "https://striveschool-api.herokuapp.com/api/comments/",

        selectedBookComments: [],
        isError: false,
        commentToSubmit: {
            comment: '',
            rate: 5,
            elementId: this.props.selectedBookAsin
        },
        selectedBookAsin: this.props.selectedBookAsin

    }

    componentDidMount = () => {
        this.fetchComments()
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.selectedBookAsin !== this.props.selectedBookAsin) {
            this.fetchComments()
        }
    }

    fetchComments = async () => {
        try {
            let response = await fetch(this.state.commentsEndpoint + this.state.selectedBookAsin, this.state.headers)
            if (response.ok) {
                let data = await response.json()
                this.setState({
                    selectedBookComments: data
                })
            } else {
                this.setState({
                    isError: true
                })
            }
        } catch (error) {
            this.setState({
                isError: true
            })
            console.log(error)
        }
    }

    handleInput = (fieldName, value) => {
        this.setState({
            commentToSubmit: {
                ...this.state.commentToSubmit,
                [fieldName]: value
            }
        })
    }

    submitComment = async (e) => {
        e.preventDefault()
        console.log(this.state.commentToSubmit)
        try {
            let response = await fetch(this.state.commentsEndpoint, {
                method: 'POST',
                body: JSON.stringify(this.state.commentToSubmit),
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
                }
            })
            if (response.ok) {
                this.setState({
                    commentToSubmit: {
                        comment: '',
                        rate: 5,
                        elementId: this.props.selectedBookAsin
                    }
                })
            } else {
                this.setState({
                    isError: true
                })
            }
        } catch (error) {
            console.log(error)
            this.setState({
                isError: true
            })
        }
    }

    deleteComment = async (commentId) => {
        try {
            await fetch(this.state.commentsEndpoint + commentId, {
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

    render() {
        return (
            <>
                <h6>Readers' Comments</h6>
                <ListGroup className="mt-2 mb-2 readers-comments">

                    {
                        this.state.selectedBookComments.map((item) => (
                            <ListGroup.Item key={item._id}>
                                {item.comment} -- Rating: {item.rate} -- <Button variant="danger" size="sm" className="mt-2" onClick={() => this.deleteComment(item._id)}><Trash /></Button>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
                <Form onSubmit={this.submitComment}>
                    <Form.Group className="mt-2 mb-2">
                        <Form.Label className="comment-area-label">Your rating</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.commentToSubmit.rate}
                            onChange={(e) => {
                                this.handleInput('rate', e.target.value)
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
                            value={this.state.commentToSubmit.comment}
                            onChange={(e) => {
                                this.handleInput('comment', e.target.value)
                            }} />
                        <Button variant="dark" size="sm" className="mt-2" onClick={this.submitComment}>Submit Comment!</Button>
                    </Form.Group>
                </Form>
            </>
        )
    }
}


export default CommentArea