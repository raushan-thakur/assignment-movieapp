import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import SearchResults from "./components/SearchResults";
import MovieDetails from "./components/MovieDetails";
import Error from './components/Error';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
