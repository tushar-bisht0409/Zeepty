import React, { useState, useEffect } from "react";
import "./support_page.css";
import Drawer from "../../components/drawer/drawer";

function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBox, setSelectedBox] = useState(null);
  useEffect(() => {
    // Code for handling search functionality
  }, [searchQuery]);
  const handleBoxClick = (title) => {
    setSelectedBox(title);
  };


  return (
    <div className="supportPage">
        <Drawer mode={"support"} />

      <div className="contentd">
      <button className="raiseticket">Raise Ticket</button>
        <div className="contentContainer">
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search for problem"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="boxesContainer">
            
            <div className="box" onClick={() => handleBoxClick("Returns/RTO & Exchange")}>
              <div className="boxContent">
                <div className="boxTitle">Returns</div>
                <div className="boxLogoSecondary"> <i id='ddrawerIcon' class="fa fa-home"></i></div>
              </div>
              <div className="boxLogo"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>
            </div>
            <div className="box" onClick={() => handleBoxClick("Cataloging & Pricing")}>
              <div className="boxContent">
                <div className="boxTitle">Listing</div>
                <div className="boxLogoSecondary">  <i id='ddrawerIcon' class="fa fa-archive" aria-hidden="true"></i></div>
              </div>
              <div className="boxLogo"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>
            </div>
            <div className="box" onClick={() => handleBoxClick("Orders & Delivery")}>
              <div className="boxContent">
                <div className="boxTitle">Title 3</div>
                <div className="boxLogoSecondary">  <i id='ddrawerIcon' class="fa fa-truck" aria-hidden="true"></i></div>
              </div>
              <div className="boxLogo"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>
            </div>
            <div className="box"onClick={() => handleBoxClick("Title 1")}>
              <div className="boxContent">
                <div className="boxTitle">Title 4</div>
                <div className="boxLogoSecondary">  <i id='ddrawerIcon' class="fa fa-th-list" aria-hidden="true"></i></div>
              </div>
              <div className="boxLogo"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>
            </div>
            <div className="box"onClick={() => handleBoxClick("Title 1")}>
              <div className="boxContent">
                <div className="boxTitle">Title 5</div>
                <div className="boxLogoSecondary"> <i id='ddrawerIcon' class="fa fa-upload" aria-hidden="true"></i></div>
              </div>
              <div className="boxLogo"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>
            </div>
            <div className="box">
              <div className="boxContent">
                <div className="boxTitle">Title 6</div>
                <div className="boxLogoSecondary">   <i id='ddrawerIcon' class="fa fa-inr" aria-hidden="true"></i></div>
              </div>
              <div className="boxLogo"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>
            </div>
            <div className="box"onClick={() => handleBoxClick("Title 1")}>
              <div className="boxContent">
                <div className="boxTitle">Title 7</div>
                <div className="boxLogoSecondary">  <i id='ddrawerIcon' class="fa fa-gear" aria-hidden="true"></i></div>
              </div>
              <div className="boxLogo"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>
            </div>
            <div className="box"onClick={() => handleBoxClick("Title 1")}>
              <div className="boxContent">
                <div className="boxTitle">Title 8</div>
                <div className="boxLogoSecondary">  <i id='ddrawerIcon' class="fa fa-gear" aria-hidden="true"></i></div>
              </div>
              <div className="boxLogo"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>
            </div>
            <div className="box"onClick={() => handleBoxClick("Title 1")}>
              <div className="boxContent">
                <div className="boxTitle">Title 9</div>
                <div className="boxLogoSecondary"><i id='ddrawerIcon' class="fa fa-gear" aria-hidden="true"></i></div>
              </div>
              <div className="boxLogo"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>
            </div>
            {selectedBox && (
            <div className="selectedBox">
              <div className="selectedBoxContent">
                <div className="selectedBoxTitle">{selectedBox}</div>
                <div className="orderRelatedQuestions">
                  <div className="leftColumn">
               
                    <ul>
                      <li className="questionleft">I have received wrong return</li>
                      <li className="questionleft">I have not received my Return/RTO shipment</li>
                      <li className="questionleft">I have received damaged return</li>
                      <li className="questionleft">I want to know about courier partner preferences for customer returns.</li>
                      <li className="questionleft">I have received used product as return</li>
                      <li className="questionleft">I have an issue with Exchange order</li>
                    </ul>
                  </div>
                  <div className="rightColumn" style={{marginRight:'20px'}}>
                 
                    <ul>
                      <li className="questionright">Order return shipping charge fee issue</li>
                      <li className="questionright">Other Returns/RTO and Exchange related issue</li>
                      <li className="questionright">When will I receive my wrong return related compensation</li>
                      <li className="questionright">I want to stop using the Wrong/Defective Returns Feature</li>
                      <li className="questionright">I have an issue with Exchange order</li>
                      <li className="questionright">Order return shipping charge fee issue</li>
                    </ul>
                  </div>
                </div>
              </div>
            
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
