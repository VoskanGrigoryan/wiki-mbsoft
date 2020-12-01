import React from "react";
import { FormControl, Paper, Select } from "@material-ui/core";
import AppButton from "../../components/genericos/AppButton";

const Permiso = () => {
   return (
      <div style={{ paddingTop: "90px" }}>
         <div className="row mx-0">
            <div className="col-xl-6">
               <small>Administración / Permisos</small>
               <Paper className="row mx-0" elevation={5}>
                  <div className="col-12 my-2">
                     <h3>Mis permisos</h3>
                  </div>

                  <hr className="my-0" />
                  <div className="col-xl-6 my-1">
                     <b>Permiso actual:</b> Administrador
                  </div>
                  <div className="col-xl-12 my-1 mb-3">
                     <AppButton className="text-white">Modificar permisos</AppButton>
                  </div>
               </Paper>
               <Paper elevation={5} className="mt-4">
                  <div className="row">
                     <div className="col-4 m-1 mb-2">
                        <h4 className="ml-2 mb-0">Usuario</h4>
                        <FormControl
                           variant="outlined"
                           fullWidth
                           size="small"
                           className="ml-2"
                        >
                           <Select native fullWidth>
                              <option value="" disabled>
                                 Usuario
                              </option>
                              <option>Walter</option>
                              <option>Valen</option>
                              <option>Ezequiel</option>
                              <option>Nico</option>
                           </Select>
                        </FormControl>
                     </div>
                  </div>
               </Paper>
            </div>
         </div>
      </div>
   );
};

export default Permiso;
