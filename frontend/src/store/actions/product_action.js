import {GET_PRODUCT_INFO} from "./type"
import { API_URI } from "./auth_action";

export const searchProductTemp = (keyword) => async (dispatch) => {
  try {
      const response = await fetch(`${API_URI}/searchproduct?keyword=${encodeURIComponent(keyword)}`, {
          method: 'GET'});
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
};  

export const getproduct_info = async function (obj) {
    try {
        const response = await fetch(`${API_URI}/getproduct?type=${encodeURIComponent(obj.type)}&manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}&seller_id=${encodeURIComponent(obj.seller_id)}&product_id=${encodeURIComponent(obj.product_id)}&sku_id=${encodeURIComponent(obj.sku_id)}&style_code=${encodeURIComponent(obj.style_code)}`, {
            method: 'GET'});
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
      }
};  


export const getProductRatingInfo = async function (obj) {
  try {
      const response = await fetch(`${API_URI}/getproductratinginfo?product_id=${encodeURIComponent(obj.product_id)}`, {
          method: 'GET'});
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
    }
};  

export const getReviews = async function (obj) {
  try {
    const response = await fetch(`${API_URI}/getreview?type=${encodeURIComponent(obj.type)}&manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}&seller_id=${encodeURIComponent(obj.seller_id)}&product_id=${encodeURIComponent(obj.product_id)}&sku_id=${encodeURIComponent(obj.sku_id)}&style_code=${encodeURIComponent(obj.style_code)}`, {
        method: 'GET'});
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
  }
};  