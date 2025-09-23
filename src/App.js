import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Auth from './pages/auth/authLayout/Auth';
import Exercise from './pages/exercise/Exercise';

function App() {
  return (
    <Routes>
      {/* Main layout with Home and Exercise */}
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path='/exercise' element={<Exercise />} />

      {/* Auth routes */}
      <Route path='/auth' element={<Auth />} />

      {/* Optional fallback */}
      <Route path='*' element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
