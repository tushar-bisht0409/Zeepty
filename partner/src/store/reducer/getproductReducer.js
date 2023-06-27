import { GET_PRODUCT_INFO } from "../action/type";
const intialState = {};

// const initialState = {cartProduct : []};
  
  export default (state = intialState, {payload, type}) => {
    switch (type) {
      case GET_PRODUCT_INFO:
        return payload;
      
      default:
        return state;
    }
  };