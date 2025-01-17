import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import ProtectRoute from "./routes/ProtectRoute";

function App() {
  return (
    <>
      <ProtectRoute>
        <MainLayout></MainLayout>
      </ProtectRoute>
    </>
  );
}

export default App;
