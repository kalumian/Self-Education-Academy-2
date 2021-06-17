import {createStore} from 'redux'
import { Reducer } from './Reducer';

const initialState = { 
    loding : true,
    user : ""
};
const store = createStore( Reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;