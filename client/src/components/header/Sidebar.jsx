import React from "react";
import { Divider, Drawer, List } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

import { Link } from "react-router-dom";

const Sidebar = ({ menuSide, abrirSide }) => {
   return (
      <Drawer anchor="left" open={menuSide} onClose={abrirSide}>
         <div className="m-2 mr-4 ml-2" style={{ minWidth: "200px" }}>
            <Link
               to="/"
               style={{ textDecoration: "none", color: "black" }}
               onClick={abrirSide}
            >
               <h2
                  className="rounded text-center text-light"
                  style={{ backgroundColor: "#083D77" }}
               >
                  Menu
               </h2>
               {/* <CancelIcon onClick={abrirSide} className="mouse" /> */}
            </Link>

            <Divider />
            <div className="ml-2 mt-2">
               <Link
                  to="/prime-faces"
                  onClick={abrirSide}
                  style={{ textDecoration: "none" }}
               >
                  <List className="hvr-forward">
                     <h5>Prime Faces</h5>
                  </List>
               </Link>
               <Link to="/react" onClick={abrirSide} style={{ textDecoration: "none" }}>
                  <List className="hvr-forward">
                     <h5>React</h5>
                  </List>
               </Link>
               <Link
                  to="/material-ui"
                  onClick={abrirSide}
                  style={{ textDecoration: "none" }}
               >
                  <List className="hvr-forward">
                     <h5>Material-ui</h5>
                  </List>
               </Link>
               <List className="hvr-forward">
                  <h5>Java</h5>
               </List>
               <List className="hvr-forward">
                  <h5>Bootstrap</h5>
               </List>
               <List className="hvr-forward">
                  <h5>IntelliJ</h5>
               </List>
            </div>
         </div>
      </Drawer>
   );
};

export default Sidebar;
