import React, { useState } from 'react';
import {Container,Row,Col }from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/config'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            navigate("/login" , {replace:true})
            console.log(user);
        } catch (e) {
            console.log(e);
        }

        setEmail("")
        setPassword("")
    }
    const google = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithPopup(auth, provider)
            console.log(user);
        } catch (e) {
            console.log(e);
        }

        setEmail("")
        setPassword("")
    }
    return (
        <div>
           <Container>
            <Row>
                <Col xs={3}></Col>
                <Col xs={6} className='register-login'>
                    <h1>REGISTER HERE</h1>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" className='input' value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" className='input' value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleRegister}>
                    Submit
                </Button>

                <Button onClick={google} variant='info' className='google-btn'>Login with google</Button>
            </Form>

                </Col>
                <Col xs={3}></Col>
            </Row>
            </Container>      
              </div>
    );
}

export default Register;
