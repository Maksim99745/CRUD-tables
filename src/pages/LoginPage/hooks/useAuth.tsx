import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShowMessage } from '../../../hooks/useShowMessage';
import { HOST } from '../../../models/Host';

const WRONG_PASSWORD_ERROR_CODE = 2004;

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const showMessage = useShowMessage();
  const navigate = useNavigate();

  const authenticate = async (loginData: LoginFormData): Promise<void> => {
    try {
      const response = await fetch(`${HOST}/ru/data/v3/testmethods/docs/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch token');
      }

      const result = await response.json();
      const token = result.data?.token;

      if (result.data.error_code === WRONG_PASSWORD_ERROR_CODE) {
        showMessage('Wrong password', 'error');
      } else if (result.data.token) {
        localStorage.setItem('CRUD-tables', JSON.stringify({ token }));
        showMessage('Successfully logged in');
        navigate('/main');
      }
    } catch (error) {
      showMessage('Error while login in', 'error');
      console.error('Error while login in', error);
    }
  };

  const handleSubmit = async (loginData: LoginFormData) => {
    setIsLoading(true);
    await authenticate(loginData);
    setIsLoading(false);
  };

  return { isLoading, handleSubmit };
};
