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
   },
   title: {
      flexGrow: 1,
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
         <AppBar position="fixed" style={{ height: "64px", backgroundColor: "#088E9C" }}>
            <Wizardo openLogin={openLogin} handleLogin={handleLogin} />
            <Sidebar menuSide={menuSide} abrirSide={abrirSide} />
            <Toolbar>
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  onClick={abrirSide}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" className={classes.title}>
                  MbSoft - Wiki
               </Typography>
               <div onClick={handleLogin} className="hvr-grow">
                  Login
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
}
