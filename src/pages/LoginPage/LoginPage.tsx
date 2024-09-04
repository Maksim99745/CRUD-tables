import { Container, Paper } from '@mui/material';
import { LoginFormComponent } from './components/LoginFormComponent/LoginFormComponent';
import { useAuth } from './hooks/useAuth';

function LoginPage() {
  const { isLoading, handleSubmit } = useAuth();

  return (
    <Paper elevation={3} sx={{ m: 'auto', p: '10vh 2%', maxWidth: '700px' }}>
      <Container maxWidth="sm" className="w-full">
        <LoginFormComponent isLoading={isLoading} onSubmit={handleSubmit} />
      </Container>
    </Paper>
  );
}

export default LoginPage;
