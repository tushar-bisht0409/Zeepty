import { API_URI } from "./auth_action";

export const save_looks = async (obj) => {      
    try { 
      const response = await fetch(`${API_URI}/savelooks`, { 
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

export const get_looks = async (obj) => {
    
    try {
        const response = await fetch(`${API_URI}/getlooks?type=${encodeURIComponent(obj.type)}&looks_id=${encodeURIComponent(obj.looks_id)}&seller_id=${encodeURIComponent(obj.seller_id)}`, {
            method: 'GET'});
  
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
      }
  };

  export const save_looks_draft = async (obj) => {      
    try { 
      const response = await fetch(`${API_URI}/savelooksdraft`, { 
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

export const get_looks_draft = async (obj) => {
    
    try {
        const response = await fetch(`${API_URI}/getlooksdraft?type=${encodeURIComponent(obj.type)}&looks_id=${encodeURIComponent(obj.looks_id)}&seller_id=${encodeURIComponent(obj.seller_id)}`, {
            method: 'GET'});
  
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
      }
  };
  
  export const edit_looks_draft = async (obj) => {      
    try { 
      const response = await fetch(`${API_URI}/editlooksdraft`, { 
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
    
    export const delete_looks_draft = async (obj) => {      
      try { 
        const response = await fetch(`${API_URI}/deletelooksdraft`, { 
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