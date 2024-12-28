import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the AuthContext and AuthContextProvider (assuming you have exported the provider correctly)
import { AuthContextProvider } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Wrap your application with AuthContextProvider */}
      <AuthContextProvider>
        <ToastContainer
          theme='dark'
          position='top-right'
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
