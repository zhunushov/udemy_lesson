import ItemDetails, { Record } from "../components/item-details";
import { WithSwapiService } from "../hoc-halpers";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarShip,
    getImageUrl: swapiService.getStarshipImage,
  };
};
export default WithSwapiService(mapMethodsToProps)(StarshipDetails);
