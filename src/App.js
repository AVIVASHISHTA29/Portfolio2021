import Header from "./components/Header";
import Footer from "./components/Footer";
import DraggableList from "./components/Viewpager";
import React from "react";
import IntroComponent from "./components/IntroComponent";
import AboutMe from "./components/AboutMe";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="">
      <head>
        <title>Avi Vashishta</title>
        <meta
          name="description"
          content="A 19 year old young entrepreneur and a CS student at IIITD , who's also a self taught Web Designer/Developer, a Game Developer, an Author and an App Developer."
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="canonical" href="https://www.avivashishta.com" />
        <meta
          name="keywords"
          content="Avi Vashishta,  Entrepreneur, Developer , Wexus, Avi , Full Stack"
        />
        <meta name="author" content="Avi Vashishta" />

        {/* Social: Twitter */}
        <meta name="twitter:card" content="https://i.ibb.co/Bswp8RS/avi.jpg" />
        <meta
          name="twitter:site"
          content="https://www.https://www.avivashishta.com"
        />
        <meta name="twitter:title" content="Avi Vashishta" />
        <meta
          name="twitter:description"
          content="A 19 year old young entrepreneur and a CS student at IIITD , who's also a self taught Web Designer/Developer, a Game Developer, an Author and an App Developer."
        />
        <meta
          name="twitter:image:src"
          content="https://i.ibb.co/Bswp8RS/avi.jpg"
        />
        <meta name="twitter:image:alt" content="Avi Vashishta" />

        {/* Social: Facebook / Open Graph */}
        <meta property="og:url" content="https://www.avivashishta.com" />
        <meta property="og:type" content="Entrepreneur" />
        <meta property="og:title" content="Avi Vashishta" />
        <meta property="og:image" content="https://i.ibb.co/Bswp8RS/avi.jpg" />
        <meta
          property="og:description"
          content="A 19 year old young entrepreneur and a CS student at IIITD , who's also a self taught Web Designer/Developer, a Game Developer, an Author and an App Developer."
        />
        <meta property="og:site_name" content="Avi Vashishta" />

        {/* Social: Google+ / Schema.org */}
        <meta itemProp="name" content="Avi Vashishta" />
        <meta
          itemProp="description"
          content="A 19 year old young entrepreneur and a CS student at IIITD , who's also a self taught Web Designer/Developer, a Game Developer, an Author and an App Developer."
        />
        <meta itemProp="image" content="https://i.ibb.co/Bswp8RS/avi.jpg" />
      </head>
      <Header />
      <div className="backgroundDiv">
        <div className="container">
          <IntroComponent />
          <AboutMe />
          <SkillSet />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}
