import { StarshipList } from "../../sw-component";
import { useNavigate } from "react-router-dom";

const StarshipsPage = () => {
  const navigate = useNavigate();
  return <StarshipList onItemSelected={(id) => navigate(id)} />;
};

export default StarshipsPage;
