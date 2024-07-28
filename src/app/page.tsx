import React from 'react';
import './lib/fontAwesome';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SubNav from './components/SubNav';
import BodyContents from './components/BodyContents';

export default function Home() {

  return (
    <main>
     <Navigation />
     <SubNav />
     <BodyContents />
     <Footer />
    </main>
  );
}
