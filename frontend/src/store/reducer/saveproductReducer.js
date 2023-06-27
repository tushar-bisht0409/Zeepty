import { SAVE_PRODUCT_PROPS } from "../actions/type";

const intialState = {
  products :null
}

 
  
export default (state = intialState, {payload, type}) => {
    switch (type) {
      case SAVE_PRODUCT_PROPS:
        return {
            products: payload,
        };
      
      default:
        return state;
    }
  };