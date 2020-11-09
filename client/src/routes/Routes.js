import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Inicio from "../views/inicio/Inicio";
import Navbar from "../components/header/Navbar";

import MaterialUi from "../views/wikis/materialUi/Index"
import PrimeFaces from "../views/wikis/primeFaces/Index"
import VistaReact from "../views/wikis/react/Index"
import CrearThread from "../views/crearThread/Index"
import Java from "../views/wikis/java/Index";
import Bootstrap from "../views/wikis/bootstrap/Index";
import IntelliJ from "../views/wikis/intelliJ/Index";
import Erp from "../views/wikis/erp/Index";
import ScrollArriba from "../components/ScrollArriba"

const Routes = () => {
   return (
      <Router>
         <Navbar className="px-0" />
         <ScrollArriba showBelow={200} />
         <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/material-ui" exact component={MaterialUi} />
            <Route path="/prime-faces" exact component={PrimeFaces} />
            <Route path="/react" exact component={VistaReact} />
            <Route path="/crear-thread" exact component={CrearThread} />
            <Route path="/java" exact component={Java} />
            <Route path="/bootstrap" exact component={Bootstrap} />
            <Route path="/intellij" exact component={IntelliJ} />
            <Route path="/erp" exact component={Erp} />
         </Switch>
      </Router>
   );
};

export default Routes;
