import { createContext } from "react";
import SwapiService from "../../services/swapi-services";

const { Consumer: SwapiServiceConsumer, Provider: SwapiServiceProvider } =
  createContext(new SwapiService());
export { SwapiServiceProvider, SwapiServiceConsumer };
