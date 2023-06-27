import { API_URI, SAVE_LISTING_INFO } from "./type";

export const getlisting_info = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/getlisting?type=${encodeURIComponent(obj.type)}&sku_id=${encodeURIComponent(obj.sku_id)}&style_code=${encodeURIComponent(obj.style_code)}&listing_id=${encodeURIComponent(obj.listing_id)}&manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}`, {
            method: 'GET'});

        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
      }
};

export const getListingRequest = async (obj) => {

  try {
    const response = await fetch(`${API_URI}/getlistingrequest?type=${encodeURIComponent(obj.type)}&sku_id=${encodeURIComponent(obj.sku_id)}&manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}&listing_id=${encodeURIComponent(obj.listing_id)}&listing_request_id=${encodeURIComponent(obj.listing_request_id)}`, {
        method: 'GET'});
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
  }
}

export const saveListingInRedux = (listing,mId) => async (dispatch) => {

  dispatch({
    type:SAVE_LISTING_INFO,
    payload:{
        inStock : listing.filter(checkinStock),
        outOfStock : listing.filter(checkoutOfStock),
        lowOnStock: listing.filter(checkLowOnStock),
        inActive : listing.filter(checkinActive),
        blacklisted: listing.filter(checkIsBlacklisted),
        draft : [],
        approved : [],
        rejected : [],
        pending : [],
    }
});
}

export const saveRequestInRedux = (obj) => async (dispatch) => {
  
  const json = await getListingRequest(obj);
  let newObj = {
    draft : [],
    approved :[],
    rejected : [],
    pending : [],
  };

  let inArray = []
  if(json.success){
    for(let i=0;i<json.msz.length;i++){  

      if(json.msz[i].listing_status === 'Draft'){
        if(inArray.includes(json.msz[i].listing_id) === false){
          let nInfo = {...{local_count: 1},...json.msz[i]};
          inArray.push(json.msz[i].listing_id);
          newObj.draft.push(nInfo);
        } else{
          let ind = newObj.draft.findIndex((itm)=>(itm.listing_id === json.msz[i].listing_id));
          if(ind != -1 ){
            newObj.draft[ind]['local_count']++;
          }   
        }
      }
       else if(json.msz[i].listing_status === 'Approved'){
        if(inArray.includes(json.msz[i].listing_id) === false){
          let nInfo = {...{local_count: 1},...json.msz[i]};
          inArray.push(json.msz[i].listing_id);
          newObj.approved.push(nInfo);
        } else{
          let ind = newObj.approved.findIndex((itm)=>(itm.listing_id === json.msz[i].listing_id));
          if(ind != -1 ){
            newObj.approved[ind]['local_count']++;
          }   
        }
      } else if(json.msz[i].listing_status === 'Rejected'){
        if(inArray.includes(json.msz[i].listing_id) === false){
          let nInfo = {...{local_count: 1},...json.msz[i]};
          inArray.push(json.msz[i].listing_id);
          newObj.rejected.push(nInfo);
        } else{
          let ind = newObj.rejected.findIndex((itm)=>(itm.listing_id === json.msz[i].listing_id));
          if(ind != -1 ){
            newObj.rejected[ind]['local_count']++;
          }   
        }
      }else if(json.msz[i].listing_status === 'Pending' || json.msz[i].listing_status === 'OnHold'){
          if(inArray.includes(json.msz[i].listing_id) === false){
            let nInfo = {...{local_count: 1},...json.msz[i]};
            inArray.push(json.msz[i].listing_id);
            newObj.pending.push(nInfo);
          } else{
            let ind = newObj.pending.findIndex((itm)=>(itm.listing_id === json.msz[i].listing_id));
            if(ind != -1 ){
              newObj.pending[ind]['local_count']++;
            }   
          }
        }
    }
  dispatch({
    type:SAVE_LISTING_INFO,
    payload:{
      inStock : [],
        outOfStock : [],
        lowOnStock: [],
        inActive : [],
        blacklisted: [],
        draft : newObj.draft,
        approved : newObj.approved,
        rejected : newObj.rejected,
        pending : newObj.pending,
    }
});
  }

  return json;
}



function checkinStock(data) {
  if(data.active ===true && data.blacklisted === false){
    return true;
  }
  return false;
 }

 function checkoutOfStock(data) {
  if(data.active ===true && data.blacklisted === false && parseInt(data.product_size.inventory) <= 0){
    return true;
  }
  return false;
 }

 function checkLowOnStock(data) {
  if(data.active ===true && data.blacklisted === false && parseInt(data.product_size.inventory) <= 5 && parseInt(data.product_size.inventory) > 0){
    return true;
  }
  return false;
 }

 function checkIsBlacklisted(data) {
  if(data.blacklisted ===true){
    return true;
  }
  return false;
 }

 function checkinActive(data) {
  if(data.active === false && data.blacklisted === false ){
    return true;
  }
  return false;
 }

//  function checkrequest(data) {
//   if(data.listing_status === 'Draft'){
//     return false;
//   }
//   return true;
//  }

//  function checkdraft(data) {
//   if(data.listing_status === 'Draft'){
//     return true;
//   }
//   return false;
//  }

 export const editListing = async (obj) => {      
  try { 
    const response = await fetch(`${API_URI}/editlisting`, { 
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

  export const editListingES = async (obj) => {      
    try { 
      const response = await fetch(`${API_URI}/editlistinges`, { 
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

  export const saveListingRequest = async (obj) => {      
    try { 
      const response = await fetch(`${API_URI}/savelistingrequest`, { 
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
        return {"msz": "Something went wrong", "success": false} 
      } 
    };

    export const editListingRequest = async (obj) => {      
      try { 
        const response = await fetch(`${API_URI}/editlistingrequest`, { 
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
          return {"msz": "Something went wrong", "success": false} 
        } 
      };

      export const editMultipleListingRequest = async (obj) => {      
        try { 
          const response = await fetch(`${API_URI}/editmultiplelistingrequest`, { 
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
            return {"msz": "Something went wrong", "success": false} 
          } 
        };

        export const deleteListingRequest = async (obj) => {      
          try { 
            const response = await fetch(`${API_URI}/deletelistingrequest`, { 
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
              return {"msz": "Something went wrong", "success": false} 
            } 
          };

          export const deleteMultipleListingRequest = async (obj) => {      
            try { 
              const response = await fetch(`${API_URI}/deletemultiplelistingrequest`, { 
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
                return {"msz": "Something went wrong", "success": false} 
              } 
            };


            export const getListingVariantInformation = async (obj) => {

              try {
                const response = await fetch(`${API_URI}/getlistingcolorandsizeinformation?listing_id=${encodeURIComponent(obj.listing_id)}`, {
                    method: 'GET'});
                const json = await response.json();
                return json;
              } catch (error) {
                console.log(error);
                return {"msz": "Something went wrong", "success": false, "error": error}
              }
            }