import React, { useState } from "react";
import AppInput from "../../genericos/AppInput";
import AppButton from "../../genericos/AppButton";
import swal from "sweetalert";

// import axios from "axios";

const Register = ({ setActivePage, handleModal }) => {
   const [nuevoUsuario, setNuevoUsuario] = useState({
      usuario: "",
      correo: "",
      contrasena: "",
      reContrasena: "",
   });

   const handleChange = (e) => {
      setNuevoUsuario({
         ...nuevoUsuario,
         [e.target.name]: e.target.value,
      });
   };

   const añadirUsuario = (e) => {
      e.preventDefault();
      if (
         nuevoUsuario.usuario.length < 3 ||
         nuevoUsuario.correo.length < 3 ||
         nuevoUsuario.contrasena.length < 3 ||
         nuevoUsuario.contrasena !== nuevoUsuario.reContrasena
      ) {
         swal("Valores Incorrectos!", "Porfavor revisa los inputs", "error");
         return;
      }
      // axios.post("http://localhost:3001/api/insert", { usuario: nuevoUsuario });

      swal("Usuario registrado!", "", "success");
      setActivePage(1);
      setNuevoUsuario({
         usuario: "",
         correo: "",
         contrasena: "",
         reContrasena: "",
      });
   };

   return (
      <div className="row mx-0 mb-3 mt-4 mx-3 text-center">
         <div className="col-12">
            <h1>Registro</h1>
            <p>Crea tu propia cuenta para tener acceso exclusivo</p>
         </div>

         <div className="col-12">
            <hr className="mt-0 mb-4" />
            <form>
               <AppInput
                  className="my-1"
                  label="Usuario"
                  value={nuevoUsuario.usuario}
                  name="usuario"
                  onChange={handleChange}
               />
               <AppInput
                  className="my-1"
                  value={nuevoUsuario.correo}
                  label="Correo"
                  name="correo"
                  onChange={handleChange}
               />
               <AppInput
                  className="my-1"
                  value={nuevoUsuario.contrasena}
                  label="Contraseña"
                  name="contrasena"
                  type="password"
                  onChange={handleChange}
               />
               <AppInput
                  className="my-1"
                  value={nuevoUsuario.reContrasena}
                  name="reContrasena"
                  label="Confirmar contraseña"
                  type="password"
                  onChange={handleChange}
               />

               <div className="text-right mt-3">
                  <AppButton className="mx-1" onClick={añadirUsuario}>
                     Registrar
                  </AppButton>
                  <AppButton className="mx-1" onClick={handleModal}>
                     Cancelar
                  </AppButton>
                  <hr />
               </div>
               <div>
                  <p>
                     Ya tenes una cuenta existente? Entra{" "}
                     <b onClick={() => setActivePage(1)} className="hvr-grow mb-1">
                        acá
                     </b>
                  </p>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;
