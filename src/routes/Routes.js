import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Inicio from "../views/inicio/Inicio";
import Navbar from "../components/header/Navbar";
import CrearThread from "../views/Thread/Index"
import IntelliJ from "../views/wikis/intelliJ/Index";
import Erp from "../views/wikis/erp/Index";
import ScrollArriba from "../components/ScrollArriba"
import IniciarSesion from "../components/header/user/IniciarSesion";
import ModificarThread from "../views/Thread/ModificarThread";
import PrivateRoute from "./restrictor/PrivateRoute";
import Usuario from "../views/usuario/Usuario";
import Permiso from "../views/usuario/Permiso";
import GuiaWiki from "../views/guias/Index";
import erp from "../views/wikis/erp/Index";

const Routes = () => {
   return (
      <Router>
         <Navbar className="px-0" />
         <ScrollArriba showBelow={200} />
         <Switch>
            <PrivateRoute path="/" exact component={Inicio} />
            <PrivateRoute path="/crear-thread" exact component={CrearThread} />
            <PrivateRoute path="/modificar-thread" exact component={ModificarThread} />
            <PrivateRoute path="/intellij" exact component={IntelliJ} />
            <PrivateRoute path="/erp" exact component={Erp} />
            <Route path="/iniciar-sesion" exact component={IniciarSesion} />
            <PrivateRoute path="/wiki-general" exact component={GuiaWiki} />
            <PrivateRoute path="/usuario" exact component={Usuario} />
            <PrivateRoute path="/permiso" exact component={Permiso} />
            <PrivateRoute path="/erp" exact component={erp} />
         </Switch>
      </Router>
   );
};

export default Routes;
