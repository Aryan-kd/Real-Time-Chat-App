import React from "react";
import { Form, Dashboard } from "./modules";
import { Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user:token") != null || true;

  if (!isLoggedIn) {
    return <Navigate to="users/sign_in" />;
  } else if (
    isLoggedIn &&
    ["/users/sign_in", "users/sign_up"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }
  return children;
};

const App = () => {
  return (
    <div className="bg-[#e1edff] h-screen flex justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/users/sign_in"
          element={
            <ProtectedRoutes>
              <Form isSignInPage={false} />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/users/sign_up"
          element={
            <ProtectedRoutes>
              <Form isSignInPage={true} />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
