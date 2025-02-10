import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Button } from '@/components/ui/button';
import { Auth } from './pages/auth/Auth';
function App() {

  return (
    <Routes>
      <Route path="/auth" element={<Auth/>}></Route>
    </Routes>
  );
}

export default App;