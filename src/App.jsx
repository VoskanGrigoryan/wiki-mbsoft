import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
   const store = generateStore();

   return (
      <AuthContextProvider>
         {" "}
         <Provider store={store}>
            <Routes />
         </Provider>
      </AuthContextProvider>
   );
}

export default App;
