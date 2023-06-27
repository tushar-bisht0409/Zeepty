import {combineReducers} from 'redux';
import productReducer from './productReducer';
// import authReducer from './auth_reducer';
import userReducer from './userReducer';
import saveproduct from "./saveproductReducer"
import placeorderReducer from './placeorderReducer';


export default combineReducers({
  // auth: authReducer,
  userinfo: userReducer,
  productinfo:productReducer,
  saveproduct:saveproduct,
  cartProduct: placeorderReducer,
})