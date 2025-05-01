import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="card">
      <Card title="card 1" description="card 1 desc"/>
      <Card title="card 2" description="card 2 desc"/>
      <Card title="card 3" description="card 3 desc"/>
      <Card title="card 4" description="card 4 desc"/>
      </div>
      <Footer />
    </>
  );
}

export default App;
