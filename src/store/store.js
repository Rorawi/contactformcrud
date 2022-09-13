import { applyMiddleware,legacy_createStore as createStore } from "redux";
import UsersReducer from "../reducer/usersReducer";
import thunk from 'redux-thunk';

let Store = createStore(UsersReducer, applyMiddleware(thunk)) 


export default Store;