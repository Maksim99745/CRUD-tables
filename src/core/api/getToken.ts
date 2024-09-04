import { redirect } from 'react-router-dom';
import { useShowMessage } from '../../hooks/useShowMessage';
import { HOST } from '../models/Host';

export const useGetToken = () => {
  const showMessage = useShowMessage();
  const getToken = async (loginData: LoginFormData) => {
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

      const { token } = result.data;

      if (!token) {
        showMessage('Wrong password', 'error');
        console.error('Wrong password', result);
      }

      if (token) {
        localStorage.setItem('CRUD-tables', JSON.stringify({ token }));
        showMessage('Successfully logged in');
        redirect('/');
      } else {
        showMessage('Failed to receive token');
      }
    } catch (error) {
      showMessage('Error while login in', 'error');
      console.error('Error while login in', error);
    }
  };
  return { getToken };
};
