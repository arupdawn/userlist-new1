import React from 'react';
import './App.css';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <div className="app__inner">
      <Header />
      <Body />
      <Footer />
      </div>
    </div>
  );
}

export default App;
