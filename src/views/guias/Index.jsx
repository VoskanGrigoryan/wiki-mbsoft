import React, { useState } from "react";
import AppButton from "../../components/genericos/AppButton";
import AppInput from "../../components/genericos/AppInput";
import ListaGuias from "./ListaGuias";
import { FormControl, Paper, Select } from "@material-ui/core";

const Index = () => {
   const [buscar, setBuscar] = useState(false);
   return (
      <div className="App min-vh-100">
         <div className="row mx-0 min-vh-100">
            <div className="col-xl-3 col-lg-4" style={{ paddingTop: "100px" }}>
               <div>
                  <h2>Buscador</h2>
                  <hr />
                  <AppInput label="Nombre o descripción general" />
                  <div className="row mt-2">
                     <div className="col-xl-6 mb-2">
                        <AppInput label="Incidencia (opcional)" type="number" />
                     </div>
                     <div className="col-xl-6 mb-2">
                        <AppInput label="ID (opcional)" type="number" />
                     </div>
                  </div>
               </div>
               <div className="mb-2">
                  <FormControl variant="outlined" fullWidth size="small" className="mb-2">
                     <Select native fullWidth>
                        <option value="" disabled>
                           Tecnologia
                        </option>
                        <option>React Js</option>
                        <option>Material-UI</option>
                        <option>Java</option>
                        <option>Python</option>
                        <option>IntelliJ</option>
                        <option>Prime Faces</option>
                     </Select>
                  </FormControl>
                  <FormControl variant="outlined" fullWidth size="small">
                     <Select
                        native
                        // value={paisModificado.continente || ""}
                        fullWidth
                     >
                        <option>Recientes</option> <option>Antiguos</option>
                        <option>Mas visitados</option>
                        <option>Menos visitados</option>
                        {/* {arrayContinentes.map((continente) => (
                              <option value={continente} key={continente}>
                                 {continente}
                              </option>
                           ))} */}
                     </Select>
                  </FormControl>
               </div>
               <AppButton
                  fullWidth
                  className="text-white mb-3"
                  onClick={() => setBuscar(!buscar)}
               >
                  Filtrar
               </AppButton>
            </div>
            <Paper
               elevation={3}
               className="col-xl-9 col-lg-8"
               style={{ backgroundColor: "#88CCF1", paddingTop: "100px" }}
            >
               {buscar ? <ListaGuias /> : null}
            </Paper>
         </div>
      </div>
   );
};

export default Index;
