import "./variantAny.css";
import React,{useEffect,useState} from "react";
import { getListing } from "../../../../store/actions/listing_action";


const VariantAny = ({isPrimary,isPresentInCart,selectedSKUID, setSelectedSKUID, products,kkey,variant,setVariant, getListInfo, setSelectedProduct}) => {

    const [isSelected, setIsSelected] = useState(false)


    // const [products,setListing] = useState(undefined)

    // const getProdInfo  = async()=>{
    //     const obj = {
    //         type: "listingSKU",
    //         manufacturerID: "",
    //         listingID: listingID,
    //         SKUID: SKUID
    //       };
    //     const json = await getListing(obj);
    //     console.log("OOOL: ",json)
    //     if(json.success){
    //         setListing(json.msz[0]);
    //     }
    // }

    const routeToProductDesc = ()=>{
        window.open(`/1/${products.productID}/${products.SKUID}`,"_self");
      }


    function handelSelect() {
        if(isSelected){
            if(isPrimary){
                routeToProductDesc();
                } else{
            delete variant[`${kkey}`];
            setVariant(variant);
            setIsSelected(false);
            isPresentInCart(products,products.SKUID);
                }
            // getListInfo(products.listingID,products.SKUID);
        } else{
            if(isPrimary){
                routeToProductDesc();
                } else{
            variant[`${kkey}`] = products[`${kkey}`];
            setVariant(variant);
            setIsSelected(true);
            setSelectedProduct(products);
            setSelectedSKUID(products.SKUID);
            isPresentInCart(products,products.SKUID);
                }
            // getListInfo(products.listingID,products.SKUID);
        }
    }

    useEffect(()=>{
        if(variant[`${kkey}`] === products[`${kkey}`]){
            setIsSelected(true);
        }else{
            setIsSelected(false);
        }
    },[variant]); 


  return (
    products === undefined? <div></div> : 
    <div className="outterBox">
    <div onClick={handelSelect} className={isSelected ? "variantAnyActive" : "variantAny"}>
        <p>{products[`${kkey}`]}</p>
        </div>
    </div>
  );
};

export default VariantAny;