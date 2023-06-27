import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT, UPDATE_QUANTITY} from "../actions/type";
const initialState = {cartProduct : []};
export default (state = initialState,{payload,type})=>{

    switch (type) {
        case ADD_CART_PRODUCT:
          const cartProduct= state.cartProduct;
          let isPresent = false;
          for(let i =0; i<cartProduct.length;i++){
            if(cartProduct[i].product_id === payload.product_id && cartProduct[i].sku_id === payload.sku_id && cartProduct[i].style_code === payload.style_code){
              isPresent = true;
              break;
            }
          }
          if(isPresent){
            return state;
          } else{
          return {
              ...state,
              cartProduct: [...cartProduct,  payload]
          };
        }

        case REMOVE_CART_PRODUCT:
          const cartProduct2 = state.cartProduct;
          for(let i = 0; i<cartProduct2.length;i++){
            if(cartProduct2[i].product_id === payload.product_id  && cartProduct2[i].sku_id === payload.sku_id && cartProduct2[i].style_code === payload.style_code){
              cartProduct2.splice(i,1);
            }
          }
          return {
              ...state,
              cartProduct: [...cartProduct2]
          };

          case UPDATE_QUANTITY: 
            const cartProduct3 = state.cartProduct; 
            for(let i = 0; i<cartProduct3.length;i++){ 
              if(cartProduct3[i].product_id === payload.product_id && cartProduct3[i].sku_id === payload.sku_id && cartProduct3[i].style_code === payload.style_code){ 
                cartProduct3[i] = payload; 
              } 
            } 
            return { 
                ...state, 
                cartProduct: [...cartProduct3] 
            };
        default:
          return state;
      }
}