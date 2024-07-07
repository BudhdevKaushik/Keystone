export const adminRoutes = [
  { to: "/", label: "Dashboard" },
  { to: "/users", label: "Users" },
  { to: "/settings", label: "Settings" },
  { to: "/profile", label: "Profile" },
];

const routes = [
  {
    label: "Menu",
    routes: [
      { to: "/", label: "Dashboard" },
      { to: "/users", label: "Users" },
      { to: "/settings", label: "Settings" },
    ],
  },

  {
    label: "Others",
    routes: [],
  },
];
