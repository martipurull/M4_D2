import { useEffect, useState } from 'react'
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

    const [originalPasswordError, setOriginalPasswordError] = useState(true)
    const [repeatPasswordError, setRepeatPasswordError] = useState(true)


    const handleInput = (fieldName, value) => {
        setRegistrationDetails({
            ...registrationDetails,
            [fieldName]: value
        })
    }

    const passwordHasNumAndLetters = (password) => {
        const passwordArr = password.split('')
        let numsInPassword = passwordArr.filter(char => !isNaN(char))
        let lettersInPassword = passwordArr.filter(char => isNaN(char))
        if (numsInPassword.length > 0 && lettersInPassword.length > 0) {
            setOriginalPasswordError(false)
            return true
        } else {
            return false
        }

    }

    const passwordsMatch = (passwordToCheck) => {
        if (registrationDetails.password === passwordToCheck) {
            setRepeatPasswordError(false)
            return true
        } else {
            return false
        }
    }

    const validateForm = () => {
        if (passwordHasNumAndLetters(registrationDetails.password) && passwordsMatch(registrationDetails.passwordRepeat)) {
            return true
        }
    }

    useEffect(() => {
        validateForm()
    }, [registrationDetails])

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
                <Button variant="success" type="submit" disabled={!validateForm()} >
                    Register now!
                </Button>
            </Form>
        </Container>
    )
}

export default Registration