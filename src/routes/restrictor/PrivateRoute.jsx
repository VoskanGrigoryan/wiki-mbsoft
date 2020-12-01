import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
   const { logeado } = useAuthContext();

   return (
      <Route
         {...rest}
         render={(props) =>
            logeado ? <Component {...props} /> : <Redirect to="/iniciar-sesion" />
         }
      />
   );
};

export default PrivateRoute;
