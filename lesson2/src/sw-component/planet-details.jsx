import ItemDetails, { Record } from "../components/item-details";
import { WithSwapiService } from "../hoc-halpers";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diametr" label="Diametr" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  };
};

export default WithSwapiService(mapMethodsToProps)(PlanetDetails);
