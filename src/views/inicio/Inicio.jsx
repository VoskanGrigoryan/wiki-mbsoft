import React, { useState } from "react";
import TablaFavoritos from "../../components/tablas/TablaFavoritos";
import TablaPopulares from "../../components/tablas/TablaPopulares";
import { Paper } from "@material-ui/core";
import AppButton from "../../components/genericos/AppButton";
import { Link } from "react-router-dom";

const Inicio = () => {
   const [usuarioLogeado, setUsuarioLogeado] = useState(false);

   const abrir = () => {
      setUsuarioLogeado(!usuarioLogeado);
   };

   return (
      <div className="App" style={{ paddingTop: "80px" }}>
         <div className="row mx-0">
            <div className="col-xl-5 col-lg-12 mt-3">
               <h4 onClick={abrir}>Favoritos</h4>

               {usuarioLogeado ? (
                  <TablaFavoritos />
               ) : (
                  <Paper
                     elevation={3}
                     style={{
                        backgroundColor: "#132743",
                     }}
                  >
                     <p
                        className="text-white text-center"
                        style={{ fontWeight: "bold", padding: "5px" }}
                     >
                        No hay ningún thread guardado!
                     </p>
                  </Paper>
               )}
               <hr />
            </div>

            <div className="col-xl-7 col-lg-12 mt-3">
               <h4>Mas visitados</h4>
               <div elevation={3}>
                  <TablaPopulares />
               </div>{" "}
               <Paper elevation={2} className="p-2 mt-4 text-left">
                  <Link
                     to="crear-thread"
                     style={{ textDecoration: "none", color: "black" }}
                  >
                     <AppButton className="text-light">Crear nuevo thread</AppButton>
                  </Link>
               </Paper>
            </div>
         </div>
      </div>
   );
};

export default Inicio;
