import { GET_PRODUCT_INFO } from "../actions/type";
const intialState = {};
  
  export default (state = intialState, {payload, type}) => {
    switch (type) {
      case GET_PRODUCT_INFO:
        return payload;
      
      default:
        return state;
    }
  };