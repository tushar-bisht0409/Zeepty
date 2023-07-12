import { SAVE_ORDER_INFO ,SELECT_ALL,UPDATE_MODE,UPDATE_SELECTED_ARRAY,CANCEL_PENDING_ORDER,CANCEL_RTS_ORDER} from "../action/type";
const intialState = {selectedArray:[], mode:"",pending:[],RTS:[],shipped:[],cancelled:[],delivered: [], waybills: [], orderStatusObject:{}};

// const initialState = {cartProduct : []};
  
  export default (state = intialState, {payload, type}) => {
    switch (type) {
      case SAVE_ORDER_INFO:
        // return payload;
        return {
          selectedArray:[],
          mode:payload.mode,
          pending :payload.pending,
          RTS :payload.RTS,
          shipped :payload.shipped,
          cancelled :payload.cancelled,
          delivered: payload.delivered,
          waybills: payload.waybills,
          orderStatusObject: payload.orderStatusObject
        };
        case UPDATE_MODE:
        return {
            ...state,
            mode: payload,
            selectedArray: [],
        };
      case UPDATE_SELECTED_ARRAY:
        {
          const selectedArray = state.selectedArray;
          if(payload.action ==="ADD"){
            if(selectedArray.includes(payload.orderID) === false){

            
        return {
            ...state,
            selectedArray: [...selectedArray,payload.orderID],
        };
      } else{
        return state;
      }
      } else if(payload.action ==="REMOVE"){
        var newArr = state.selectedArray;
        let i= 0;
        for(i=0;i<newArr.length;i++){
          if(newArr[i]===payload.orderID){
            newArr.splice(i,1);
          }
        }
        return {
          ...state,
          selectedArray: newArr,
      };
      }
      }

      case CANCEL_PENDING_ORDER:
          {
            let pendingArray = [...state.pending];
            let cancelledArray = [...state.cancelled];
            let ind = pendingArray.findIndex(obj => obj.order_id === payload.order.order_id);
            pendingArray.splice(ind,1);
            cancelledArray.push(payload.order);
            return {
                ...state,
                pending: pendingArray,
                cancelled: cancelledArray,
            };
        };

      case CANCEL_RTS_ORDER:
          {
            let rtsArray = [...state.RTS];
            let cancelledArray = [...state.cancelled];
            let ind = rtsArray.findIndex(obj => obj.order_id === payload.order.order_id);
            rtsArray.splice(ind,1);
            cancelledArray.push(payload.order);
            return {
                ...state,
                RTS: rtsArray,
                cancelled: cancelledArray,
            };
        };

      // case SELECT_ALL:
      //   return {
      //     ...state,
      //     selectedArray: payload,
      // };

      case SELECT_ALL:{
        if(payload.action ==="ADD"){
          return {
                ...state,
                selectedArray: payload.array,
            };
        }
        else if(payload.action==="REMOVE"){
             return { ...state,
              selectedArray: payload.array}
        }
      }

      
      default:
        return state;
    }
  };