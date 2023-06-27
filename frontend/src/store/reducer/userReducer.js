import { SAVE_USERINFO } from "../actions/type";
const intialState = {
  };
  
  export default (state = intialState, {payload, type}) => {
    switch (type) {
      case SAVE_USERINFO:
        return payload;
      default:
        return state;
    }
  };