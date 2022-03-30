import "./App.css";
import { Back } from "./components/Back/Back";
import { Cards } from "./components/Card/Cards";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header w-full bg-indigo-800 shadow-2xl text-white">
      <h1 className=" py-10 text-center text-4xl">
        HEARTH STONE CARD SEARCHER
      </h1>
      <div className="text-center">
        <Link className="mx-5" to="cards">
          cards
        </Link>
        <Link className="mx-5" to="cards?mockdata=1">
          cards/mock
        </Link>
        <Link className="mx-5" to="back">
          back
        </Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <div className="App bg-indigo-600">
        <Routes>
          <Route index element={<Cards />} />
          <Route path="cards" element={<Cards />} />
          <Route path="back" element={<Back />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;