import authReducer from './authReducer';
import {combineReducers} from 'redux';
import thoughtReducer from './thoughtReducer';
import followReducer from './followReducer';


export default combineReducers({
    auth:authReducer,
    thoughts: thoughtReducer,
    follow: followReducer
})
