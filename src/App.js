import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Project from "./components/pages/Project/Project"
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Implement ReactRouter Routes  */}
      {/* Keeping Components currently for test purposes */}
      <Header />
    <Project />
      
      <Footer />
    </div>
  );
}

export default App;