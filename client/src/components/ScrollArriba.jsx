import React, { useEffect, useState } from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
   toTop: {
      zIndex: 1,
      position: "fixed",
      left: 25,
      bottom: 25,
      backgroundColor: "grey",
      color: "black",
      opacity: "65%",
      "&:hover, &Mui-focusVisible": {
         transition: "0.3s",
         color: "#black",
         backgroundColor: "#30BCED",
      },
   },
}));

const ScrollArriba = ({ showBelow }) => {
   const classes = useStyles();
   const [show, setShow] = useState(showBelow ? false : true);

   const handleScroll = () => {
      if (window.scrollY > showBelow) {
         setShow(true);
      } else {
         setShow(false);
      }
   };

   const handleClickArriba = () => {
      window["scrollTo"]({ top: 0, behavior: "smooth" });
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);
   return (
      <div>
         {show && (
            <IconButton onClick={handleClickArriba} className={classes.toTop}>
               <ExpandLessIcon />
            </IconButton>
         )}
      </div>
   );
};

export default ScrollArriba;
