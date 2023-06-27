import { API_URI } from "./auth_action";
import {SAVE_USERINFO} from "./type"

export const saveCustomerInfo = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/savecustomerinfo`, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
        });
        const json = await response.json();
        return json;
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
};

export const getCustomerInfo = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/getcustomerinfo?customer_id=${encodeURIComponent(obj.customer_id)}`, {
            method: 'GET'});

        const json = await response.json();
        // console.log("ASASAS",json.msz[0]);
        if(json.success === true){
          localStorage.setItem('userInfo',JSON.stringify(json.msz));
  }
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "userID": ""}
      }
};

export const getOtherCustomerInfo = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/getcustomerinfo?customer_id=${encodeURIComponent(obj.customer_id)}`, {
          method: 'GET'});

      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false, "userID": ""}
    }
};

export const addCartAndWishlistData = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/addcartandwishlistdata`, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
        });
        const json = await response.json();
        return json;
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
};