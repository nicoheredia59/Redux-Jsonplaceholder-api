import { applyMiddleware, combineReducers, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { postReducer } from './Reducers/postReducer';
import { userReducer } from './Reducers/userReducer';

const reducers = combineReducers({
    posts:postReducer,
    users:userReducer
})


const store = createStore(
    reducers, 
    composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;