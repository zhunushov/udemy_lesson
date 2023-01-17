import { Route, Routes } from "react-router-dom";
import { CardPage, HomePage } from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
  return (
    <main role={"main"} className="container">
      <ShopHeader numItems={3} total={210} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card-page" element={<CardPage />} />
      </Routes>
    </main>
  );
};

export default App;
