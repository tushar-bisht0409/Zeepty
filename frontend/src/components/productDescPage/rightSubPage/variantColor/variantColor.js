import "./variantColor.css";
import React,{useEffect,useState} from "react";
import { getListing } from "../../../../store/actions/listing_action";


const VariantColor = ({isPresentInCart,isPrimary, products,kkey,variant,setVariant,setSelectedSKUID,productID,setSelectedProduct}) => {

    const [isSelected, setIsSelected] = useState(false)

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
    //         setImgUrl(json.msz[0].imageUrls[0]);
    //     }
    // }

    const routeToProductDesc = ()=>{
        window.open(`/1/${products.productID}/${products.SKUID}`,"_self");
      }

    function handelSelect() {
        if(isSelected){
            if(isPrimary){

            } else{
                delete variant[`${kkey}`];
                setVariant(variant);
                setIsSelected(false);
                isPresentInCart(products,products.SKUID);
            }
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
        }
    }

    useEffect(()=> {
        if(variant[`${kkey}`] === products[`${kkey}`]){
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    },[variant]); 

    console.log("VVVL: ", variant);


  return (
    <div className="bigBoxV">
        <img onClick={handelSelect} className={isSelected ? "pImageActive" : "pImage"} src={products.imageUrls[0]}/>
        <p className="vName">{products.color}</p>
    </div>
  );
};

export default VariantColor;