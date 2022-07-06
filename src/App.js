import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { RatingProvider } from "./contexts/rating.context";
import "./App.css";



// Pages
import RatingApp from "../src/pages/RatingApp";
import RatingThankYou from "./pages/RatingThankYou";

console.log(RatingProvider)

function App() {
  return (
    <Router>
      <RatingProvider>
        <Routes>
          <Route path="/" element={<RatingApp />} />
          <Route path="ThankYou" element={<RatingThankYou />} />
        </Routes>
      </RatingProvider>
    </Router>
  );
}

export default App;
