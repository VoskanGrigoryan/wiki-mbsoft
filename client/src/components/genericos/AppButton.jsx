import React from "react";
import { Button } from "@material-ui/core";

const AppButton = ({ children, ...rest }) => {
   return (
      <Button variant="contained" color="primary" {...rest}>
         {children}
      </Button>
   );
};

export default AppButton;
