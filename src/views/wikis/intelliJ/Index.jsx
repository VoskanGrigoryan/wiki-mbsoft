import React from "react";
import { Link } from "react-router-dom";
import { Paper, Select, FormControl } from "@material-ui/core";
import logoIntelliJ from "../../../images/logos/logoIntelliJ.png";
import AppButton from "../../../components/genericos/AppButton";
import CardSolucion from "../../../components/CardSolucion";

const Index = () => {
   return (
      <div className="App vh-100" style={{ paddingTop: "80px" }}>
         <div className="row mx-0">
            <div className="col-12">
               <h4
                  className="rounded text-center text-light"
                  style={{ backgroundColor: "#343434" }}
               >
                  IntelliJ{" "}
                  <img
                     className="pb-1"
                     src={logoIntelliJ}
                     alt="logo"
                     style={{ height: "25px" }}
                  />
               </h4>
            </div>
            <div className="col-12 row mt-1 mx-0">
               <div className="col-xl-3 col-lg-4 col-md-12 my-2 pl-0">
                  <Paper className="p-2" elevation={3}>
                     <div>
                        <h3>Buscador</h3>
                        <div className="input-group mb-3">
                           <input
                              type="text"
                              className="form-control"
                              placeholder="Busqueda por nombre?"
                           />
                           <div className="input-group-append">
                              <button className="input-group-text">Filtrar</button>
                           </div>
                        </div>
                     </div>
                     <div className="my-2">
                        <FormControl variant="outlined" fullWidth size="small">
                           <Select
                              native
                              // value={paisModificado.continente || ""}
                              fullWidth
                           >
                              <option>Recientes</option>
                              <option>Mas visitados</option>
                              <option>Menos visitados</option>
                              <option>Antiguos</option>
                              {/* {arrayContinentes.map((continente) => (
                              <option value={continente} key={continente}>
                                 {continente}
                              </option>
                           ))} */}
                           </Select>
                        </FormControl>
                     </div>
                     <hr />
                     <div>
                        <Link
                           to="crear-thread"
                           style={{ textDecoration: "none", color: "black" }}
                        >
                           {" "}
                           <AppButton fullWidth className="text-light">
                              Crear thread
                           </AppButton>
                        </Link>
                     </div>
                  </Paper>
               </div>
               <div className="col-xl-9 col-lg-8 col-md-12 my-1" elevation={3}>
                  <div className="row">
                     <div className="col-xl-3 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-3 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Index;
