import { Routes, Route } from "react-router-dom";
import History from './History';
import Home from './Home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        </Routes>
    </div>
  );
}

export default App;
