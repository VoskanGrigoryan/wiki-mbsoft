import React from "react";
import {
   Divider,
   Drawer,
   List,
   ListItem,
   ListItemText,
   Collapse,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Sidebar = ({ menuSide, abrirSide }) => {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const [open, setOpen] = React.useState(false);

   const erpOpen = () => {
      setOpen(!open);
   };

   const alerta = () => {
      swal(
         "Ojo al piojo!",
         "Esta sección no forma parte de la demo y aun no esta hecha",
         "warning"
      );
   };
   return (
      <Drawer anchor="left" open={menuSide} onClose={abrirSide}>
         <div className="m-2 mr-4 ml-2" style={{ minWidth: "240px" }}>
            <Link
               to="/"
               style={{ textDecoration: "none", color: "black" }}
               onClick={abrirSide}
            >
               <h4
                  className="rounded text-center text-light pb-1"
                  style={{ backgroundColor: "#132743" }}
               >
                  Inicio
               </h4>
            </Link>

            <Divider />

            <Link
               to="/prime-faces"
               onClick={abrirSide}
               style={{ textDecoration: "none" }}
            >
               <ListItem button>
                  <ListItemText primary="Prime Faces" className="hvr-forward" />
               </ListItem>
            </Link>
            <Link to="/react" onClick={abrirSide} style={{ textDecoration: "none" }}>
               <ListItem button>
                  <ListItemText primary="React Js" className="hvr-forward" />
               </ListItem>
            </Link>
            <Link
               to="/material-ui"
               onClick={abrirSide}
               style={{ textDecoration: "none" }}
            >
               <ListItem button>
                  <ListItemText primary="Material-UI" className="hvr-forward" />
               </ListItem>
            </Link>
            <Link to="java" onClick={abrirSide} style={{ textDecoration: "none" }}>
               <ListItem button>
                  <ListItemText primary="Java" className="hvr-forward" />
               </ListItem>
            </Link>

            <Link to="/bootstrap" onClick={abrirSide} style={{ textDecoration: "none" }}>
               <ListItem button>
                  <ListItemText primary="Bootstrap" className="hvr-forward" />
               </ListItem>
            </Link>
            <Link to="/intellij" onClick={abrirSide} style={{ textDecoration: "none" }}>
               <ListItem button>
                  <ListItemText primary="IntelliJ" className="hvr-forward" />
               </ListItem>
            </Link>
            <List component="div" disablePadding></List>

            <Divider />

            <List component="nav">
               <Link to="/erp" style={{ textDecoration: "none" }} onClick={alerta}>
                  <ListItem button onClick={abrirSide}>
                     <ListItemText primary="ERP" className="text-dark" />
                  </ListItem>
               </Link>
               <ListItem button onClick={erpOpen}>
                  <ListItemText primary="Documentacion" />
                  {open ? <ExpandLess /> : <ExpandMore />}
               </ListItem>
               <Collapse in={open} timeout="10s" unmountOnExit>
                  <List component="div" disablePadding>
                     <Link
                        to="/erp"
                        onClick={abrirSide}
                        style={{ textDecoration: "none" }}
                     >
                        {" "}
                        <ListItem button className="ml-4" onClick={alerta}>
                           <ListItemText
                              primary="Instalación del ambiente"
                              className="hvr-forward"
                           />
                        </ListItem>
                     </Link>
                  </List>
                  <List component="div" disablePadding>
                     <Link
                        to="/erp"
                        onClick={abrirSide}
                        style={{ textDecoration: "none" }}
                     >
                        <ListItem button className="ml-4" onClick={alerta}>
                           <ListItemText
                              primary="Errores comunes"
                              className="hvr-forward"
                           />
                        </ListItem>
                     </Link>
                  </List>
                  <List component="div" disablePadding>
                     <Link
                        to="/erp"
                        onClick={abrirSide}
                        style={{ textDecoration: "none" }}
                     >
                        <ListItem button className="ml-4" onClick={alerta}>
                           <ListItemText primary="Guia general" className="hvr-forward" />
                        </ListItem>
                     </Link>
                  </List>
               </Collapse>
            </List>
            <Divider />

            <List className="hvr-forward">
               <ListItem
                  button
                  onClick={() => {
                     swal("Alto ahí!", "Esta sección esta en desarrollo", "error");
                  }}
               >
                  <ListItemText primary="Guia de usuario" className="hvr-forward" />
               </ListItem>
            </List>
         </div>
      </Drawer>
   );
};

export default Sidebar;
