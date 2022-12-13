import React from "react";
import lottie from "lottie-web";
import Screen from "./img/Coin_screen 01.json";
import Screen1 from "./img/final screen 1.gif"
import Screen1m from "./img/mobile screen 2.gif"
import "./styles.css"


export default function App() {
    
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#react-logo"),
            animationData: Screen,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true, // boolean
          });
        }, []);
          

  return (
    <div id="">
      <img src={Screen1} className="screen1d"></img>
      <img src={Screen1m}  className="screen1r"></img>
      
    </div>
  );
}
