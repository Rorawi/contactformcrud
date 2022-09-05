import React from "react"
import User from "./bUser";
import {Row} from "react-bootstrap";
function SeeAllUsers(props) {
    return (
        <div>
        <h1>USER</h1>
        <Row md={3}>
            {props.UserData.map((item,index)=>{
             return (
             <User key={item.id}
             UserData={item}
             deleteUser={props.deleteUser}/>)
            })}
        </Row>
        </div>
     );
}
export default SeeAllUsers;