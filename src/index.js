import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
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
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
