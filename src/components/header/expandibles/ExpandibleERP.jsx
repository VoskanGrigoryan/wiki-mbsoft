import React, { useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const ExpandibleErp = ({ abrirSide }) => {
   const [open, erpOpen] = useState(false);

   const abrirErp = () => {
      erpOpen(!open);
   };

   const alerta = () => {
      swal(
         "Ojo al piojo!",
         "Esta sección no forma parte de la demo y aun no esta hecha",
         "warning"
      );
   };

   // const ExpandERP = ({ item }) => {
   //    <>
   //       <ListItem
   //          key={item.text}
   //          button
   //          component={Link}
   //          to={item.to}
   //          onClick={abrirSide}
   //          className={item.className}
   //       >
   //          <ListItemText primary={item.text} />
   //       </ListItem>
   //    </>;
   // };

   return (
      <TreeView style={{ textDecoration: "none", paddingLeft: "0px" }}>
         <TreeItem nodeId="1" label="ERP">
            <TreeItem
               nodeId="2"
               label="Documentación"
               className="hvr-forward"
               onClick={alerta}
            />

            <TreeItem
               nodeId="2"
               label="Instalación"
               className="hvr-forward"
               onClick={alerta}
            />

            <TreeItem
               nodeId="2"
               label="Errores comunes"
               className="hvr-forward"
               onClick={alerta}
            />
         </TreeItem>
      </TreeView>
   );
};

export default ExpandibleErp;

{
   /* <Link to="/erp" onClick={abrirSide} style={{ textDecoration: "none" }}>
               {" "}
               <ListItem button className="ml-4" onClick={alerta}>
                  <ListItemText
                     primary="Instalación del ambiente"
                     className="hvr-forward"
                  />
               </ListItem>
            </Link>

            <Link to="/erp" onClick={abrirSide} style={{ textDecoration: "none" }}>
               <ListItem button className="ml-4" onClick={alerta}>
                  <ListItemText primary="Errores comunes" className="hvr-forward" />
               </ListItem>
            </Link>

            <Link to="/erp" onClick={abrirSide} style={{ textDecoration: "none" }}>
               <ListItem button className="ml-4" onClick={alerta}>
                  <ListItemText primary="Guia general" className="hvr-forward" />
               </ListItem>
            </Link> */
}
