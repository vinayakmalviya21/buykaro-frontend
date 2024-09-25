import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from './pages/LandingPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <ContactUsPage />
      <Footer />
    </>
  );
}

export default App;
