import React from "react";
import { Button } from "@material-ui/core";

const AppButton = ({ children, ...rest }) => {
   return (
      <Button variant="contained" color="primary" className="text-white" {...rest}>
         {children}
      </Button>
   );
};

export default AppButton;
