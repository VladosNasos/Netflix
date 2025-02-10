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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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

        {/* "Create an account" link with black stroke and a hover glow */}
        <Link
          href="/registration"
          underline="none"
          variant="body1"
          sx={{
            color: '#1E8E95',
            fontSize: 24,
            fontWeight: 'bold',
            mb: 5,
            // Black outline using text-stroke
            WebkitTextStroke: '1px #000',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              color: '#24C0C9',
              // Keep black stroke and add glow
              WebkitTextStroke: '1px #000',
              textShadow: '0 0 6px #24C0C9',
            },
          }}
        >
          Create an account
        </Link>

        {/* E-mail */}
        <TextField
          fullWidth
          variant="outlined"
          label="E-mail"
          type="email"
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
          }}
        />

        {/* Password + toggling eye icons (no hover/ripple effect) */}
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type={showPassword ? 'text' : 'password'}
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
                    // Remove any default hover background
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

        {/* Sign-up button */}
        <Button
          variant="contained"
          fullWidth
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
            mb: 15,
          }}
        >
          Sign up
        </Button>

        {/* Footer text */}
        <Typography variant="body2" sx={{ color: '#FFFFFF', fontSize: 16, mb: 5 }}>
          Already have an account?{' '}
          <Link
            href="/login"
            underline="none"
            sx={{
              color: '#46C2D3',
              fontWeight: 'bold',
              '&:hover': {
                color: '#24C0C9',
                // Keep black stroke and add glow
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
