import React, { useState } from "react";
import TablaFavoritos from "../../components/tablas/TablaFavoritos";
import TablaPopulares from "../../components/tablas/TablaPopulares";
import { Paper } from "@material-ui/core";

const Inicio = () => {
   const [usuarioLogeado, setUsuarioLogeado] = useState(false);

   const abrir = () => {
      setUsuarioLogeado(!usuarioLogeado);
   };

   return (
      <div className="App" style={{ paddingTop: "80px" }}>
         <div className="row mx-0">
            <div className="col-xl-5 col-lg-12">
               <h4 onClick={abrir}>Favoritos (haceme click)</h4>

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
                        Es necesario acceder a una cuenta!
                     </p>
                  </Paper>
               )}
            </div>
            <div className="col-xl-7 col-lg-12">
               <h4>Mas visitados</h4>
               <div elevation={3}>
                  <TablaPopulares />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Inicio;
