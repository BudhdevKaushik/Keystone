import { FC, Fragment } from "react";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/forms/LoginForm";
import Users from "./screens/users/Users";
import Dashboard from "./screens/dashboard/Dashboard";
import Settings from "./screens/settings/Settings";
import Profile from "./screens/profile/Profile";

const App: FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
