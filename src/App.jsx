
import { RouteList } from "./routes/RouteList";
import {  useRoutes } from "react-router-dom";


function App() {
  const element = useRoutes(RouteList);

  return element;

  
}

export default App;
