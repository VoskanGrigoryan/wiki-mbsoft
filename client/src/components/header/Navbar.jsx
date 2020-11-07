import React, { useState } from "react";
import { makeStyles, AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Wizardo from "../header/user/index";

import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
      color: "#ffffff",
   },
   title: {
      flexGrow: 1,
      color: "#ffffff",
   },
}));

export default function ButtonAppBar() {
   const classes = useStyles();

   const [menuSide, setMenuSide] = useState(false);

   const abrirSide = () => {
      setMenuSide(!menuSide);
   };

   //Abrir y cerrar el modal
   const [openLogin, setOpenLogin] = useState(false);

   const handleLogin = () => {
      setOpenLogin(!openLogin);
   };

   return (
      <div className={classes.root}>
         <AppBar position="fixed">
            <Wizardo openLogin={openLogin} handleLogin={handleLogin} />
            <Sidebar menuSide={menuSide} abrirSide={abrirSide} />
            <Toolbar>
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  onClick={abrirSide}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h5" className={classes.title}>
                  MbSoft - Wiki
               </Typography>
               <div onClick={handleLogin} className="hvr-grow">
                  <h5 className="text-light mb-0">Login</h5>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
}
