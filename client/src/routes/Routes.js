import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Inicio from "../views/inicio/Inicio";
import Navbar from "../components/header/Navbar";

import MaterialUi from "../views/wikis/materialUi/Index"
import PrimeFaces from "../views/wikis/primeFaces/Index"
import VistaReact from "../views/wikis/react/Index"
import CrearThread from "../views/crearThread/Index"

const Routes = () => {
   return (
      <Router>
         <Navbar className="px-0"/>
         <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/material-ui" exact component={MaterialUi} />
            <Route path="/prime-faces" exact component={PrimeFaces} />
            <Route path="/react" exact component={VistaReact} />
            <Route path="/crear-thread" exact component={CrearThread} />
         </Switch>
      </Router>
   );
};

export default Routes;
