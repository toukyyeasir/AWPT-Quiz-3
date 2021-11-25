import React,{Fragment} from "react";
import TopBar from './components/TopBar';
import Header from './components/Header';
import MainBody from './components/mainBody/MainBody';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
//import './assets/css/style.css'
//import './App.css';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSection />
      <MainBody />
      <Footer />
    </>
  );
}

export default App;
