import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Details from "./Routes/Detail";
import DentistsContextProvider from "./contexts/dentists.contexts";
import NotFound from "./Routes/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<DentistsContextProvider />}>
          <Route path="/home" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
        </Route>
        <Route path="/details/:id" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
