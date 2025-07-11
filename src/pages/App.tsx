import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import JamAnalyticsChatbot from "../components/JamAnalyticsChatbot.tsx"; // Import the chatbot component
import { GetStarted } from "../components/GetStarted.tsx";
import Signup from "../components/Signup.tsx";
import Welcome from "../components/Welcome.tsx";
import Signin from "../components/Signin.tsx";
import Otp from "../components/Otp.tsx";

function App() {
  return (
    <>
      {/* Main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/otp" element={<Otp />} />

        {/* Add other routes as needed */}
      </Routes>

      {/* The chatbot will be visible on all pages regardless of scrolling */}
      <JamAnalyticsChatbot />
    </>
  );
}

export default App;
