import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navbar";
import Home from './pages/Home';
import Games from "./pages/games";
import News from "./pages/news";
import Contact from "./pages/contact";

export default function App() {
  return (
    <Router>
      <Navigation />
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
    </Router>
  );
}