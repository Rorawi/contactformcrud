import { legacy_createStore as createStore } from "redux";
import UsersReducer from "../reducer/usersReducer";

let Store = createStore(UsersReducer) 


export default Store;