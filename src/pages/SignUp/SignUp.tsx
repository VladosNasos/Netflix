import React from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Link
} from '@mui/material';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const [errors, setErrors] = React.useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Very basic NoSQL injection "sanitizer"
  const sanitizeInput = (input: string) => {
    return input.replace(/[\${}"]/g, '');
  };

  // Email validation
  const isValidEmail = (value: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(value).toLowerCase());
  };

  const handleSignUp = () => {
    let newErrors: typeof errors = {};

    const rawEmail = email.trim();
    const rawPassword = password.trim();
    const safeEmail = sanitizeInput(rawEmail);
    const safePassword = sanitizeInput(rawPassword);

    // Basic required fields
    if (!rawEmail) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(rawEmail)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!rawPassword) {
      newErrors.password = 'Password is required';
    } else if (rawPassword.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Check for NoSQL forbidden chars
    if (rawEmail !== safeEmail || rawPassword !== safePassword) {
      newErrors.general =
        'Input contains invalid characters. Please remove any { } " or $.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Sign-up successful with:', { rawEmail, rawPassword });
      // e.g., call your backend to create the account
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: '380px',
          minHeight: '600px',
          borderRadius: '35px',
          bgcolor: '#284345',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 6,
          pb: 6,
          px: 4,
        }}
      >
        {/* Cinemate Logo */}
        <Box
          component="img"
          src="/netflexlogo.svg"
          alt="Cinemate Logo"
          sx={{ width: 240, mb: 8, mt: 8 }}
        />

        {/* "Create an account" heading */}
        <Link
          underline="none"
          variant="body1"
          sx={{
            color: '#1E8E95',
            fontSize: 24,
            fontWeight: 'bold',
            mb: 3,
            WebkitTextStroke: '1px #000',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              color: '#24C0C9',
              textShadow: '0 0 6px #24C0C9',
              WebkitTextStroke: '1px #000',
            },
          }}
        >
          Create an account
        </Link>

        {/* General error message */}
        {errors.general && (
          <Typography
            variant="body2"
            sx={{ color: '#EB685E', mb: 2, fontSize: 16 }}
          >
            {errors.general}
          </Typography>
        )}

        {/* E-mail Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email || ''}
          sx={{
            mb: 3,
            '& .MuiOutlinedInput-root': {
              color: '#FFFFFF',
              '& fieldset': {
                borderColor: '#D5EBE9',
                borderRadius: '10px',
              },
              '&:hover fieldset': {
                borderColor: '#98C4CA',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#98C4CA',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#98C4CA',
            },
            '& .MuiFormHelperText-root': {
              color: '#EB685E',
            },
          }}
        />

        {/* Password Field + toggling eye icons */}
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(errors.password)}
          helperText={errors.password || ''}
          sx={{
            mb: 4,
            '& .MuiOutlinedInput-root': {
              color: '#FFFFFF',
              '& fieldset': {
                borderColor: '#D5EBE9',
                borderRadius: '10px',
              },
              '&:hover fieldset': {
                borderColor: '#98C4CA',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#98C4CA',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#98C4CA',
            },
            '& .MuiFormHelperText-root': {
              color: '#EB685E',
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleTogglePassword}
                  edge="end"
                  disableRipple
                  disableFocusRipple
                  sx={{
                    color: '#FFFFFF',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={showPassword ? '/svg/closedeye.svg' : '/svg/eye.svg'}
                    alt="Toggle Password"
                    sx={{ width: 24, height: 24 }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Sign-up Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleSignUp}
          sx={{
            bgcolor: '#1E8E95',
            color: '#FFFFFF',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: '15px',
            py: 1.5,
            '&:hover': {
              bgcolor: '#24C0C9',
            },
            mb: 10,
          }}
        >
          Sign up
        </Button>

        {/* Footer text: already have an account? Log in */}
        <Typography variant="body2" sx={{ color: '#FFFFFF', fontSize: 16 }}>
          Already have an account?{' '}
          <Link
            href="/login"
            underline="none"
            sx={{
              color: '#46C2D3',
              fontWeight: 'bold',
              '&:hover': {
                color: '#24C0C9',
                textShadow: '0 0 6px #24C0C9',
              },
              fontSize: 16,
            }}
          >
            Log in
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUpPage;
