import { useNavigate } from "react-router-dom";
import { PlanetList } from "../../sw-component";

const PlanetsPage = () => {
  const navigate = useNavigate();

  return <PlanetList onItemSelected={(id) => navigate(id)} />;
};

export default PlanetsPage;
