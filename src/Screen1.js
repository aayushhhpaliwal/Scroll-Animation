import React from "react";
import lottie from "lottie-web";
import Screen from "./img/Coin_screen 01.json";
import Screen1 from "./img/final screen 1.gif"


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
    <div>
      <img src={Screen1}></img>
    </div>
  );
}
