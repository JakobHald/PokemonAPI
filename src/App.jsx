import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PokemonDetails from "./pages/pokemonDetails/PokemonDetails";


function App() {

  const routes = useRoutes([
    {
      path: "/",
      element : <HomePage></HomePage>
    },
    {
      path: "/pokemon/:name",
      element : <PokemonDetails></PokemonDetails>
    }
  ]);


  return <>
    
    <div>
        {/* GLOBAL NAVIGATION */}
        <div className="globale-page-wrapper">
        
            {routes}
        
        </div>
       {/* GLOBAL FOOTER */}
    </div>
  </>;

}

export default App;
