import React from "react";

function makeDog(e) {
    e.target.setAttribute( 'src', 'https://source.unsplash.com/LYK3ksSQyeo');
    e.target.setAttribute('alt', 'dog');
  }
  
  const Services = (
  
    <div>
  <img src="https://source.unsplash.com/Qmox1MkYDnY" alt="Screen4" onClick={makeDog}
    />
      <p>Check</p>
    </div>
  
  );

  export default Services