import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Link,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUpOptionsPage: React.FC = () => {
  const [optOut, setOptOut] = React.useState(false);
  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    // Navigate to /signup/google
    navigate('/signup/google');
  };

  const handleFacebookSignUp = () => {
    // Navigate to /signup/facebook
    navigate('/signup/facebook');
  };

  const handleEmailSignUp = () => {
    // Navigate to /signup
    navigate('/signup');
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
        {/* "Create an account" heading */}
        <Typography
          variant="body1"
          sx={{
            color: '#1E8E95',
            fontSize: 30,
            fontWeight: 'bold',
            mb: 8,
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
        </Typography>

        {/* Continue with Google */}
        <Button
          variant="outlined"
          onClick={handleGoogleSignUp}
          fullWidth
          startIcon={
            <Box
              component="img"
              src="/svg/google.svg"
              alt="Google Icon"
              sx={{ width: 24, height: 24 }}
            />
          }
          sx={{
            color: '#c1dad9',
            borderColor: '#c1dad9',
            mb: 3,
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              borderColor: '#24C0C9',
              color: '#24C0C9',
            },
          }}
        >
          Continue with Google
        </Button>

        {/* Continue with Facebook */}
        <Button
          variant="outlined"
          onClick={handleFacebookSignUp}
          fullWidth
          startIcon={
            <Box
              component="img"
              src="/svg/facebook.svg"
              alt="Facebook Icon"
              sx={{ width: 24, height: 24 }}
            />
          }
          sx={{
            color: '#c1dad9',
            borderColor: '#c1dad9',
            mb: 3,
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              borderColor: '#24C0C9',
              color: '#24C0C9',
            },
          }}
        >
          Continue with Facebook
        </Button>

        {/* Continue with E-mail */}
        <Button
          variant="outlined"
          onClick={handleEmailSignUp}
          fullWidth
          startIcon={
            <Box
              component="img"
              src="/svg/email.svg"
              alt="Email Icon"
              sx={{ width: 24, height: 24 }}
            />
          }
          sx={{
            color: '#c1dad9',
            borderColor: '#c1dad9',
            mb: 4,
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              borderColor: '#24C0C9',
              color: '#24C0C9',
            },
          }}
        >
          Continue with E-mail
        </Button>

        {/* Opt-out of promotions */}
        <FormControlLabel
          control={
            <Checkbox
              checked={optOut}
              onChange={() => setOptOut(!optOut)}
              sx={{
                color: '#c1dad9',
                '&.Mui-checked': {
                  color: '#24C0C9',
                },
              }}
            />
          }
          label={
            <Typography
              sx={{
                color: '#c1dad9',
                fontSize: 14,
                whiteSpace: 'pre-line',
              }}
            >
              I do not wish to receive news and{'\n'}promotions from Cinemate by email.
            </Typography>
          }
          sx={{ mb: 3 }}
        />

        {/* Disclaimer */}
        <Typography
          variant="body2"
          sx={{ color: '#1E8E95', fontSize: 14, mb: 8 }}
        >
          By continuing, you agree to IllustrationStock Company’s{' '}
          <Link
            href="#"
            sx={{
              color: '#46C2D3',
              textDecoration: 'underline',
              '&:hover': { color: '#24C0C9' },
            }}
          >
            Terms of Use
          </Link>{' '}
          and{' '}
          <Link
            href="#"
            sx={{
              color: '#46C2D3',
              textDecoration: 'underline',
              '&:hover': { color: '#24C0C9' },
            }}
          >
            Privacy Policy
          </Link>
          .
        </Typography>

        {/* Already have an account? Log in */}
        <Typography variant="body2" sx={{ color: '#c1dad9', fontSize: 16 }}>
          Already have an account?{' '}
          {/* Use a react-router Link or plain anchor */}
          <Link
            href="/login"
            underline="none"
            sx={{
              color: '#24C0C9',
              fontWeight: 'bold',
              '&:hover': {
                textShadow: '0 0 6px #24C0C9',
              },
            }}
          >
            Log in
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUpOptionsPage;
