import React from "react";
import { Divider, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import ExpandibleErp from "./expandibles/ExpandibleERP";

const Sidebar = ({ menuSide, abrirSide }) => {
   const MenuItem = ({ item }) => (
      <>
         <ListItem
            key={item.text}
            button
            component={Link}
            to={item.to}
            onClick={abrirSide}
            className={item.className}
         >
            <ListItemText primary={item.text} />
         </ListItem>
         {item.divider && <Divider className="mx-2" />}
      </>
   );

   return (
      <Drawer anchor="left" open={menuSide} ModalProps={{ onBackdropClick: abrirSide }}>
         <Link
            to="/"
            style={{ textDecoration: "none", color: "black", minWidth: "260px" }}
            onClick={abrirSide}
         >
            <h4
               className="rounded text-center text-light pb-1 m-2 ml-2"
               style={{ backgroundColor: "#132743" }}
            >
               Inicio
            </h4>
         </Link>
         <Divider />
         <List>
            {[
               { to: "/wiki-general", text: "Guia general", className: "hvr-forward" },
               {
                  to: "/intellij",
                  text: "Intellij",
                  divider: true,
                  className: "hvr-forward",
               },
               { to: "/usuario", text: "Usuario", className: "hvr-forward" },
               {
                  to: "/permiso",
                  text: "Permisos",
                  className: "hvr-forward",
                  divider: true,
               },
            ].map((item) => (
               <MenuItem item={item} />
            ))}
         </List>
         <ExpandibleErp />
      </Drawer>
   );
};

export default Sidebar;
