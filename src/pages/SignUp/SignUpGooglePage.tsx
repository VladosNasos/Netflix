import React from 'react';
import { Box, Paper, Typography, Link } from '@mui/material';

const SignUpGooglePage: React.FC = () => {
  // In a real app, these might come from Google OAuth
  const userName = 'Tyler Durden';
  const userEmail = 'TylerDurden@gmail.com';
  const userAvatar = '/images/tyler_durden.jpg'; // Or an actual avatar URL

  const handleContinue = () => {
    // Complete sign-up flow with Google
    console.log('Continue as', userName);
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
        {/* Main heading */}
        <Typography
          variant="body1"
          sx={{
            color: '#1E8E95',
            fontSize: 24,
            fontWeight: 'bold',
            mb: 1,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              color: '#24C0C9',
              WebkitTextStroke: '1px #000',
            },
          }}
        >
          Log in
        </Typography>

        {/* Subheading */}
        <Typography
          variant="body2"
          sx={{
            color: '#1E8E95',
            fontSize: 16,
            mb: 4,
          }}
        >
          Welcome back!
        </Typography>

        {/* Large user avatar in the middle */}
        <Box
          component="img"
          src={userAvatar}
          alt="User Avatar"
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            objectFit: 'cover',
            mb: 2,
          }}
        />

        {/* User email */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 4,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#c1dad9',
              fontSize: 16,
              mr: 1,
            }}
          >
            {userEmail}
          </Typography>
          {/* If you want a Google icon here, add it */}
        </Box>

        {/* "Continue as Tyler Durden" box */}
        <Box
          onClick={handleContinue}
          sx={{
            width: '100%',
            border: '1px solid #1E8E95',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            px: 2,
            py: 2,
            mb: 6,
            '&:hover': {
              borderColor: '#24C0C9',
            },
          }}
        >
          {/* Left side: smaller avatar + text */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={userAvatar}
              alt="User Avatar"
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                objectFit: 'cover',
                mr: 2,
              }}
            />
            <Box sx={{ textAlign: 'left' }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#c1dad9',
                  fontWeight: 'bold',
                  fontSize: 14,
                  mb: 0.5,
                }}
              >
                Continue as {userName}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#c1dad9',
                  fontSize: 12,
                }}
              >
                {userEmail}
              </Typography>
            </Box>
          </Box>

          {/* Right side: Google icon */}
          <Box
            component="img"
            src="/svg/google.svg"
            alt="Google Icon"
            sx={{ width: 24, height: 24, ml: 2 }}
          />
        </Box>

        {/* "Not you? Use another account" */}
        <Typography
          variant="body2"
          sx={{
            color: '#c1dad9',
            fontSize: 20,
            mb: 2,
            mt: 12,
          }}
        >
          Not you?{' '}
          <Link
            href="#"
            underline="none"
            sx={{
              color: '#24C0C9',
              '&:hover': {
                textShadow: '0 0 6px #24C0C9',
              },
            }}
          >
            Use another account
          </Link>
        </Typography>

        {/* Footer: "Don't you have an account? Sign up" */}
        <Typography variant="body2" sx={{ color: '#c1dad9', fontSize: 20 }}>
          Don’t you have an account?{' '}
          <Link
            href="/signup"
            underline="none"
            sx={{
              color: '#24C0C9',
              fontWeight: 'bold',
              fontSize: 20,
              '&:hover': {
                textShadow: '0 0 6px #24C0C9',
              },
            }}
          >
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUpGooglePage;
