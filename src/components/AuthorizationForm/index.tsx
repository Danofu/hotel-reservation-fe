import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { FC, FormEvent } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const AuthorizationForm: FC = () => {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Stack component="form" noValidate onSubmit={submitHandler} spacing={3}>
      <TextField
        autoComplete="email"
        autoFocus
        color="warning"
        fullWidth
        label="Email"
        margin="none"
        name="email"
        required
        type="email"
      />
      <TextField
        autoComplete="current-password"
        color="warning"
        fullWidth
        label="Password"
        margin="none"
        name="password"
        required
        type="password"
      />
      <FormControlLabel
        control={<Checkbox color="warning" sx={{ mr: -1 }} value="remember" />}
        disabled
        label="Remember me"
        labelPlacement="start"
      />
      <Button color="warning" fullWidth type="submit" variant="contained">
        Sign In
      </Button>
    </Stack>
  );
};

export default AuthorizationForm;
