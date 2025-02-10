
// mutation is for making changes in server side
// query is for fetching data from server side
import { useMutation } from '@tanstack/react-query';

import { signUpRequest } from '@/apis/auth';

// wherever in ui ,u can call signupMutation function to make a request to server
export const useSignup = () => {
    const { isPending, isSuccess, error, mutate: signupMutation } = useMutation({
        mutationFn: signUpRequest,
        onSuccess: (data) => {
            console.log('Scuccessfuilly signed up', data);
        },
        onError: (error) => {
            console.error('Failed to sign up', error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    };
};