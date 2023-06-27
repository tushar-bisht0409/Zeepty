import {combineReducers} from 'redux';
import getorderReducer from './getorderReducer';
import getproductReducer from './getproductReducer';
import saveorderinfo from "./saveorderReducer"
import savelistingInRedux from "./listingReducer"
import returnReducer from "./returnReducer"



export default combineReducers({
  // auth: authReducer,
  getorderReducer: getorderReducer,
  getproductReducer:getproductReducer,
  saveorderinfo:saveorderinfo,
  savelistingInRedux:savelistingInRedux,
  returnReducer: returnReducer
})