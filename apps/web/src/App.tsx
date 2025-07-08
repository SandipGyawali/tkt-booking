import { Toaster } from "react-hot-toast";
import ApplicationRoutes from "./routers";
import { _ApolloProvider } from "./config/apolloClient";

function App() {
  return (
    <_ApolloProvider>
      <ApplicationRoutes />
      <Toaster />
    </_ApolloProvider>
  );
}

export default App;
