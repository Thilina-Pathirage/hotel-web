import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import PopularFacilities from './components/PopularFacilities';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div id="booking">
          <Hero />
        </div>
        <div id="rooms">
          <Rooms />
        </div>
        <div id="facilities">
          <Facilities />
          <PopularFacilities />
        </div>
        <div id="reviews">
          <CustomerReviews />
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
