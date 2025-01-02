import Checkout from './components/Checkout';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div className="">
        <Router>
          <Routes>

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/" element={<Home />} />

          </Routes>

        </Router>

    </div>
  );
}

export default App;
