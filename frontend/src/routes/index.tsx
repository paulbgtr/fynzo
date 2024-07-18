import NotFound from "./errors/not-found";
import Root from "./root";
import Dashboard from "./user/dashboard";
import ProjectPage from "./user/dashboard/project-page";

import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Root />} />
      <Route path="/user">
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects/:projectId" element={<ProjectPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
