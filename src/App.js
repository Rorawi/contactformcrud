import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users  from "./components/Users";
import AddUserForm from "./components/AddUserForm";
import { Container,Row,Col } from 'react-bootstrap';
import './components/myStyles.css'
import { collection, query, onSnapshot,orderBy } from "firebase/firestore";
import { useDispatch } from "react-redux"
import { db } from './firebase/config';
import {addUser} from "../src/store/usersActions"

function App() {
  const dispatch = useDispatch()
useEffect(()=> {
    const readData =async()=> {
      const q = query(collection(db, "users"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const usersArr = [];
        querySnapshot.forEach((doc) => {
           usersArr.push(doc.data());
        });
       dispatch(addUser(usersArr))
       console.log(usersArr);
      });
    };
    readData()
},[]
)






 // const [user, setUser] = useState(
  //  [
  //   {
  //     name:'Winifred',
  //     phonenumber:'0000 000 000',
  //     location: 'Hamburg',
  //     id:'ndjsbqdqbdhq'
  //   },
  //   {
  //     name:'Kelly',
  //     phonenumber:'0000 000 000',
  //     location: 'Hamburg',
  //     id:'nsbwqbdqnb'
  //   }
  // ] /*THESE LINES OF CODES ARE WITHOUT REDUX */
  //);


  // const deleteUser = (id) => {
	// 	setUser(user.filter((user) => {
	// 			if (user.id !== id) {
	// 				return user;
	// 			}
	// 		})
	// 	);
	// }; /*THESE LINES OF CODES ARE WITHOUT REDUX */

  // const editUser = (id)=>{
  //   setUser(user.map((id,updateUser)=> user.id === id ? updateUser : user))
  // }

  // const editUser = (id, updatedUser) => {
  //   setUser(user.map((id,updateUser)=> user.id === id ? updateUser : user))
  // }

  // const editUser = (id, newData) => {
	// 	setUser(
	// 		user.map((user) => {
	// 			if (user.id === id) {
	// 				return newData;
	// 			}
	// 			return user;
	// 		})
	// 	);
	// }; /*THESE LINES OF CODES ARE WITHOUT REDUX */


// const AddNewUser =(info)=>{
//   info.id = Math.random().toString();
//   setUser([...user,info])
//   console.log(AddNewUser);
// }


  return (
   <>
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
  </Container>
   </>

  );
}





export default App;

