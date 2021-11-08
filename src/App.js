import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/index.js";
import About from "./pages/about.js";
import Portfolio from "./pages/portfolio.js";
import Contact from "./pages/contact.js";
import NotFound from "./pages/404.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
