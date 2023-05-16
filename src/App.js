import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Link } from "react-router-dom";

function AppContent() {
  return (
    <>
      <Header />
      <>
        <Link to="/app" />
      </>
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};
export default App;
