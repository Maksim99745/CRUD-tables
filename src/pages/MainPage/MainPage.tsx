import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('CRUD-tables');

    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h2>CRUD-Tables</h2>
    </div>
  );
}
