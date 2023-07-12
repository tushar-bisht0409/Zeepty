import { API_URI } from "./type"; 

export const getproduct_info = async function (obj) {
  try {
      const response = await fetch(`${API_URI}/getproduct?type=${encodeURIComponent(obj.type)}&manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}&seller_id=${encodeURIComponent(obj.seller_id)}&product_id=${encodeURIComponent(obj.product_id)}&listing_id=${encodeURIComponent(obj.listing_id)}&sku_id=${encodeURIComponent(obj.sku_id)}&style_code=${encodeURIComponent(obj.style_code)}`, {
          method: 'GET'});
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
    }
};  

export const saveListing = (obj) => async (dispatch) => {    
  try { 
    const response = await fetch(`${API_URI}/savelisting`, { 
      method: 'POST', 
      headers: { 
        Accept: 'application/json', 
              'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify(
             obj
             ) 
          }); 
          const json = await response.json(); 
          if(json.success === true){  
           console.log('Product Saved'); 
      } 
      return json; 
    } catch (error) { 
      return {"msz": "Something went wrong", "success": false, "userID": ""} 
    } 
  };

export const getlisting = async (obj) => {
   try {
        const response = await fetch(`${API_URI}/getlisting?type=${encodeURIComponent(obj.type)}&listing_id=${encodeURIComponent(obj.listing_id)}&seller_id=${encodeURIComponent(obj.seller_id)}&manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}`, {
            method: 'GET'});
        const json = await response.json();
        if(json.success === true){
  }
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
      }

};
 // get listing

 export const getProductRequest = async (obj) => {

  try {
    const response = await fetch(`${API_URI}/getproductrequest?type=${encodeURIComponent(obj.type)}&sku_id=${encodeURIComponent(obj.sku_id)}&seller_id=${encodeURIComponent(obj.seller_id)}&product_id=${encodeURIComponent(obj.product_id)}&product_request_id=${encodeURIComponent(obj.product_request_id)}`, {
        method: 'GET'});
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
  }
}


export const saveProduct = async (obj) => { 
   
  try { 
    const response = await fetch(`${API_URI}/saveproduct`, { 
      method: 'POST', 
      headers: { 
        Accept: 'application/json', 
              'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify(
             obj
             ) 
          }); 
          const json = await response.json(); 
          if(json.success === true){  
           console.log('Product Saved'); 
      } 
      return json; 
    } catch (error) { 
      return {"msz": "Something went wrong", "success": false, "userID": ""} 
    } 
  };


  export const postMultipleProductInMongoAndElastic = async (obj) => {      
    try { 
      const response = await fetch(`${API_URI}/postmultipleproductmdes`, { 
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
        return {"msz": "Something went wrong", "success": false, "userID": ""} 
      } 
    };

    export const editProductES = async (obj) => {      
      try { 
        const response = await fetch(`${API_URI}/editproductes`, { 
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
          return {"msz": "Something went wrong", "success": false, "userID": ""} 
        } 
      };

      export const postmultipleproductrequest = async (obj) => {    
        try { 
          const response = await fetch(`${API_URI}/postmultipleproductrequest`, { 
            method: 'POST', 
            headers: { 
              Accept: 'application/json', 
                    'Content-Type': 'application/json' 
                  }, 
                  body: JSON.stringify(
                   obj
                   ) 
                }); 
                const json = await response.json(); 
                if(json.success === true){  
                 console.log('Product Saved'); 
            } 
            return json; 
          } catch (error) { 
            return {"msz": "Something went wrong", "success": false, "userID": ""} 
          } 
        };

        export const checkSellerProductAdded = async (obj) => {
          try {
               const response = await fetch(`${API_URI}/checksellerproductadded?listing_id=${encodeURIComponent(obj.listing_id)}&seller_id=${encodeURIComponent(obj.seller_id)}`, {
                   method: 'GET'});
               const json = await response.json();
               if(json.success === true){
         }
               return json;
             } catch (error) {
               console.log(error);
               return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
             }
       
       };