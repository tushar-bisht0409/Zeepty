import React ,{useEffect,useState}from "react";
import './mexplore_page.css'
import MBottomNavBar from "../../mComponents/mBottomNavBar/mBottomNavBar";
import MExploreHomeSubPage from "../../mComponents/mexplore_page/mexplorehome_subPage/mexplorehome_subPage";
import MExploreSearchSubPage from "../../mComponents/mexplore_page/mexploresearch_subPage/mexploresearch_subPage";
import { useParams } from "react-router-dom";
import { checkAndHandleLocalUserInfo } from '../../store/actions/notLoggedInUser_action';


const  MExplorePage =()=> {
  
  const params = useParams();
  const [mode, setMode] = useState('Home');

  useEffect(()=>{
    let c_id = localStorage.getItem("customer_id");
      if(c_id === undefined || c_id === null){
        checkAndHandleLocalUserInfo();
      }
    if(params.keyword !== undefined){
      setMode('Search');
    }
  },[])

    return (
      <div className="mep">
        {mode==="Home"? <MExploreHomeSubPage setMode={setMode}/>:
        <MExploreSearchSubPage setMode={setMode}/>
        }
        <MBottomNavBar bMode={"Explore"}/>
      </div>
    );
  }


export default  MExplorePage;
