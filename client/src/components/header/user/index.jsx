import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
// import Wizard from "../components/Wizard";
import Wizard from "../../Wizard";
import Register from "./Register";
import Login from "./Login";

const Index = ({ openLogin, handleLogin }) => {
   const [activePage, setActivePage] = useState(0);
   return (
      <Dialog open={openLogin} onClose={handleLogin} fullWidth>
         <Wizard currentPage={activePage}>
            <Register setActivePage={setActivePage} handleLogin={handleLogin} />
            <Login setActivePage={setActivePage} handleLogin={handleLogin} />
         </Wizard>
      </Dialog>
   );
};

export default Index;
