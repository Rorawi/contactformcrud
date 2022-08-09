import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users  from "./components/Users";
import AddUserForm from "./components/AddUserForm";
import { Container,Row,Col } from 'react-bootstrap';
import './components/myStyles.css'

function App() {
  const [user, setUser] = useState([
    {
      name:'Winifred',
      phonenumber:'0000 000 000',
      location: 'Hamburg',
      id:'ndjsbqdqbdhq'
    },
    {
      name:'Kelly',
      phonenumber:'0000 000 000',
      location: 'Hamburg',
      id:'nsbwqbdqnb'
    }
  ]);


  const deleteUser = (id) => {
		// setUser(user.filter((user) => user.id !== id));
		setUser(user.filter((user) => {
				if (user.id !== id) {
					return user;
				}
			})
		);
	};

  // const editUser = (id)=>{
  //   setUser(user.map((id,updateUser)=> user.id === id ? updateUser : user))
  // }

  // const editUser = (id, updatedUser) => {
  //   setUser(user.map((id,updateUser)=> user.id === id ? updateUser : user))
  // }

  const editUser = (id, newData) => {
		setUser(
			user.map((user) => {
				if (user.id === id) {
					return newData;
				}
				return user;
			})
		);
	};


const AddNewUser =(info)=>{
  info.id = Math.random().toString();
  setUser([...user,info])
  console.log(AddNewUser);
}


  return (
   <>
  <Container className='container'>
    <Row>
      <Col xm={4}>
        <AddUserForm newUser={AddNewUser} className="dataflex"/>
      </Col>
      {/* <Col></Col> */}
      <Col xm={8}>
      <Users userData={user} deleteUser={deleteUser} editUser={editUser}/>
      </Col>
    </Row>
  </Container>
   </>

  );
}

export default App;


