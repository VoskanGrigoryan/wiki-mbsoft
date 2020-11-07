import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React from "react";
import AppButton from "./genericos/AppButton";

import DialogThread from "./DialogThread";

const CardSolucion = () => {
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(!open);
   };

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
         <CardActions>
            <AppButton
               size="small"
               style={{ backgroundColor: "#ec524b" }}
               onClick={handleClickOpen}
            >
               Visualizar
            </AppButton>
         </CardActions>
      </Card>
   );
};

export default CardSolucion;
