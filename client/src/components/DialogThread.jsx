import React from "react";
import {
   makeStyles,
   Dialog,
   List,
   AppBar,
   Toolbar,
   IconButton,
   Typography,
   Slide,
   ListItem,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import AppButton from "../components/genericos/AppButton";
import DashCalidad from "../images/gen/DashCalidad.png";
import DashCalidad2 from "../images/gen/DashCalidad2.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
   appBar: {
      position: "fixed",
   },
   title: {
      marginLeft: theme.spacing(2),
      flex: 1,
   },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, handleClickOpen }) {
   const classes = useStyles();

   return (
      <Dialog
         fullScreen
         open={open}
         onClose={handleClickOpen}
         TransitionComponent={Transition}
      >
         <AppBar className={classes.appBar}>
            <Toolbar>
               <IconButton edge="start" color="inherit" onClick={handleClickOpen}>
                  <CloseIcon />
               </IconButton>
               <Typography variant="h6" className={classes.title}>
                  Material-UI
               </Typography>
               <AppButton color="secondary" onClick={handleClickOpen} className="mr-2">
                  Finalizar
               </AppButton>
               <Link to="/crear-thread" style={{ textDecoration: "none" }}>
                  <AppButton color="secondary" onClick={handleClickOpen}>
                     Modificar
                  </AppButton>
               </Link>
            </Toolbar>
         </AppBar>
         <List>
            <ListItem style={{ paddingTop: "70px" }}>
               <h1>-Titulo del problema-</h1>
            </ListItem>
            <ListItem>
               <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
                  accusantium tempore quis quae expedita non eius omnis deleniti iste
                  dolor blanditiis aut minima aspernatur nobis voluptates ipsa corporis
                  quia exercitationem possimus, ratione dolorem alias est inventore illo.
                  Dolores inventore deserunt magnam illo mollitia, ipsum blanditiis quo
                  quae quod voluptatem nesciunt ex sunt reiciendis harum aliquid. Eum iure
                  saepe voluptas sed consequuntur alias et nostrum, perspiciatis nam quam
                  ipsum iusto, facilis suscipit tempora omnis maxime quas neque illo vero
                  dicta dolores dolorum! Alias, debitis
               </p>
            </ListItem>
            <img
               src={DashCalidad}
               alt="Problema a mostrar"
               className="ml-3"
               style={{ width: "1200px" }}
            />
            <ListItem className="mt-3">
               <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
                  accusantium tempore quis quae expedita non eius omnis deleniti iste
                  dolor blanditiis aut minima aspernatur nobis voluptates ipsa corporis
                  quia exercitationem possimus, ratione dolorem alias est inventore illo.
                  Dolores inventore deserunt magnam illo mollitia, ipsum blanditiis quo
                  quae quod voluptatem nesciunt ex sunt reiciendis harum aliquid. Eum iure
                  saepe voluptas sed consequuntur alias et nostrum, perspiciatis nam quam
                  ipsum iusto, facilis suscipit tempora omnis maxime quas neque illo vero
                  dicta dolores dolorum! Alias, debitis
               </p>
            </ListItem>
            <ListItem className="mt-3">
               <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
                  accusantium tempore quis quae expedita non eius omnis deleniti iste
                  dolor blanditiis aut minima aspernatur nobis voluptates ipsa corporis
                  quia exercitationem possimus, ratione dolorem alias est inventore
                  deleniti modi illo? Rem, quod fugit? Vel voluptatem vero asperiores
                  ipsam quam, totam, quis ut doloribus animi, eius voluptate laboriosam
                  consequuntur non neque tempora odio soluta deserunt adipisci minima
                  magnam alias? Placeat minima nisi ad error. Ab, rerum ullam!
               </p>
            </ListItem>
            <img
               src={DashCalidad2}
               alt="Problema a mostrar"
               className="ml-3"
               style={{ width: "1200px" }}
            />
         </List>
      </Dialog>
   );
}
