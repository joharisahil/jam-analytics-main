import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import JamAnalyticsChatbot from "../components/JamAnalyticsChatbot.tsx"; // Import the chatbot component

function App() {
  return (
    <>
      {/* Main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes as needed */}
      </Routes>

      {/* The chatbot will be visible on all pages regardless of scrolling */}
      <JamAnalyticsChatbot />
    </>
  );
}

export default App;
