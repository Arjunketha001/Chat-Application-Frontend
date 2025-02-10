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
      <Toaster position="top-center"/>  
    </AppContextProvider>
      </QueryClientProvider>
    
  );
}

export default App;