import AppRoutes from "../routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
