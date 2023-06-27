import { API_URI } from "./type";

export const getManufacturerInfo = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/getmanufacturerinfo?manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}`, {
            method: 'GET'});

        const json = await response.json();
        console.log("ss")

        if(json.success === true){
  }
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "userID": ""}
      }
};

export const saveManufacturerInfo = async(obj)=> {
  try {
    const response = await fetch(`${API_URI}/savemanufacturerinfo`, {
      method: 'POST', headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)});
      const json = await response.json();
      return json;
  } catch (error) {
    console.log(error);
    return {"msz": "Something went wrong", "success": false}
  }
}

export const editManufacturerInfo = async(obj)=> {
  try {
    const response = await fetch(`${API_URI}/editmanufacturerinfo`, {
      method: 'POST', headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)});
      const json = await response.json();
      return json;
  } catch (error) {
    console.log(error);
    return {"msz": "Something went wrong", "success": false}
  }
}

export const validateAndGetManufacturer = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/validateandgetmanufacturer?manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}`, {
          method: 'GET'});

      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false, "userID": ""}
    }
};

export const checkIsStoreNameUnique = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/checkisstorenameunique?store_name=${encodeURIComponent(obj.store_name)}`, {
          method: 'GET'});

      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false, "userID": ""}
    }
};

export const getManufacturerSummary = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/getmanufacturersummary?manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}`, {
          method: 'GET'});

      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false, "userID": ""}
    }
};