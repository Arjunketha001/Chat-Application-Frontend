import { Route, Routes } from 'react-router-dom';
import './App.css';
import { QueryClientProvider } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { Auth } from '@/pages/auth/Auth';
// import { SignupCard } from '@/components/organisms/Auth/SignupCard';
import { Notfound } from '@/pages/Notfound/Notfound';
import { QueryClient } from '@tanstack/react-query';
import { SignupContainer } from '@/components/organisms/Auth/SignupContainer';
import { Toaster } from '@/components/ui/toaster';
import { SigninContainer } from './components/organisms/Auth/SignInContainer';
function App() {
  const queryClient=new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
      <Routes>
      <Route path="/auth/signup" element={<Auth><SignupContainer/></Auth>}/>
      <Route path="/auth/signin" element={<Auth><SigninContainer/></Auth>}/>
      <Route path="/home" element={<Auth>helll00000000</Auth>}/>

      <Route path="/*" element={<Notfound/>}/>  
    </Routes>
    <Toaster position="top-center"/>  
      </QueryClientProvider>
    
  );
}

export default App;