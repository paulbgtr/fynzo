import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./routes/dashboard";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
