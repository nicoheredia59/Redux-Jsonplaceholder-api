import { applyMiddleware, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { postReducer } from './Reducers/postReducer';


const store = createStore(
    postReducer, 
    composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;