import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Button } from '@/components/ui/button';
import { Auth } from './pages/auth/Auth';
import { SignInCard } from '@/components/organisms/Auth/SignInCard';
import { SignupCard } from '@/components/organisms/Auth/SignupCard';
function App() {

  return (
    <Routes>
      <Route path="/auth/signup" element={<Auth><SignupCard/></Auth>}/>
      <Route path="/auth/signin" element={<Auth><SignInCard/></Auth>}/>
    </Routes>
  );
}

export default App;