import React, {useState} from 'react';
import {Form, Button} from  'react-bootstrap';
function EditUserForm(props) {
    const [name,setName]=useState(props.UserData.name)
    const [email,setEmail]=useState(props.UserData.email)
    const [gen,setGen]=useState(props.UserData.gen)
    const handleEdit=(e)=>{
        e.preventDefault();
         setName(""); setEmail(""); setGen("")
    };
    return (
        <Form style={{border:"1px solid pink", backgroundColor: "skyblue", height: "350px"}}>
      <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name}
        onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>
      <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
        onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>
      <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicGen">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="Gen" placeholder="gen" value={gen}  onChange={(e)=>{setGen(e.target.value)}} />
      </Form.Group>
      <Button style={{width: "100px", marginRight:"30px", marginLeft:"50px", fontSize:"18px" , color: "black"}} variant="primary" type="submit" onClick={handleEdit}>
        Save</Button>
    </Form>
     );
}
export default EditUserForm;






