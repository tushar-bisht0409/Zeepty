import { API_URI } from "./auth_action";

export const getSellerInfo = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/getsellerinfo?seller_id=${encodeURIComponent(obj.seller_id)}`, {
            method: 'GET'});

        const json = await response.json();
        if(json.success === true){
          localStorage.setItem('sellerInfo',JSON.stringify(json.msz));
  }
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "userID": ""}
      }
};


export const editSellerInfo = async(obj)=> {
  try {
    const response = await fetch(`${API_URI}/editsellerinfo`, {
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


export const saveSellerInfo = async(obj) =>{
  try {
    const response = await fetch(`${API_URI}/savesellerinfo`, {
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

export const saveStoreInfo = async(obj) =>{
  try {
    const response = await fetch(`${API_URI}/savestoreinfo`, {
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

export const getStoreInformation = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/getstoreinformation?seller_id=${encodeURIComponent(obj.seller_id)}`, {
          method: 'GET'});

      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false, "userID": ""}
    }
};

export const handleFollowers = async(obj)=> {
  try {
    const response = await fetch(`${API_URI}/handlefollowers`, {
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