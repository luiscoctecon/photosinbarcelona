import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ProductPhotography from "./pages/ProductPhotography";
import PersonalBrand from "./pages/PersonalBrand";
import Events from "./pages/Events";
import RealEstate from "./pages/RealEstate";
import Couples from "./pages/Couples";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "product-photography", Component: ProductPhotography },
      { path: "personal-brand", Component: PersonalBrand },
      { path: "events", Component: Events },
      { path: "real-estate", Component: RealEstate },
      { path: "couples", Component: Couples },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
