import React,{ useState} from 'react';
import {Button, Card,Col,Modal} from 'react-bootstrap'
import EditUserForm from './EditUserForm';
 import { connect } from "react-redux";
import { deleteUser } from '../store/usersActions';
const User = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const HandleDelete =(e)=> {
  e.preventDefault();
// props.deleteUser(props.userInfo.id)  /*this line of code is for the one without redux */
props.deleteUser(props.userInfo.id)

}
    return (
        <div>
  <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm editUser={props.editUser} prefill={props.userInfo} closeModal={handleClose} className='form'/>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

         <Col md={3}  style={{ width: '18rem',margin:'50px 20px' }}>
         <Card style={{ width: '18rem',margin:'50px 20px' }} className='lilform'>
      <Card.Body>
        <Card.Title>Name:{props.userInfo.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">PhoneNumber:{props.userInfo.phonenumber}</Card.Subtitle>
        <Card.Text>
         Location:{props.userInfo.location}
        </Card.Text>
        <Card.Link href="#" onClick={handleShow}><Button>Edit</Button></Card.Link>
        <Card.Link href="#" size="sm" onClick={HandleDelete}><Button className='delete'>Delete</Button></Card.Link>
      </Card.Body>
    </Card>
         </Col>
        </div>
    );
}

const mapDispatch = {
  deleteUser,
}

export default connect(null,mapDispatch)(User);