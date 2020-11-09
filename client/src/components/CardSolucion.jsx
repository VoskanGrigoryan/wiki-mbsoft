import React from "react";
import AppButton from "./genericos/AppButton";
import {
   Card,
   CardActions,
   CardContent,
   Typography,
   makeStyles,
} from "@material-ui/core";
import DialogThread from "./DialogThread";

const useStyles = makeStyles((theme) => ({
   ta: {
      justifyContent: "center",
   },
}));

const CardSolucion = () => {
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(!open);
   };

   const classes = useStyles();

   return (
      <Card>
         <DialogThread open={open} handleClickOpen={handleClickOpen} />
         <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               Lizards are a widespread group of squamate reptiles, with over 6,000
            </Typography>
         </CardContent>
         <CardActions className={classes.ta}>
            <AppButton size="small" className="text-light" onClick={handleClickOpen}>
               Visualizar
            </AppButton>
         </CardActions>
      </Card>
   );
};

export default CardSolucion;
