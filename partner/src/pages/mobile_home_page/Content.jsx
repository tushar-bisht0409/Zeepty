import React ,{useEffect,useState}from "react";
import {useSelector, useDispatch} from "react-redux"
import Header from './Header'
import { getorderinfo,getproduct_info } from "../../store/action/productaction";
import Insights from './Insights'
import ToDo from './ToDo'

export default function Content() {

  const dispatch = useDispatch();
  const [orderinfo,setorderinfo] = useState([]);
  const [productinfo,setproductinfo] = useState([]);
  const [loading,setLoading] = useState(false);

  let pendingorder = 0,outofstock=0,lowstock=0;
  let index;
  useEffect(()=>{
    const getproduct = async()=>{
      const json1 = await getorderinfo(`m1`,"","","","manufacturerID");

      const obj = {
        manufacturerID: 'm1',
        sellerID: 's1',
        productID: 'p1',
        type: 'manufacturerID'
      }
      const json2 = await getproduct_info(obj);
     
      if(json1.success == true && json2.success == true){
        setLoading(true);
        setorderinfo(json1.msz)
        setproductinfo(json2.msz)
      }
    }
    getproduct();
  },[])
  // console.log("pinfo",productinfo)

  if(loading){
  

    for (index = 0; index < orderinfo.length; index++)
    {
        if(orderinfo[index].orderStatus == "Pending"){
          pendingorder++;
        }
      }
      for(index = 0 ;index<productinfo.length;index++){
        if(productinfo[index].stockCount == 0){
          outofstock++;
        }
        if(productinfo[index].stockCount <= 50){
          lowstock++;
        }
    }
  }

  return (
    <>
        <Header />
        {loading ?(<ToDo pendingorder={pendingorder} outofstock={outofstock} lowstock={lowstock} />) :(<div>Loading</div>)}
        <Insights />
    </>
  )
}
