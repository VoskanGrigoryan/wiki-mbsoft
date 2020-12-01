import React from "react";
import Paper from "@material-ui/core/Paper";
import { DropzoneArea } from "material-ui-dropzone";

const Usuarios = () => {
   return (
      <div style={{ paddingTop: "90px" }}>
         <div className="row mx-0">
            <div className="col-xl-6">
               <small>Administración / Mi perfil</small>
               <Paper className="row mx-0" elevation={5}>
                  <div className="col-12 my-2">
                     <h3>Mi perfil</h3>
                  </div>

                  <hr className="my-0" />
                  <div className="col-xl-6 my-1">
                     <b>Rol:</b> Desarrollador Front-end
                  </div>
                  <div className="col-xl-6 my-1">
                     <b>Usuario:</b> Vogrigoryan
                  </div>
                  <div className="col-xl-6 my-1">
                     <b>Nombre usuario:</b> Voskan Grigoryan
                  </div>

                  <div className="col-xl-6 my-1 mb-3">
                     <b>Nivel de permiso:</b> Administrador
                  </div>
               </Paper>
            </div>
         </div>
      </div>
   );
};

export default Usuarios;
