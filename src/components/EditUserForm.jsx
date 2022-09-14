import React,{useState} from 'react';
import {Form,Button  } from 'react-bootstrap';
import { editUsers } from '../store/usersActions';
// import { connect } from "react-redux"
import { useDispatch } from "react-redux";

const EditUserForm = (props) => {
    const [name, setName] = useState(props.prefill.name);
    const [phonenumber, setPhoneNumber] = useState(props.prefill.phonenumber);
    const [location, setLocation] = useState(props.prefill.location);
    const dispatch = useDispatch()

    const handleClick = (e)=> {
        e.preventDefault();
        // props.editUser(props.prefill.id,{ name, phonenumber, location });
        dispatch(editUsers({ id: props.prefill.id, name, location, phonenumber }));
        // props.editUsers(props.prefill.id,{ name, phonenumber, location });
        setName("");
        setPhoneNumber("");
        setLocation("")
        props.closeModal();
    }


	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	props.editUser(props.userBio.id, { name, email, gen });

	// 	setName("");
	// 	setGen("");
	// 	setEmail("");
	// };

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={name}onChange={(e) =>{
                        setName(e.target.value);
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value={phonenumber} placeholder="Enter phone number"  onChange={(e) =>{
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

// const mapDispatch ={
//     editUsers:editUsers
// }

export default EditUserForm;