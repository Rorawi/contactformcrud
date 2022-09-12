import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const AddUserForm = (props) => {
    const [name, setName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");

    const handleClick = (e)=> {
        e.preventDefault();
        props.newUser({ name, phonenumber, location });
        setName("");
        setPhoneNumber("");
        setLocation("")
    }
    return (
        <div>
            <Form className='form'>
            <h3 className='title'>Contact Form</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={name}onChange={(e) =>{
                        setName(e.target.value);
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" value={phonenumber} placeholder="Enter email"  onChange={(e) =>{
                        setPhoneNumber(e.target.value);
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter location" value={location} onChange={(e) =>{
                        setLocation(e.target.value);
                    }}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddUserForm;