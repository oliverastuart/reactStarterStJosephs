import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./controller/routes/RoutesComponent";

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent></RoutesComponent>
    </BrowserRouter>
  );
}

export default App;
