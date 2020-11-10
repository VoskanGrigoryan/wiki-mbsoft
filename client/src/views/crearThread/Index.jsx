import { FormControl, Select } from "@material-ui/core";
import React from "react";
import ReactDraft from "../../components/genericos/ReactDraft";

const CrearThread = () => {
   const [age, setAge] = React.useState("");

   const handleChange = (event) => {
      setAge(event.target.value);
   };
   return (
      <div className="App" style={{ paddingTop: "80px" }}>
         <div className="row mx-0">
            <div className="col-12">
               <h2 className="my-0">Creación de Thead</h2>
               <p>Porfavor ingresá los datos necesarios que describan el problema</p>
               <hr />
               {/* <ReactDrawft /> */}

               <form>
                  <div className="row">
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <h5>Tecnología a la pertenece el thread</h5>
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
