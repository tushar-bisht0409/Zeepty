import { API_URI } from "./type";

function saveTheID (uMode, uID) {
  if(uMode === "Manufacturer") {
    localStorage.setItem('manufacturer_id',uID);
  } else if(uMode === "Influencer") {
    localStorage.setItem('influencer_id',uID);
  } else {
    localStorage.setItem('customer_id',uID);
  }
}

export const isValidUser = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/isvaliduser?_id=${encodeURIComponent(obj._id)}&mode=${encodeURIComponent(obj.mode)}`, {
          method: 'GET'});
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
};

export const sendOTP = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/sendotp?phone=${encodeURIComponent(obj.phone)}&mode=${encodeURIComponent(obj.mode)}`, {
            method: 'GET'});
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false}
      }
};  

export const verifyOTP = async (obj) => {
  console.log("OJJ: ",obj)
    try {
        const response = await fetch(`${API_URI}/verifyotp?phone=${encodeURIComponent(obj.phone)}&otp=${encodeURIComponent(obj.otp)}`, {
            method: 'GET'});

        const json = await response.json();
        console.log("uii: ",json);
        if(json.success){
          saveTheID(obj.mode, json.userID);
            // localStorage.setItem('userID',JSON.stringify(json.userID));
            localStorage.setItem('userMode',obj.mode);
        }
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false}
      }
};  

export const verifyPassword = async (obj) => {
  console.log("LOBJ: ",obj )
    try {
        const response = await fetch(`${API_URI}/verifypassword?phone=${encodeURIComponent(obj.phone)}&email=${encodeURIComponent(obj.email)}&mode=${encodeURIComponent(obj.mode)}&password=${encodeURIComponent(obj.password)}`, {
            method: 'GET'});

        const json = await response.json();
        console.log("JSOSNS: ",json )

        if(json.success){
          saveTheID(obj.mode, json.userID);
          // localStorage.setItem('userID',JSON.stringify(json.userID));
          localStorage.setItem('userMode',obj.mode);
            }
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false}
      }
};  


export const authenticationOTP = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/authenticationotp`, {
          method: 'POST', headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj)});

          console.log(response)

      const json = await response.json();
      console.log("json : ",json);
      if(json.success){
        saveTheID(obj.mode, json.userID);
        // localStorage.setItem('userID',JSON.stringify(json.userID));
        localStorage.setItem('userMode',obj.mode);
        localStorage.setItem('user_phone',obj.phone);
          }
      return json;
  } catch (error) {
    console.log("error: ",error);
    return {"msz": "Something went wrong", "success": false}
  }
}

export const addNew = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/adduser`, {
            method: 'POST', headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)});

            console.log(response)

        const json = await response.json();
        console.log("json : ",json);
        if(json.success){
          saveTheID(obj.mode, json.userID);
          // localStorage.setItem('userID',JSON.stringify(json.userID));
          localStorage.setItem('userMode',obj.mode);
            }
        return json;
    } catch (error) {
      console.log("error: ",error);
      return {"msz": "Something went wrong", "success": false}
    }
  }

  export const changePassword = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/changepassword`, {
            method: 'POST', headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)});
        const json = await response.json();
        return json;
    } catch (error) {
      return {"msz": "Something went wrong", "success": false}
    }
  }

  export const validateManufacturerLocalData = async () => {
    const m_id = localStorage.getItem('manufacturer_id');
    if(m_id === "" || m_id === null || m_id === undefined){
        window.open('/supplier/auth','_self')
    } else {
      const gstin_verified = localStorage.getItem('gstin_verified');
      if(gstin_verified === 'true') {
        //User Valid and GST Verified So should remain in same screen
      } else {
        window.open('/supplier/fillinfo','_self');
      }
    }
  }
