import React from 'react';
import './HomePage.css';
import Head from '../../components/Head/option';
import Animation from '../../components/animation/animation';
import Footer from '../../components/footer/index';
import Section from '../../components/sections/section';


function HomePage() {
  return (
    <div className="HomePage">
    <Animation />
    <Head />
    <Section />
    <Footer />
    </div>
  );
}

export default HomePage;
