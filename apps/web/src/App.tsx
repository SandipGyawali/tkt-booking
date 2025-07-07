import { Toaster } from "react-hot-toast";
import ApplicationRoutes from "./routers";

function App() {
  return (
    <>
      <ApplicationRoutes />
      <Toaster />
    </>
  );
}

export default App;
