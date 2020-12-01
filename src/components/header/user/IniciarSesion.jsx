import React, { useState } from "react";
import logoWikiDark from "../../../images/logos/logoWikiDark.png";
import Wizardo from "./index";
import AppButton from "../../genericos/AppButton";
import { Paper } from "@material-ui/core";

const IniciarSesion = () => {
   //Abrir y cerrar el modal
   const [openLogin, setOpenLogin] = useState(false);

   const handleLogin = () => {
      setOpenLogin(!openLogin);
   };

   return (
      <div
         className="App vh-100 justify-content-center align-items-start d-flex"
         style={{ backgroundColor: "#A5E8FF", paddingTop: "100px" }}
      >
         <Wizardo openLogin={openLogin} handleLogin={handleLogin} />
         <Paper className="row text-center mx-0 p-3 rounded">
            <div className="col-12">
               {" "}
               <img src={logoWikiDark} alt="logo wiki" style={{ height: "160px" }} />
            </div>
            <div className="col-12 mt-2">
               {" "}
               <AppButton size="large" className="text-dark" onClick={handleLogin}>
                  <h2 className="text-white mb-0">Inicio sesión</h2>
               </AppButton>
            </div>
         </Paper>
      </div>
   );
};

export default IniciarSesion;
