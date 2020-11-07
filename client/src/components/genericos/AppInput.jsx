import React from "react";
import { TextField } from "@material-ui/core";

const AppInput = (props) => {
   return (
      <TextField
         autoComplete="off"
         {...props}
         fullWidth
         variant="outlined"
         size="small"
      />
   );
};

export default AppInput;
