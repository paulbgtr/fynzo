import { Routes, Route } from "react-router-dom";

import NotFound from "../routes/errors/not-found";
import Root from "../routes/root";
import Dashboard from "../routes/user/dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Root />} />
      <Route path="/user">
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
