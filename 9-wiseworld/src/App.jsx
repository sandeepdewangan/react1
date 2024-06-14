import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import CityDetails from "./components/CityDetails";
import Forms from "./components/Forms";
import { CitiesProvider } from "./context/CitiesContext";

function App() {
  return (
    // Provide the Cities values to child.
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            {/* Nested Routes, index=> default routes */}

            {/* Navigate will redirected to cites /app/cities */}
            {/* We cannot go back with Navigate component, add replace */}
            {/* <Route index element={<Navigate to="cities" />} /> */}
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<CityDetails />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Forms />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
