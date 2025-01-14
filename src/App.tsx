import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <>
      <ProtectedRoutes>
        <MainLayout></MainLayout>
      </ProtectedRoutes>
    </>
  );
}

export default App;
