import React from 'react';
import Banner from './banner';
import BuyNow from './buyNow';
import Characters from './characters';
import Footer from './Footer';
import Gallery from './gallery';
import Gameplay from './gameplay';
import Games from './games';
import GameStory from './gameStory';
import Header from './header';
import NavBar from './navBar';
import Review from './review';
import World from './world';

function AppScreen() {
  return (
    <div>
      <Header />
      <NavBar />
      <Banner />
      <GameStory />
      <Characters />
      <World />
      <Gallery />
      <Gameplay />
      <Review />
      <BuyNow />
      <Games />
      <Footer />
    </div>
  );
}

export default AppScreen;
