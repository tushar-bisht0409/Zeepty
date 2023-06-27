import { connect  } from 'react-redux'
import { Product } from './Product'

const  OrderCard = ({data})=> {
    //product ID
    console.log("Card",data)

    return (
       <>
            {
                data.sellerProducts.map((p)=>(
                    <Product item={p}/>
                    ))
                }
        </>
       
    )
}



export default (OrderCard)