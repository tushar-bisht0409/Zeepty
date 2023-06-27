import React, {useState} from "react";
import "./selectVertical.css"


export default function AddProductPage() {
    const vertical=[
        {"clothing":{
            "img":"Image URL",
            "categories":["topwear","bottomwear","activewear","regis"]
        },},
        {"footwear":{
            "img":"Image URL",
            "categories":["sneakers","sandal"]
        }},
        {"electronics":{
            "img":"Image URL",
            "categories":["desktop","mobile"]
        }}

    ]


    const category={
        "bottomwear":["trousers","shorts"],
        "topwear": ["top","shirt","bra","sandow"],
        "activewear":["love","rage"],
        "regis":["geralt","triss"],
        "sneakers":["aa","bb"],
        "sandal": ["A","D"],
        "desktop": ["SS","XX"],
        "mobile": ["OO","pp"],

}


    

    const [selectverticalIndex, setVerticalIndex]=useState(null);
    const [selectVertical, setSelectVertical]=useState("");
    const [selectCategory, setSelectCategory] = useState("");
    const [selectSubCategory, setSelectSubCategory] = useState("");


    return(
        <div>
        <div className="vertical">
        <div className="heading" id="selectProductVertical">Select Product vertical</div>
        <form className="nosubmit">
        <input className="nosubmit" type="search" placeholder="Enter product name, URL"></input>
        </form>
        </div>
        <div className="activebtn">
        
        </div>
        <div style={{display: 'flex', backgroundColor: 'white', flexDirection: 'row', justifyContent:'space-between', paddingRight:'5vw', paddingLeft:'5vw'}}>
        {vertical.map((p,index) => (
            <div style={ index===selectverticalIndex? { border: '0.15vw solid  #3F2B96', height:'4vw', width:'15vw', borderRadius: '0.4vw'} : {border: '0.15vw solid lightgrey', height:'4vw', width:'15vw',borderRadius: '0.4vw'}}>
            <div style={{color: index===selectverticalIndex? ' #3F2B96':'grey' ,fontWeight: '900', fontSize:'1vw', paddingLeft:'5vw',paddingTop:'1vw'}} onClick={()=>{console.log("Verticla"); setSelectCategory(""); setSelectVertical(Object.keys(p)[0]); setVerticalIndex(index)}}>
            {Object.keys(p)[0]}</div>
            </div>
          ))}
          </div>

          {selectverticalIndex === null? <div></div> : <div className="heading" id="selectProductCategory">Select Product Category</div>}
          
          <div style={{display:'flex', backgroundColor: 'white', flexDirection: 'row', justifyContent:'space-between', paddingRight:'5vw', paddingLeft:'5vw', paddingTop:'2vw'}}>
          {selectverticalIndex === null? <div></div> : vertical[selectverticalIndex][selectVertical]["categories"].map((c,index) => (
            <div style={c===selectCategory? { border: '0.15vw solid  #3F2B96', height:'4vw', width:'15vw', borderRadius: '0.4vw'} : {border: '0.15vw solid lightgrey', height:'4vw', width:'15vw',borderRadius: '0.4vw'}}>
            <div style={{color:c===selectCategory ? ' #3F2B96':'grey' ,fontWeight: '900', fontSize:'1vw', paddingLeft:'5vw',paddingTop:'1vw'}} onClick={()=>{ console.log("Category"); setSelectCategory(c)}}>{c}</div>
            </div>
          ))}
          </div> 

          {selectCategory === ""? <div></div> : <div className="heading" id="selectProductSubCategory">Select Product Sub-Category</div>}
          <div style={{display:'flex', backgroundColor: 'white', flexDirection: 'row', justifyContent:'space-between', paddingRight:'5vw', paddingLeft:'5vw', paddingTop:'2vw'}}>
          {selectCategory === ""? <div></div> : category[selectCategory].map((d,index) => (
            <div style={d===selectSubCategory? { border: '0.15vw solid  #3F2B96', height:'4vw', width:'15vw', borderRadius: '0.4vw'} : {border: '0.15vw solid lightgrey', height:'4vw', width:'15vw',borderRadius: '0.4vw'}}>
            <div style={{color: d===selectSubCategory? ' #3F2B96':'grey' ,fontWeight: '900', fontSize:'1vw', paddingLeft:'5vw',paddingTop:'1vw'}} onClick={()=>{ console.log("Verticla"); setSelectSubCategory(d)}}>{d}</div>
            </div>
          ))}
          </div>

          <div id="bttn"></div>
         



    
        </div>
    )
}