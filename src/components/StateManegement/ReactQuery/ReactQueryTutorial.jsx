import { QueryClientProvider, QueryClient } from "react-query";
import RqDashboard from "./components/RqDashboard";

export default function ReactQueryTutorial() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <h1>React Query Tutorial</h1>
        <RqDashboard />
      </QueryClientProvider>
    </div>
  );
}
