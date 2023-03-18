import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./sections/About";
import Features from "./sections/Features";
import Tours from "./sections/Tours";
import Stories from "./sections/Stories";
import Book from "./sections/Book";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Book />
      </main>
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
