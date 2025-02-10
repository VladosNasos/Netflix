// src/pages/Home/Home.tsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to Cinemate</h1>
      <p className="mt-2">Your favorite movies and shows in one place.</p>
      <Link to="/signup">
        <button className="mt-6 px-6 py-3 bg-teal-500 rounded-md text-white font-bold">
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default Home;
