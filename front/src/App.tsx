import React from 'react';
import {
    BrowserRouter, Routes, Route, Navigate,
} from "react-router-dom";
import SignupPage from "./pages/signup/Signup.page";
import MainPage from "./pages/signup/Main.page";
import {UserProvider} from "./context/User";
import FacebookLoginPage from "./pages/facebook/Signin.page";

function App() {
  return (
      <UserProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Navigate to="/signin" />} />
                  <Route path="/signin" element={<FacebookLoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/main" element={<MainPage />}/>
              </Routes>
          </BrowserRouter>
      </UserProvider>
  );
}

export default App;
