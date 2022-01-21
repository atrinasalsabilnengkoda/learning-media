import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Tugas from './pages/Tugas';
import Game1 from './pages/Game1';
import Game2 from './pages/Game2';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tugas' element={<Tugas />} />
          <Route path='/game1' element={<Game1 />} />
          <Route path='/game2' element={<Game2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
