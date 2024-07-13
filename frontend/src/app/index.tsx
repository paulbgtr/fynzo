import AppRoutes from "../routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
