import { API_URI, SAVE_ORDER_INFO, SAVE_RETURN_INFO } from "./type";

function checkpending(data) {
    if (data.order_status === "Pending") {
        return true;
    }
    return false;

}
function checkRTS(data) {
    if (data.order_status === "RTS") {
        return true;
    }
    return false;
}
function checkshipped(data) {
    if (data.order_status === "Shipped") {
        return true;
    }
    return false;

}
function checkcancelled(data) {
    if (data.order_status === "Cancelled") {
        return true;
    }
    return false;
}
function checkdelivered(data) {
    if (data.order_status === "Delivered") {
        return true;
    }
    return false;
}

function checkReturnScheduled(data) {
    if (data.order_status === "Returned") {
        return true;
    }
    return false;
}

function checkReturnInTransit(data) {
    if (data.order_status === "RIT") {
        return true;
    }
    return false;
}

function checkReturnDelivered(data) {
    if (data.order_status === "RD") {
        return true;
    }
    return false;
}

function checkReturnLost(data) {
    if (data.order_status === "Lost") {
        return true;
    }
    return false;
}

export const getMyOrders = (obj,mode) => async (dispatch) => {
    try {
        const response = await fetch(`${API_URI}/getorder?type=${encodeURIComponent(obj.type)}&manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}&seller_id=${encodeURIComponent(obj.seller_id)}&product_id=${encodeURIComponent(obj.product_id)}&listing_id=${encodeURIComponent(obj.listing_id)}`, {
            method: 'GET'
        });
        const json = await response.json();
        if(json.success){
            let wBills = [];
            let oStatus = {};
            for(let i = 0; i<json.msz.length; i++) {
                if(json.msz[i].order_status === "Pending" || json.msz[i].order_status === "RTS" || json.msz[i].order_status === "Shipped" || json.msz[i].order_status === "Shipped"){
                    wBills.push(json.msz[i].waybill);
                    oStatus[`${json.msz[i].waybill}`] = json.msz[i].order_status
                }
            }
            dispatch({
                type:SAVE_ORDER_INFO,
                payload:{
                    mode:mode,
                    pending :[...json.msz].filter(checkpending),
                    RTS :[...json.msz].filter(checkRTS),
                    shipped :[...json.msz].filter(checkshipped),
                    cancelled :[...json.msz].filter(checkcancelled),
                    delivered: [...json.msz].filter(checkdelivered),
                    waybills: wBills,
                    orderStatusObject: oStatus
                }
            })
        }
        return json;
    } catch (error) {
        console.log(error);
        return { "msz": "Something went wrong", "success": false, "manufacturerID": "" }
    }
};

export const getOrders = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/getorder?type=${encodeURIComponent(obj.type)}&manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}&seller_id=${encodeURIComponent(obj.seller_id)}&product_id=${encodeURIComponent(obj.product_id)}&listing_id=${encodeURIComponent(obj.listing_id)}`, {
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


export const generateShippingLabel = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/generateshippinglabeldelhivery`, {
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

export const createShipment = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/createshipmentdelhivery`, {
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

export const createPickupRequest = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/createpickuprequestdelhivery`, {
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

export const changeOrderStatus = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/changeorderstatus`, {
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

export const claimOrderLost = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/claimorderlost`, {
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

export const getMyReturns = (obj,mode) => async (dispatch) => {
    try {
        const response = await fetch(`${API_URI}/getorder?type=${encodeURIComponent(obj.type)}&manufacturer_id=${encodeURIComponent(obj.manufacturer_id)}&seller_id=${encodeURIComponent(obj.seller_id)}&product_id=${encodeURIComponent(obj.product_id)}&listing_id=${encodeURIComponent(obj.listing_id)}`, {
            method: 'GET'
        });
        const json = await response.json();
        if(json.success){
            dispatch({
                type:SAVE_RETURN_INFO,
                payload:{
                    mode:mode,
                    scheduled :[...json.msz].filter(checkReturnScheduled),
                    transit :[...json.msz].filter(checkReturnInTransit),
                    delivered: [...json.msz].filter(checkReturnDelivered),
                    lost :[...json.msz].filter(checkReturnLost)
                }
            })
        }
        return json;
    } catch (error) {
        console.log(error);
        return { "msz": "Something went wrong", "success": false, "manufacturerID": "" }
    }
};

export const trackAndUpdateOrderStatus = async (obj) => {
    try {
        const response = await fetch(`${API_URI}/trackandupdateorderstatus`, {
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
