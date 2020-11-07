import React from "react";
import logoReact from "../../../images/logos/logoReact.png";

const vistaReact = () => {
   return (
      <div className="App container-fluid h-100" style={{ paddingTop: "74px" }}>
         <div className="row mx-0">
            <div className="col-12">
               <h4
                  className="rounded text-center text-light px-2"
                  style={{ backgroundColor: "#303846" }}
               >
                  React{" "}
                  <img
                     className="pb-1"
                     src={logoReact}
                     alt="logo"
                     style={{ height: "30px" }}
                  />
               </h4>
            </div>
            <div className="col-12">2</div>
         </div>
      </div>
   );
};

export default vistaReact;
