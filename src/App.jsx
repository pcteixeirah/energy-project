import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Card from "./components/layout/Card";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {" "}
        {/* Esta clase asegura que la app ocupe la altura completa de la pantalla */}
        <Header />
        <main className="flex-grow">
          {" "}
          {/* Flex-grow permite que este elemento ocupe el espacio disponible */}
          <Card />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
