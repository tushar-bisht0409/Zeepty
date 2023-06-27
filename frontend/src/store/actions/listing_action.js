import { API_URI } from "./auth_action";  

export const getListing = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/getlisting?type=${encodeURIComponent(obj.type)}&manufacturerID=${encodeURIComponent(obj.manufacturerID)}&listingID=${encodeURIComponent(obj.listingID)}&SKUID=${encodeURIComponent(obj.SKUID)}`, {
            method: 'GET'});

        const json = await response.json();
        console.log(json)
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
      }
};  