import "./variantColor.css";
import React,{useEffect,useState} from "react";


const VariantColor = ({isPresentInCart,isPrimary, products,kkey,variant,setVariant,setSelectedSKUID,product_id,setSelectedProduct}) => {

    const [isSelected, setIsSelected] = useState(false)

    const routeToProductDesc = ()=>{
        window.open(`/product/${products.product_id}/${products.style_code}`,"_self");
      }

    function handelSelect() {
        routeToProductDesc();

        // if(isSelected){
        //     if(isPrimary){

        //     } else{
        //         delete variant[`color`];
        //         setVariant(variant);
        //         setIsSelected(false);
        //         isPresentInCart(products,products.sku_id,products.style_code);
        //     }
        // } else{
        //     if(isPrimary){
        //         routeToProductDesc();
        //     } else{
        //         let ind = products.product_details.findIndex((obj)=>Object.keys(obj)[0] === "color");
        //         variant[`color`] = products.product_details[ind][`color`];
        //         setVariant(variant);
        //         setIsSelected(true);
        //         setSelectedProduct(products);
        //         setSelectedSKUID(products.sku_id);
        //         isPresentInCart(products,products.sku_id,products.style_code);
        //         }
        // }
    }

    useEffect(()=> {
        let ind = products.product_details.findIndex((obj)=>Object.keys(obj)[0] === "color");
        if(variant[`${kkey}`] === products.product_details[ind]['color']){
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    },[variant]); 

    function getColor() {
        let ind = products.product_details.findIndex((obj)=>Object.keys(obj)[0] === "color");
        if(ind === -1){
            return ""; 
        } else {
            return products.product_details[ind]['color'];
        }
    }
    
  return (
    <div className="mobilebigBoxV">
        <img onClick={handelSelect} className={isSelected ? "mobilepImageActive" : "mobilepImage"} src={products.media_urls[0]}/>
        <p className="mobilevName">{getColor()}</p>
    </div>
  );
};

export default VariantColor;