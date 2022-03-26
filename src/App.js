import "./App.css";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Home from "./components/Home";
import Technology from "./components/Technology";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path="crew" element={<Crew/>}/>
          <Route path="destination" element={<Destination/>}/>
          <Route path="technology" element={<Technology/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
