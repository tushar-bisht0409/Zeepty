export const checkAndHandleLocalUserInfo = async () => {
  try {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if(userInfo === undefined || userInfo === null){
      let newInfo = {
        cart: [],
        wishlist: []
      }
      localStorage.setItem('userInfo',JSON.stringify(newInfo));
      return {success: true, userInfo: newInfo }
    } else{
      return {success: true, userInfo: userInfo }
    }
  } catch (error) {
    console.log(error);
    return {success: false, err: error}
  }
};

export const updateLocalUserInfo = async (obj) => {
    try {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));

      if(obj.type === "add"){
        if(obj.subType === "wishlist"){
          userInfo['wishlist'].push(obj.productObject);
        } else if(obj.subType === "cart"){
          userInfo['cart'].push(obj.productObject);
        }
      } else if(obj.type === "remove"){
        if(obj.subType === "wishlist"){
          let ind = userInfo['wishlist'].findIndex(item => item.wishlist_id === obj.productObject.wishlist_id);
          if(ind != -1) {
            userInfo['wishlist'].splice(ind,1);
          }
        } else if(obj.subType === "cart"){
          let ind = userInfo['cart'].findIndex(item => item.product_id === obj.productObject.product_id && item.style_code === obj.productObject.style_code && item.sku_id === obj.productObject.sku_id);
          if(ind != -1) {
            userInfo['cart'].splice(ind,1);
          }
        }
      }
      localStorage.setItem('userInfo',JSON.stringify(userInfo));
      return {success: true, userInfo: userInfo };
    } catch (error) {
      console.log(error);
      return {success: false, err: error}
    }
};