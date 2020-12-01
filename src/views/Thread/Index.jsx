import { Button, FormControl, Select } from "@material-ui/core";
import React from "react";
import ReactDraft from "../../components/genericos/ReactDraft";
import AppButton from "../../components/genericos/AppButton";

const CrearThread = () => {
   const [age, setAge] = React.useState("");

   const handleChange = (event) => {
      setAge(event.target.value);
   };
   return (
      <div className="App" style={{ paddingTop: "80px" }}>
         <div className="row mx-0">
            <div className="col-12">
               <h2 className="my-0">Creación de Thread</h2>
               <p>Porfavor ingresá los datos necesarios que describan el problema</p>
               <hr />
               {/* <ReactDrawft /> */}

               <form>
                  <div className="row">
                     <div className="col-xl-6">
                        <h5>Tecnología a la pertenece el thread</h5>
                        <div className="row">
                           <div className="col-xl-6 mt-3">
                              <FormControl variant="outlined" fullWidth size="small">
                                 <Select
                                    value={age}
                                    native
                                    onChange={handleChange}
                                    // value={paisModificado.continente || ""}
                                    fullWidth
                                 >
                                    <option value="" disabled>
                                       Tecnologia
                                    </option>
                                    <option value="primefaces">Prime Faces</option>
                                    <option value="reactjs">React Js</option>
                                    <option value="materialui">Material-UI</option>
                                    <option value="java">Java</option>
                                    <option value="bootstrap">Bootstrap</option>
                                    <option value="intellij">IntelliJ</option>
                                    {/* {arrayContinentes.map((continente) => (
                              <option value={continente} key={continente}>
                                 {continente}
                              </option>
                           ))} */}
                                 </Select>
                              </FormControl>
                           </div>
                           <div className="ml-3 mt-3">
                              <Button
                                 variant="contained"
                                 color="primary"
                                 className="text-white"
                              >
                                 Agregar thread
                              </Button>
                           </div>
                        </div>
                     </div>
                     <div className="col-12">
                        <ReactDraft />
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default CrearThread;
