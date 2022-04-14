import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Tugas from './pages/Tugas';
import Toko from './pages/Toko';
import Profil from './pages/Profil';
import Game1 from './pages/Game1';
import Game2 from './pages/Game2';
import Game3 from './pages/Game3';
import Game4 from './pages/Game4';
import Page404 from './pages/Page404';
import AuthService from './services/auth.service';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          {currentUser && <Route path='/dashboard' element={<Home />} />}
          {currentUser && <Route path='/tugas' element={<Tugas />} />}
          {currentUser && <Route path='/toko' element={<Toko />} />}
          {currentUser && <Route path='/profil' element={<Profil />} />}
          {currentUser && <Route path='/game1' element={<Game1 />} />}
          {currentUser && <Route path='/game2' element={<Game2 />} />}
          {currentUser && <Route path='/game3' element={<Game3 />} />}
          {currentUser && <Route path='/game4' element={<Game4 />} />}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
