import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
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
      <div>
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
                     quia exercitationem possimus, ratione dolorem alias est inventore
                     illo. Dolores inventore deserunt magnam illo mollitia, ipsum
                     blanditiis quo quae quod voluptatem nesciunt ex sunt reiciendis harum
                     aliquid. Eum iure saepe voluptas sed consequuntur alias et nostrum,
                     perspiciatis nam quam ipsum iusto, facilis suscipit tempora omnis
                     maxime quas neque illo vero dicta dolores dolorum! Alias, debitis
                     consectetur. Nesciunt reprehenderit modi enim ex quam mollitia ipsum
                     aperiam iste quaerat doloribus deserunt culpa aut suscipit eius
                     neque, impedit provident quisquam illo vel! Soluta voluptatibus
                     deleniti modi illo? Rem, quod fugit? Vel voluptatem vero asperiores
                     ipsam quam, totam, quis ut doloribus animi, eius voluptate laboriosam
                     consequuntur non neque tempora odio soluta deserunt adipisci minima
                     magnam alias? Placeat minima nisi ad error. Ab, rerum ullam!
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
                     quia exercitationem possimus, ratione dolorem alias est inventore
                     illo. Dolores inventore deserunt magnam illo mollitia, ipsum
                     blanditiis quo quae quod voluptatem nesciunt ex sunt reiciendis harum
                     aliquid. Eum iure saepe voluptas sed consequuntur alias et nostrum,
                     perspiciatis nam quam ipsum iusto, facilis suscipit tempora omnis
                     maxime quas neque illo vero dicta dolores dolorum! Alias, debitis
                     consectetur. Nesciunt reprehenderit modi enim ex quam mollitia ipsum
                     aperiam iste quaerat doloribus deserunt culpa aut suscipit eius
                     neque, impedit provident quisquam illo vel! Soluta voluptatibus
                     deleniti modi illo? Rem, quod fugit? Vel voluptatem vero asperiores
                     ipsam quam, totam, quis ut doloribus animi, eius voluptate laboriosam
                     consequuntur non neque tempora odio soluta deserunt adipisci minima
                     magnam alias? Placeat minima nisi ad error. Ab, rerum ullam!
                  </p>
               </ListItem>
               <ListItem className="mt-3">
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
                     accusantium tempore quis quae expedita non eius omnis deleniti iste
                     dolor blanditiis aut minima aspernatur nobis voluptates ipsa corporis
                     quia exercitationem possimus, ratione dolorem alias est inventore
                     illo. Dolores inventore deserunt magnam illo mollitia, ipsum
                     blanditiis quo quae quod voluptatem nesciunt ex sunt reiciendis harum
                     aliquid. Eum iure saepe voluptas sed consequuntur alias et nostrum,
                     perspiciatis nam quam ipsum iusto, facilis suscipit tempora omnis
                     maxime quas neque illo vero dicta dolores dolorum! Alias, debitis
                     consectetur. Nesciunt reprehenderit modi enim ex quam mollitia ipsum
                     aperiam iste quaerat doloribus deserunt culpa aut suscipit eius
                     neque, impedit provident quisquam illo vel! Soluta voluptatibus
                     deleniti modi illo? Rem, quod fugit? Vel voluptatem vero asperiores
                     ipsam quam, totam, quis ut doloribus animi, eius voluptate laboriosam
                     consequuntur non neque tempora odio soluta deserunt adipisci minima
                     magnam alias? Placeat minima nisi ad error. Ab, rerum ullam!
                  </p>
               </ListItem>
               <ListItem className="mt-3">
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
                     accusantium tempore quis quae expedita non eius omnis deleniti iste
                     dolor blanditiis aut minima aspernatur nobis voluptates ipsa corporis
                     quia exercitationem possimus, ratione dolorem alias est inventore
                     illo. Dolores inventore deserunt magnam illo mollitia, ipsum
                     blanditiis quo quae quod voluptatem nesciunt ex sunt reiciendis harum
                     aliquid. Eum iure saepe voluptas sed consequuntur alias et nostrum,
                     perspiciatis nam quam ipsum iusto, facilis suscipit tempora omnis
                     maxime quas neque illo vero dicta dolores dolorum! Alias, debitis
                     consectetur. Nesciunt reprehenderit modi enim ex quam mollitia ipsum
                     aperiam iste quaerat doloribus deserunt culpa aut suscipit eius
                     neque, impedit provident quisquam illo vel! Soluta voluptatibus
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
               <ListItem className="mt-3">
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
                     accusantium tempore quis quae expedita non eius omnis deleniti iste
                     dolor blanditiis aut minima aspernatur nobis voluptates ipsa corporis
                     quia exercitationem possimus, ratione dolorem alias est inventore
                     illo. Dolores inventore deserunt magnam illo mollitia, ipsum
                     blanditiis quo quae quod voluptatem nesciunt ex sunt reiciendis harum
                     aliquid. Eum iure saepe voluptas sed consequuntur alias et nostrum,
                     perspiciatis nam quam ipsum iusto, facilis suscipit tempora omnis
                     maxime quas neque illo vero dicta dolores dolorum! Alias, debitis
                     consectetur. Nesciunt reprehenderit modi enim ex quam mollitia ipsum
                     aperiam iste quaerat doloribus deserunt culpa aut suscipit eius
                     neque, impedit provident quisquam illo vel! Soluta voluptatibus
                     deleniti modi illo? Rem, quod fugit? Vel voluptatem vero asperiores
                     ipsam quam, totam, quis ut doloribus animi, eius voluptate laboriosam
                     consequuntur non neque tempora odio soluta deserunt adipisci minima
                     magnam alias? Placeat minima nisi ad error. Ab, rerum ullam!
                  </p>
               </ListItem>
            </List>
         </Dialog>
      </div>
   );
}
