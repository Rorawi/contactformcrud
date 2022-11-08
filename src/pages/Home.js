import React from 'react';
import { Container,Row,Col, Button } from 'react-bootstrap';
import Users  from "../components/Users";
import AddUserForm from "../components/AddUserForm";
import { signOut } from 'firebase/auth';
import{auth} from '../firebase/config'
const Home = () => {

    const SignOut = async(e)=> {
        e.preventDefault()
        try {signOut(auth)}catch(e) {
            console.log(e)
          }
         
    }
    return (
        <div>
          <Container className='container'>
    <Row>
      <Col xm={4}>
        <AddUserForm 
        // newUser={AddNewUser}  /*THIS LINE OF CODES IS WITHOUT REDUX */
        className="dataflex"
        />
      </Col>
      {/* <Col></Col> */}
      <Col xm={8}>
      <Users 
      // userData={user} 
      // deleteUser={deleteUser}
      //  editUser={editUser}  /*THESE LINES OF CODES ARE WITHOUT REDUX */
       />
      </Col>
    </Row>
    <Button variant='danger' onClick={SignOut}>Log Out</Button>
  </Container>
        </div>
    );
}

export default Home;
