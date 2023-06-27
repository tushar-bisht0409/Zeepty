import React ,{useEffect,useState} from 'react'
import Title_Bar from "./Title_Bar"
import Items from "./Items.jsx"

import { useDispatch,connect, useSelector } from 'react-redux'

const Request = (props) => {

// const [data,setData] = useState([]);
// const [loading,setLoading] = useState(false)


 console.log("data",props.data)

  return (
    <>
        
      <Title_Bar /> 
      {
       
        props.data.map((d)=>
          { return <Items item={d}/>}
        )
      }
      {/* <Items/> */}
      
  

      </>
  )
}

function mapStateToProps(state) {
  const Requestinfo = state.savelistingInRedux;
  // console.log("SDSD",Requestinfo)
  return {data: Requestinfo.request  };
}

export default connect(mapStateToProps)(Request);
