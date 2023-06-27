import "./variantSize.css";
import React,{useEffect,useState} from "react";


const VariantAny = ({isPrimary,isPresentInCart,selectedSKUID, setSelectedSKUID, products,kkey,variant,setVariant, setSelectedProduct}) => {

    const [isSelected, setIsSelected] = useState(false)

    const routeToProductDesc = ()=>{
        window.open(`/product/${products.product_id}/${products.style_code}`,"_self");
      }


    function handelSelect() {
        if(isSelected){
            if(isPrimary){
                routeToProductDesc();
                } else{
            setSelectedSKUID(undefined);
            setIsSelected(false);
            isPresentInCart(products,products.sku_id,products.style_code);
                }
        } else{
            if(isPrimary){
                routeToProductDesc();
                } else{
            setIsSelected(true);
            setSelectedProduct(products);
            setSelectedSKUID(products.sku_id);
            isPresentInCart(products,products.sku_id,products.style_code);
                }
        }
    }

    function checkIsSelected (skuid){
        if(skuid === products.sku_id) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
        console.log(products.product_size[`size`]," a::a ",isSelected)
    }

    useEffect(()=>{
        checkIsSelected(selectedSKUID)
    },[]);

    function getSize() {
        return products.product_size[`size`].split("_").map((word) => {
            if(products.product_size[`size`].includes("_")){
                return word.charAt(0).toUpperCase() + word.slice(1)
            } else{
                return products.product_size[`size`].toUpperCase()
            }
        }).join(" ")
    }

  return (
    products === undefined? <div></div> : 
    <div className="mobileoutterBox">
    <div onClick={handelSelect} className={isSelected ? "mobilevariantAnyActive" : "mobilevariantAny"}>
        <p>{getSize()}</p>
        </div>
    </div>
  );
};

export default VariantAny;