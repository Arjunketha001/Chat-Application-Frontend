
import combineContext from '@/utlis/combineContext';
import { AuthContextProvider } from './AuthContext';

export const AppContextProvider = combineContext(
    AuthContextProvider,
); 