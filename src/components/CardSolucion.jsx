import React from "react";
import AppButton from "./genericos/AppButton";
import {
   Card,
   CardActions,
   CardContent,
   Typography,
   makeStyles,
   Checkbox,
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import DialogThread from "./DialogThread";

const useStyles = makeStyles((theme) => ({}));

const CardSolucion = () => {
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(!open);
   };

   const classes = useStyles();

   return (
      <Card style={{ backgroundColor: "#F6FCFF" }}>
         <DialogThread open={open} handleClickOpen={handleClickOpen} />
         <CardContent>
            <div className="row">
               <div className="col-6">
                  <h5>Guia de React</h5>
               </div>
               <div className="col-6 text-right">
                  <small className="my-0">0074832</small>
               </div>
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
               Lizards are a widespread group of squamate reptiles, with over 6,000
               different species all over the world
            </Typography>
         </CardContent>
         <CardActions>
            <AppButton size="small" className="text-light" onClick={handleClickOpen}>
               Visualizar
            </AppButton>
            <Checkbox
               icon={<StarBorderIcon style={{ color: "#000000" }} />}
               checkedIcon={<StarIcon style={{ color: "#FFDC20" }} />}
            />
         </CardActions>
      </Card>
   );
};

export default CardSolucion;
