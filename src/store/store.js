
import { legacy_createStore as createStore, applyMiddleware , combineReducers} from "redux";
import UsersReducer from "../reducer/usersReducer";
import authReducer from "../reducer/authReducer";
 import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage}

let reducers = combineReducers({
    UsersReducer:UsersReducer,
    authReducer:authReducer
})
const persistedReducer = persistReducer(persistConfig, reducers);
export let Store = createStore(persistedReducer);
export let persistor = persistStore(Store);



// export default {Store,persistor};