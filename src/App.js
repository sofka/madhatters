import React from "react";
import HeroBar from "./components/HeroBar";
import ImageAndTitle from "./components/ImageAndTitle";
import List from "./components/List";
import Menu from "./components/Menu";
import OurRange from "./components/OurRange";
import ShowMoreLink from './images/ShowMoreLink.png';
import Quote from './images/Quote.png';
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";


function App() {
  return (
    <React.Fragment>
     <Menu/>
     <HeroBar/>
     <List/>
     <ImageAndTitle/>
     <OurRange/>
    <img  className="image-center" src={ShowMoreLink} alt="ShowMoreLink"/>
    <img className="image-center" src={Quote} alt="Quote"/>
    <NewsLetter/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
