import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


const Registration = () => {
    const [registrationDetails, setRegistrationDetails] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordRepeat: ''
    })

    const handleInput = (fieldName, value) => {
        setRegistrationDetails({
            ...registrationDetails,
            [fieldName]: value
        })
    }

    const isFormValid = () => {
        const { name, surname, email, password, passwordRepeat } = registrationDetails
        return name && surname && email && password && passwordRepeat
    }

    return (
        <Container className="my-5 px-5">
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder="Please enter your name"
                            required
                            minLength="2"
                            value={registrationDetails.name}
                            onChange={(e) => handleInput('name', e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            placeholder="...and your surname"
                            required
                            minLength="3"
                            value={registrationDetails.surname}
                            onChange={(e) => handleInput('surname', e.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            required
                            value={registrationDetails.email}
                            onChange={(e) => handleInput('email', e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            minLength="8"
                            value={registrationDetails.password}
                            onChange={(e) => handleInput('password', e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Reenter password"
                            required
                            value={registrationDetails.passwordRepeat}
                            onChange={(e) => handleInput('passwordRepeat', e.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Button variant="success" type="submit" disabled={!isFormValid} >
                    Register now!
                </Button>
            </Form>
        </Container>
    )
}

export default Registration