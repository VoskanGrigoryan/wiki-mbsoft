import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
   root: {
      maxWidth: 300,
   },
   media: {
      minHie: 300,
   },
});

export default function MediaCard() {
   const classes = useStyles();

   return (
      <Card className={classes.root}>
         <CardActionArea>
            <CardMedia
               component="img"
               alt="Contemplative Reptile"
               height="140"
               image={walterPerfil}
               title="Contemplative Reptile"
            />
         </CardActionArea>
         <CardActions>
            <Button size="small" color="primary">
               Share
            </Button>
            <Button size="small" color="primary">
               Learn More
            </Button>
         </CardActions>
      </Card>
   );
}
