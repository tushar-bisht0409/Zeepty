import { SAVE_RETURN_INFO, UPDATE_RETURN_MODE } from "../action/type";
const intialState = {selectedArray:[], mode:"",scheduled:[],transit:[],lost:[],delivered: [],waybills: [],orderStatusObject:{}};

// const initialState = {cartProduct : []};
  
  export default (state = intialState, {payload, type}) => {
    switch (type) {
      case SAVE_RETURN_INFO:
        // return payload;
        return {
          selectedArray:[],
          mode:payload.mode,
          scheduled :payload.scheduled,
          transit :payload.transit,
          lost :payload.lost,
          delivered: payload.delivered,
          waybills: payload.waybills,
          orderStatusObject: payload.orderStatusObject
        };
        case UPDATE_RETURN_MODE:
        return {
            ...state,
            mode: payload,
            selectedArray: [],
        };
      
      default:
        return state;
    }
  };