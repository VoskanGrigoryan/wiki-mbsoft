import React, { useState } from "react";
import { makeStyles, AppBar, Toolbar, IconButton, Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logoWiki from "../../images/logos/logoWiki.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import walterPerfil from "../../images/gen/walterPerfil.png";

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

   const { logeado } = useAuthContext();

   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <div className={classes.root}>
         <AppBar position="fixed">
            {/* <Wizardo openLogin={openLogin} handleLogin={handleLogin} /> */}
            <Sidebar menuSide={menuSide} abrirSide={abrirSide} />
            <Toolbar>
               {logeado ? (
                  <IconButton
                     edge="start"
                     className={classes.menuButton}
                     onClick={abrirSide}
                  >
                     <MenuIcon />
                  </IconButton>
               ) : (
                  <IconButton edge="start" className={classes.menuButton}>
                     <MenuIcon />
                  </IconButton>
               )}
               <div className={classes.title}>
                  <Link to="/" style={{ textDecoration: "none" }}>
                     <img
                        src={logoWiki}
                        alt="logo wiki"
                        style={{ height: "60px", marginTop: "10px" }}
                     />
                  </Link>
               </div>
               {/* onClick={handleLogin} */}
               <div className="mouse">
                  <h5 className="my-0" onClick={handleClick}>
                     {logeado ? <Avatar src={walterPerfil} fontSize="large" /> : null}
                  </h5>
                  <Menu
                     anchorEl={anchorEl}
                     keepMounted
                     open={Boolean(anchorEl)}
                     onClose={handleClose}
                  >
                     <Link
                        to="/usuario"
                        style={{ textDecoration: "none", color: "black" }}
                     >
                        <MenuItem onClick={handleClose}>Perfil</MenuItem>
                     </Link>
                     <Link
                        to="/permiso"
                        style={{ textDecoration: "none", color: "black" }}
                     >
                        <MenuItem onClick={handleClose}>Permisos</MenuItem>
                     </Link>
                     <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
                  </Menu>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
}
