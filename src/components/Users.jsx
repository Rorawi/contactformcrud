import React from 'react';
import User from "./User";
import { Container, Row } from "react-bootstrap";
import { connect } from 'react-redux'

const Users = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    {props.users.map((info,index) => {
                        return (
                            <User userInfo={info}
                                  key={index}
                                  deleteUser={props.deleteUser}
                                  editUser={props.editUser}/>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
}

const mapStateToProps =(state) => ({
    users:state.UsersReducer.user
})

export default connect(mapStateToProps)(Users);