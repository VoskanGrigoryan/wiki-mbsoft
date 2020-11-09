import React, { useState } from "react";
import { makeStyles, AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Wizardo from "../header/user/index";
import logoWiki from "../../images/logos/logoWiki.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

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
               <div className={classes.title}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                     <img
                        src={logoWiki}
                        alt="logo wiki"
                        style={{ height: "60px", marginTop: "10px" }}
                     />
                  </Link>
               </div>
               <div onClick={handleLogin} className="hvr-grow">
                  <h5 className="text-light mb-0">Inicio sesion</h5>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
}
