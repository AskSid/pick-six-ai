import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import MockDraft from './components/MockDraft/MockDraft'
import Players from './components/Players'
import About from './components/About'
import Blog from './components/Blog'

import db from "./firebase"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mock-draft' element={<MockDraft />} />
        <Route path='/player-rankings' element={<Players />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
