import { API_URI } from "./auth_action";  

export const searchProduct = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/essearchproduct`, {
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

export const searchSellerProduct = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/essearchsellerproduct`, {
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

export const getAllSellerProduct = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/esgetallsellerproduct`, {
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

export const searchListing = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/essearchlisting`, {
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

export const searchListingByVertical = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/searchlistingbyvertical`, {
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

export const searchSeller = async (obj) => {
  try {
      const response = await fetch(`${API_URI}/essearchseller`, {
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