import { useNavigate } from 'react-router-dom';
import { useShowMessage } from '../../hooks/useShowMessage';
import { HOST } from '../models/Host';

const WRONG_PASSWORD_ERROR_CODE = 2004;

export const useGetToken = () => {
  const showMessage = useShowMessage();
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
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
      const token = result.data?.token;

      if (result.data.error_code === WRONG_PASSWORD_ERROR_CODE) {
        showMessage('Wrong password', 'error');
        return null;
      }

      localStorage.setItem('CRUD-tables', JSON.stringify({ token }));
      showMessage('Successfully logged in');
      navigate('/');
    } catch (error) {
      showMessage('Error while login in', 'error');
      console.error('Error while login in', error);
    }
  };
  return { getToken };
};
