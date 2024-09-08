import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, Link, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../../utils/getTokenFromLocalStorage';

export default function LayoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromLocalStorage();

    if (!token) {
      navigate('/login');
    } else {
      navigate('/main');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('CRUD-tables');
    navigate('/login');
  };

  return (
    <Stack className="h-screen w-full">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
        className="bg-gray-100 sticky top-0 left-0 w-full z-10"
      >
        <Typography variant="h5">CRUD-Tables</Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Stack>

      <Stack className="flex-grow p-4 justify-center items-center w-full">
        <Outlet />
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={2}
        className="bg-gray-100 sticky bottom-0 left-0 w-full"
      >
        <Link
          href="https://github.com/Maksim99745"
          underline="hover"
          rel="noreferrer"
          target="_blank"
          className="flex gap-2"
        >
          <GitHubIcon />
          Maksim99745
        </Link>
      </Stack>
    </Stack>
  );
}
