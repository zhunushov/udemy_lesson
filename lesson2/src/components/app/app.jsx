import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import ErrorBoundry from "../../error-component/error-boundry";
import SwapiService from "../../services/swapi-services";
import Header from "../header";
import RandomPlanet from "../random-planet";
import { SwapiServiceProvider } from "../swapi-service-context";
import { Route, Routes } from "react-router-dom";
import { PlanetDetails, StarshipDetails } from "../../sw-component";

const App = () => {
  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={new SwapiService()}>
        <Header />
        <RandomPlanet />
        <Routes>
          <Route path="/" element={<h2>Welcome to Star DB</h2>} />
          <Route path="/1" element={<PeoplePage />}>
            <Route path="/1/:id" element={<PeoplePage />} />
          </Route>
          <Route path="/2" element={<PlanetsPage />} />
          <Route path="/3" element={<StarshipsPage />} />
          <Route path="/2/:id" element={<PlanetDetails />} />
          <Route path="/3/:id" element={<StarshipDetails />} />
        </Routes>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
};
export default App;
