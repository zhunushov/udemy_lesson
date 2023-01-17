import { WithRouter } from "../../hoc-halpers";
import { PersonDetails, PersonList } from "../../sw-component";
import Row from "../row";

const PeoplePage = ({ router }) => {
  const {
    navigate,
    params: { id },
  } = router;

  return (
    <Row
      right={<PersonDetails itemId={id} />}
      left={<PersonList onItemSelected={(id) => navigate(id)} />}
    />
  );
};

export default WithRouter(PeoplePage);
