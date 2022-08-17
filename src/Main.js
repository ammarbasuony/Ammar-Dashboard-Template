import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// Properties
import properties from "properties.json";

// Helpers
import GuestRoute from "./helpers/routes/GuestRoute";
import ProtectedRoute from "./helpers/routes/ProtectedRoute";

// Layout
import Layout from "./components/Layout";

// Pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

import Users from "./pages/Users";
import AddUser from "./pages/Users/AddUser";

const Main = () => {
  return (
    <div className="Timezones-App">
      <Helmet>
        <link
          rel="icon"
          href={require(`assets/${properties.appearence.favicon}`)}
        />
        <meta name="theme-color" content={properties.appearence.primary} />
        <meta name="description" content={properties.app_info.description} />
        <link
          rel="apple-touch-icon"
          href={require(`assets/${properties.appearence.favicon}`)}
        />
        <title>{properties.app_info.name}</title>
      </Helmet>

      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <GuestRoute>
                <SignUp />
              </GuestRoute>
            }
          />
          <Route
            path="/"
            element={
              <GuestRoute>
                <Layout />
              </GuestRoute>
            }
          >
            <Route path="users">
              <Route path="add" element={<AddUser />} />
              <Route index element={<Users />} />
            </Route>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
