import "./App.css";
import CallingModule from "./pages/callingModule";
import SignIn from "./pages/Auth/signIn";
import SignUp from "./pages/Auth/signUp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PublicRoute from "./routes/public";
import PrivateRoute from "./routes/private";

function App() {
  return (
    <>
      {/* <SignIn />
      <CallingModule /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />

          {/* Private Routes */}
          <Route
            path="/calling"
            element={
              <PrivateRoute>
                <CallingModule />
              </PrivateRoute>
            }
          />
          {/* <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/calling" element={<CallingModule />} /> */}
        </Routes>
      </Router>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
