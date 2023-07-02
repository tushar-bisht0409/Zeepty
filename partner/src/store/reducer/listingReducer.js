import { SAVE_LISTING_INFO, UPDATE_DRAFT_INFO,UPDATE_INACTIVE_INFO,UPDATE_INSTOCK_INFO,UPDATE_STOCK_INFO,UPDATE_REQUEST_INFO } from "../action/type";
const intialState = {
        lowOnStock: [],
        blacklisted: [],
        draft : [],
        approved : [],
        rejected : [],
        pending : [],
        inStock:[],
        outOfStock:[],
        inActive:[],
        draft:[]
      };
  
  export default (state = intialState, {payload, type}) => {
    let oldInfoArray = [];
    switch (type) {
      case SAVE_LISTING_INFO:
        return {
            inStock :payload.inStock,
            outOfStock :payload.outOfStock,
            inActive :payload.inActive,
            draft: payload.draft,
            lowOnStock: payload.lowOnStock,
            blacklisted: payload.blacklisted,
            approved : payload.approved,
            rejected : payload.rejected,
            pending : payload.pending,
        };

        case UPDATE_INSTOCK_INFO:
          {
            oldInfoArray = payload.oldInfoArray;
            let ind = oldInfoArray.findIndex(obj => obj.listing_id === payload.newInfo.listing_id);
            if(payload.action ==="ADD"){
              if(ind === -1){
          return {
              ...state,
              inStock: [...oldInfoArray,payload.newInfo],
          };
        } else{
          return state;
        }
        } else if(payload.action ==="REMOVE"){
          if(ind === -1){
            return state;
          } else{
            oldInfoArray = payload.oldInfoArray;
            oldInfoArray.splice(ind,1);
          }
          return {
            ...state,
            inStock: oldInfoArray,
        };
        }
        };

        case UPDATE_STOCK_INFO:
          {
            let ofsArray = [...state.outOfStock];
            let insArray = [...state.inStock];
            let losArray = [...state.lowOnStock];
            let ind1 = ofsArray.findIndex(obj => obj.listing_id === payload.listing.listing_id && obj.sku_id === payload.listing.sku_id && obj.style_code === payload.listing.style_code);
            let ind2 = insArray.findIndex(obj => obj.listing_id === payload.listing.listing_id && obj.sku_id === payload.listing.sku_id && obj.style_code === payload.listing.style_code);
            let ind3 = losArray.findIndex(obj => obj.listing_id === payload.listing.listing_id && obj.sku_id === payload.listing.sku_id && obj.style_code === payload.listing.style_code);
            if(parseInt(payload.listing.product_size.inventory) !== 0){
              if(ind1 !== -1) {
              ofsArray.splice(ind1,1);
            }
            if(ind2 !== -1) {
              insArray.splice(ind2,1);
              insArray.splice(ind2, 0, payload.listing);
            }
            if(payload.listing.product_size.inventory <= 5){
              if(ind3 === -1){
                losArray.splice(ind3, 0, payload.listing);
              } else{
                losArray.splice(ind3,1);
                losArray.splice(ind3, 0, payload.listing);
              }
            }
          } else {
            if(ind1 === -1){
              if(ofsArray.length === 0){
                ofsArray.push(payload.listing);
              } else {
                ofsArray.splice(ofsArray.length-1, 0, payload.listing);
              }
            }
            if(ind2 !== -1){
              insArray.splice(ind2,1);
              insArray.splice(ind2, 0, payload.listing);
            }
            if(ind3 !== -1 && payload.listing.product_size.inventory <= 5){
              losArray.splice(ind3,1);
            }
          }
          return {
              ...state,
              outOfStock: ofsArray,
              inStock: insArray,
              lowOnStock: losArray
          };
        };
        

        // case UPDATE_OUTOFSTOCK_INFO:
        //   {
        //     oldInfoArray = payload.oldInfoArray;
        //     let ind = oldInfoArray.findIndex(obj => obj.listing_id === payload.newInfo.listing_id);
        //     if(payload.action ==="ADD"){
        //       if(ind === -1){
        //   return {
        //       ...state,
        //       outOfStock: [...oldInfoArray,payload.newInfo],
        //   };
        // } else{
        //   return state;
        // }
        // } else if(payload.action ==="REMOVE"){
        //   if(ind === -1){
        //     return state;
        //   } else{
        //     oldInfoArray = payload.oldInfoArray;
        //     oldInfoArray.splice(ind,1);
        //   }
        //   return {
        //     ...state,
        //     outOfStock: oldInfoArray,
        // };
        // }
        // };

        case UPDATE_INACTIVE_INFO:
          {
            let ofsArray = [...state.outOfStock];
            let insArray = [...state.inStock];
            let losArray = [...state.lowOnStock];
            let inactArray = [...state.inActive];

            let ind1 = ofsArray.findIndex(obj => obj.listing_id === payload.listing.listing_id && obj.sku_id === payload.listing.sku_id && obj.style_code === payload.listing.style_code);
            let ind2 = insArray.findIndex(obj => obj.listing_id === payload.listing.listing_id && obj.sku_id === payload.listing.sku_id && obj.style_code === payload.listing.style_code);
            let ind3 = losArray.findIndex(obj => obj.listing_id === payload.listing.listing_id && obj.sku_id === payload.listing.sku_id && obj.style_code === payload.listing.style_code);
            let ind4 = inactArray.findIndex(obj => obj.listing_id === payload.listing.listing_id && obj.sku_id === payload.listing.sku_id && obj.style_code === payload.listing.style_code);
            if(ind4 === -1){
              if(inactArray.length === 0){
                inactArray.push(payload.listing);
              } else {
                inactArray.splice(inactArray.length-1, 0, payload.listing);
              }
              if(ind1 !== -1) {
              ofsArray.splice(ind1,1);
            }
            if(ind2 !== -1) {
              insArray.splice(ind2,1);
            }
            if(ind3 !== -1){
                losArray.splice(ind3,1);
            }
          } else {
            inactArray.splice(ind4,1);
            if(parseInt(payload.listing.product_size.inventory) !== 0){
              if(ind1 !== -1) {
              ofsArray.splice(ind1,1);
            }
            if(insArray.length === 0){
              insArray.push(payload.listing);
            } else {
              insArray.splice(insArray.length-1, 0, payload.listing);
            }
            if(payload.listing.product_size.inventory <= 5){
              if(ind3 === -1){
                losArray.splice(ind3, 0, payload.listing);
              } else{
                losArray.splice(ind3,1);
                losArray.splice(ind3, 0, payload.listing);
              }
            }
          } else {
            if(ind1 === -1){
              if(ofsArray.length === 0){
                ofsArray.push(payload.listing);
              } else {
                ofsArray.splice(ofsArray.length-1, 0, payload.listing);
              }
            }
            if(ind2 !== -1){
              insArray.splice(ind2,1);
              insArray.splice(ind2, 0, payload.listing);
            }
            if(ind3 !== -1 && payload.listing.product_size.inventory <= 5){
              losArray.splice(ind3,1);
            }
          }
          }
          return {
              ...state,
              outOfStock: ofsArray,
              inStock: insArray,
              lowOnStock: losArray,
              inActive: inactArray
          };
        };

        case UPDATE_DRAFT_INFO:
          {
            oldInfoArray = payload.oldInfoArray;
            let ind = oldInfoArray.findIndex(obj => obj.listing_id === payload.newInfo.listing_id);
            if(payload.action ==="ADD"){
              if(ind === -1){
          return {
              ...state,
              draft: [...oldInfoArray,payload.newInfo],
          };
        } else{
          return state;
        }
        } else if(payload.action ==="REMOVE"){
          if(ind === -1){
            return state;
          } else{
            oldInfoArray = payload.oldInfoArray;
            oldInfoArray.splice(ind,1);
          }
          return {
            ...state,
            draft: oldInfoArray,
        };
        }
        };

        case UPDATE_REQUEST_INFO:
          {
            oldInfoArray = payload.oldInfoArray;
            let ind = oldInfoArray.findIndex(obj => obj.listing_id === payload.newInfo.listing_id && obj.listing_status === payload.newInfo.listing_status);
            if(payload.action ==="ADD"){
              if(ind === -1){
          return {
              ...state,
              request: [...oldInfoArray,payload.newInfo],
          };
        } else{
          return state;
        }
        } else if(payload.action ==="REMOVE"){
          if(ind === -1){
            return state;
          } else{
            oldInfoArray = payload.oldInfoArray;
            oldInfoArray.splice(ind,1);
          }
          return {
            ...state,
            request: oldInfoArray,
        };
        }
        };



      default:
        return state;
    }
  };