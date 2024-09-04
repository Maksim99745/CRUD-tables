import { useState } from 'react';
import { useGetToken } from '../../../core/api/getToken';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useGetToken();

  const handleSubmit = (loginData: LoginFormData) => {
    setIsLoading(true);
    getToken(loginData);
    setIsLoading(false);
  };

  return { isLoading, handleSubmit };
};
