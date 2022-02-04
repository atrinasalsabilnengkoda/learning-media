import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Tugas from './pages/Tugas';
import Game1 from './pages/Game1';
import Game2 from './pages/Game2';
import Game3 from './pages/Game3';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tugas' element={<Tugas />} />
          <Route path='/game1' element={<Game1 />} />
          <Route path='/game2' element={<Game2 />} />
          <Route path='/game3' element={<Game3 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
