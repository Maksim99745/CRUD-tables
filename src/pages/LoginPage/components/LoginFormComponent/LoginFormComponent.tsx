import { zodResolver } from '@hookform/resolvers/zod';
import LoginIcon from '@mui/icons-material/Login';
import { LoadingButton } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import { FormContainer, PasswordElement, TextFieldElement } from 'react-hook-form-mui';
import { loginFormSchema } from '../../../../core/validation/schemas/loginFormSchema';

export interface LoginFormProps {
  onSubmit: (loginData: LoginFormData) => void;
  isLoading: boolean;
}

export function LoginFormComponent({ onSubmit, isLoading }: LoginFormProps) {
  return (
    <FormContainer<LoginFormData>
      resolver={zodResolver(loginFormSchema)}
      defaultValues={{
        username: '',
        password: '',
      }}
      onSuccess={onSubmit}
      mode="all"
    >
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        <Typography variant="h4" gutterBottom align="center">
          Sign in to CRUD-tables system
        </Typography>
        <TextFieldElement disabled={isLoading} fullWidth name="username" label="Username" required helperText=" " />
        <PasswordElement
          disabled={isLoading}
          fullWidth
          name="password"
          label="Password"
          required
          helperText=" "
          margin="dense"
        />
        <LoadingButton
          type="submit"
          variant="contained"
          color="primary"
          sx={{ maxWidth: '160px', align: 'center', textTransform: 'none' }}
          startIcon={<LoginIcon />}
          loading={isLoading}
        >
          Sign in
        </LoadingButton>
      </Stack>
    </FormContainer>
  );
}
