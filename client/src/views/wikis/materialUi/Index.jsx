import React from "react";
import logoMaterialUI from "../../../images/logos/logoMaterialUI.png";
import AppInput from "../../../components/genericos/AppInput";
import AppButton from "../../../components/genericos/AppButton";
import { Paper, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import CardSolucion from "../../../components/CardSolucion";
import { Link } from "react-router-dom";

const Index = () => {
   return (
      <div className="App container-fluid h-100" style={{ paddingTop: "74px" }}>
         <div className="row mx-0">
            <div className="col-12">
               <h4
                  className="rounded text-center text-light py-1"
                  style={{ backgroundColor: "#1976d2" }}
               >
                  Material-UI{" "}
                  <img
                     className="pb-1"
                     src={logoMaterialUI}
                     alt="logo"
                     style={{ height: "30px" }}
                  />
               </h4>
            </div>
            <div className="col-12 row mx-0 mt-4">
               <div className="col-xl-3 col-lg-4 col-md-12">
                  <div>
                     <h2>Buscador</h2>
                     <AppInput label="Nombre del tema" />
                     <FormGroup row>
                        <FormControlLabel
                           control={<Checkbox name="checkedA" color="primary" />}
                           label="recientes"
                        />
                        <FormControlLabel
                           control={
                              <Checkbox name="checkedA" style={{ color: "#05F71F" }} />
                           }
                           label="mayor puntaje"
                           color="primary"
                        />
                        <FormControlLabel
                           control={
                              <Checkbox name="checkedA" style={{ color: "#F77A05" }} />
                           }
                           label="menor puntaje"
                        />
                     </FormGroup>
                     <AppButton>Filtrar</AppButton>
                  </div>
                  <hr />
                  <div>
                     <Link
                        to="crear-thread"
                        style={{ textDecoration: "none", color: "black" }}
                     >
                        {" "}
                        <AppButton fullWidth>Crear thread</AppButton>
                     </Link>
                  </div>
               </div>
               <Paper className="col-xl-9 col-lg-8 col-md-12 mt-4 py-2" elevation={3}>
                  <div className="row">
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                     <div className="col-xl-4 col-lg-6 py-1">
                        <CardSolucion />
                     </div>{" "}
                  </div>
               </Paper>
            </div>
         </div>
      </div>
   );
};

export default Index;
