import ItemList from "../components/item-list";
import {
  WithSwapiService,
  WithData,
  WithChildFunction,
  compose,
} from "../hoc-halpers";

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};
const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarship,
  };
};
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const PersonList = compose(
  WithSwapiService(mapPersonMethodsToProps),
  WithData,
  WithChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  WithSwapiService(mapPlanetMethodsToProps),
  WithData,
  WithChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  WithSwapiService(mapStarshipMethodsToProps),
  WithData,
  WithChildFunction(renderModelAndName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
