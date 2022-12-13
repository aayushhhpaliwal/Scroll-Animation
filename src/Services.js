import React from "react";

function makeDog(e) {
    e.target.setAttribute( 'src', 'https://source.unsplash.com/LYK3ksSQyeo');
    e.target.setAttribute('alt', 'dog');
  }
  
  const Services = (
  
    <div>
  <img src="https://source.unsplash.com/Qmox1MkYDnY" alt="cat" onClick={makeDog}
    />
      <p>Click on the photo</p>
    </div>
  
  );

  export default Services