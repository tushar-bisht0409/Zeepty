import { API_URI } from "./auth_action";

export const getOrders = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/getorder?type=${encodeURIComponent(obj.type)}&customer_id=${encodeURIComponent(obj.customer_id)}&manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}&seller_id=${encodeURIComponent(obj.seller_id)}&product_id=${encodeURIComponent(obj.product_id)}&listing_id=${encodeURIComponent(obj.listing_id)}&order_id=${encodeURIComponent(obj.order_id)}`, {
            method: 'GET'});
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
      }
  };


export const cancelShipmentDelhivery = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/cancelshipmentdelhivery`, {
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
      return { "msz": "Something went wrong", "success": false, "userID": "" }
  }
};