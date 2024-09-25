import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from './pages/LandingPage';
import ContactUsPage from './pages/ContactUsPage';
import Signup from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Signup />
      {/* <Login /> */}
      {/* <LandingPage /> */}
      {/* <ContactUsPage /> */}
      <Footer />
    </>
  );
}

export default App;
