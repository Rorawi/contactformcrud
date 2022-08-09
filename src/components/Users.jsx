import React from 'react';
import User from "./User";
// import EditUserForm from "./EditUserForm";
import { Container, Row } from "react-bootstrap";

const Users = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    {props.userData.map((info) => {
                        return (
                            <User userInfo={info}
                                  key={info.id}
                                  deleteUser={props.deleteUser}
                                  editUser={props.editUser}/>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Users;

