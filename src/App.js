import React from "react";
import HeroBar from "./components/HeroBar";
import ImageAndTitle from "./components/ImageAndTitle";
import List from "./components/List";
import Menu from "./components/Menu";
import OurRange from "./components/OurRange";

function App() {
  return (
    <React.Fragment>
     <Menu/>
     <HeroBar/>
     <List/>
     <ImageAndTitle/>
     <OurRange/>
    </React.Fragment>
  );
}

export default App;
