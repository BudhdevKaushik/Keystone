import { FC } from "react";
import Users from "./screens/users/Users";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Profile from "./screens/profile/Profile";
import { Route, Routes } from "react-router-dom";
import Settings from "./screens/settings/Settings";
import LoginForm from "./components/forms/LoginForm";
import Dashboard from "./screens/dashboard/Dashboard";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<LoginForm />} />
        <Route path="login" element={<LoginForm />} />
        {/* <Route path="register" element={<RegisterForm />} /> */}
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
