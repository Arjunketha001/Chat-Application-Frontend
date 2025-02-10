import './App.css';
import { QueryClientProvider } from '@tanstack/react-query';

import { QueryClient } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { AppContextProvider } from './context/AppContextProvider';
import { AppRoutes } from '@/Routes';
function App() {
  const queryClient=new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
      <AppContextProvider>
        <AppRoutes/>
      
      </AppContextProvider>
      <Toaster position="top-center"/>  
    </QueryClientProvider>
    
  );
}

export default App;