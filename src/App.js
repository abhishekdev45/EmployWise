import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./pages/LoginPage";
import UsersPage from './pages/UsersPage';
import EditUserPage from './pages/EditUserPage';  
import PrivateRoute from "./components/PrivateRoute";
import MainLayout from './layouts/MainLayout'; 

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route 
          path="/users" 
          element={
            <PrivateRoute>
              <MainLayout>
                <UsersPage />
              </MainLayout>
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/edit-user/:id" 
          element={
            <PrivateRoute>
              <MainLayout>
                <EditUserPage />  
              </MainLayout>
            </PrivateRoute>
          } 
        />
      </Routes>
    </>
  );
}

export default App;
