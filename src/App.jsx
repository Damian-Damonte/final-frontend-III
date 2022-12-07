import { Route, Routes } from "react-router-dom";
import {  Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Details from "./Routes/Detail"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
