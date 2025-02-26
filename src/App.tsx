// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import LoginPage from './pages/Login/LoginPage';
import SignUpOptionsPage from './pages/SignUp/SignUpOptionsPage';
import SignUpGooglePage from './pages/SignUp/SignUpGooglePage';
import SignUpFacebookPage from './pages/SignUp/SignUpFacebookPage';

function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* Email/password sign-up */}
      <Route path="/signup" element={<SignUp />} />

      {/* Login page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Options: Google, Facebook, E-mail */}
      <Route path="/signupOptions" element={<SignUpOptionsPage />} />

      {/* Google sign-up flow */}
      <Route path="/signup/google" element={<SignUpGooglePage />} />

      {/* Facebook sign-up flow */}
      <Route path="/signup/facebook" element={<SignUpFacebookPage />} />
    </Routes>
  );
}

export default App;
