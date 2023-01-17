import ItemDetails, { Record } from "../components/item-details";
import { WithSwapiService } from "../hoc-halpers";

const PersonDetails = (props) => {
  console.log(props);
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  };
};
export default WithSwapiService(mapMethodsToProps)(PersonDetails);
