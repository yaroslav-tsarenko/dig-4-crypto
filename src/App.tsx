import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import OurStory from "./pages/OurStory";
import ProductListing from "./pages/ProductListing";
import PDP from "./pages/PDP";
import BlogLisitng from "./pages/BlogLisitng";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/our-story":
        title = "";
        metaDescription = "";
        break;
      case "/product-listing":
        title = "";
        metaDescription = "";
        break;
      case "/pdp":
        title = "";
        metaDescription = "";
        break;
      case "/blog-lisitng":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/pdp" element={<PDP />} />
      <Route path="/blog-lisitng" element={<BlogLisitng />} />
    </Routes>
  );
}
export default App;
