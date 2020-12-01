import React, { useState } from "react";
import AppInput from "../../genericos/AppInput";
import AppButton from "../../genericos/AppButton";
import swal from "sweetalert";
// import Axios from "axios";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Login = ({ setActivePage, handleLogin }) => {
   const history = useHistory();
   // //hijos del usecontext
   const { setLogeado, logeado } = useAuthContext();

   const [inicioSesion, setInicioSesion] = useState({
      usuario: "",
      contrasena: "",
   });

   const handleLoginUs = (e) => {
      setInicioSesion({
         ...inicioSesion,
         [e.target.name]: e.target.value,
      });
   };

   const pushApp = () => {
      history.push("/");
   };

   const logearUsuario = (e) => {
      e.preventDefault();
      if (inicioSesion.usuario.length === 0 || inicioSesion.contrasena.length === 0) {
         swal("Valores Incorrectos!", "Porfavor completa los campos", "error");
         return;
      }
      // Axios.post("http://localhost:3001/api/usuario", {
      //    inicioSesion: inicioSesion,
      // }).then((response) => {
      //    setUsuarioIniciado(response.data);
      // });
      handleLogin();
      setLogeado(true);
      pushApp();
   };

   return (
      <div className="row mx-0  mt-4 mx-3 text-center">
         <div className="col-12">
            <h1>Login</h1>
            <p>Inicia sesión para crear, modificar y guardar threads</p>
         </div>

         <div className="col-12">
            <hr className="mt-0 mb-4" />
            <form>
               <AppInput
                  className="my-1"
                  label="Usuario"
                  name="usuario"
                  type="text"
                  onChange={handleLoginUs}
               />
               <AppInput
                  className="my-1"
                  label="Contraseña"
                  name="contrasena"
                  type="password"
                  onChange={handleLoginUs}
               />

               <div className="text-right mt-3">
                  <AppButton className="mx-1 text-light" onClick={logearUsuario}>
                     Ingresar
                  </AppButton>
                  <AppButton className="mx-1 text-light" onClick={handleLogin}>
                     Cancelar
                  </AppButton>
                  <hr />
               </div>
               <div>
                  <p>
                     Aun no tenes una cuenta? Entra{" "}
                     <b onClick={() => setActivePage(1)} className="hvr-grow mb-1">
                        {" "}
                        acá
                     </b>
                  </p>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
