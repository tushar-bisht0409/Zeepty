import { getlisting_info } from '../../../store/action/listingaction';
import './firstOrderBox.css';
import { useEffect,useState } from "react";
import FirstOrderBoxItem from './firstOrderBoxItem/firstOrderBoxItem';

export default function FirstOrderBox({item}) {

    const youtubeWidth = window.innerWidth * 0.20;
    const youtubeHeight = window.innerHeight * 0.25;

    const [orders, setOrders] = useState([]);

      useEffect(()=>{
        if(item.length >= 2){
            orders.push(item[0]);
            orders.push(item[1]);
        } else{
            orders.push(item[0]);
        }
        setOrders([...orders])
      },[])

    return (
        <div className='fob'>
            {/* <div className='fob-head'>
                <i style={{color: 'orange',fontSize: '26px'}} class="fa-solid fa-bookmark"></i>
                <p className='fob-head-text'>Your first order is here!</p>
            </div> */}
            <div className='fob-body'>
                <div className='fob-body-top'>

                <div className='fob-body-top-left-titlebar'>
                        <p className='fob-body-top-left-titlebar-listing'>Order</p>
                        <p className='fob-body-top-left-titlebar-price'>Price & Qty</p>
                        <p className='fob-body-top-left-titlebar-dispatch'>Dispatch By</p>
                    </div>

                    <div className='fob-body-top-left'>
                        {orders.map((ord) => (
                        <FirstOrderBoxItem item={ord}/>
                        ))}
                    </div>

                    {item.length>2 ? <p onClick={()=>{window.open('/supplier/order','_self')}} className='lrb-body-more'>{item.length -2} more Orders</p>: null}

                    <div className='fob-body-top-right'>
                        <div onClick={()=>{window.open('/supplier/order','_self')}} className='fob-body-top-right-go'>Manage Orders</div>
                    </div>
                </div>

                <div className='fob-body-bottom'>
                    <iframe width={youtubeWidth} height={youtubeHeight} src="https://www.youtube.com/embed/obppCkYGqI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className='fob-body-bottom-right'>
                <div className='fob-body-bottom-right-line'>
                    <div className='uflb-body-right-line-circle'>1</div>
                    <p className='fob-body-bottom-right-line-text'>Pack the product</p>
                </div>
                <div className='fob-body-bottom-right-line'>
                <div className='uflb-body-right-line-circle'>2</div>
                    <p className='fob-body-bottom-right-line-text'>Generate the label from order panle, and paste it on the package</p>
                </div>
                <div className='fob-body-bottom-right-line'>
                    <div className='uflb-body-right-line-circle'>3</div>
                    <p className='fob-body-bottom-right-line-text'>Mark it as Ready To Ship (RTS)</p>
                </div>
                <div className='fob-body-bottom-right-line'>
                    <div className='fob-body-right-line-circle'>4</div>
                    <p className='fob-body-bottom-right-line-text'>Delivery Partner will come to pick it up.</p>
                </div>

                {/* <div onClick={()=>{window.open('/supplier/order','_self')}} className='fob-body-bottom-right-view'>View Order Panel</div> */}
            </div>
            </div>
            </div>
        </div>
    )
}