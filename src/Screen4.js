
import React from 'react'
import Cir from "./img/3.png"

function Screen4() {
    function makeDog(e) {
    e.target.setAttribute( 'src', '/mae.png');
    e.target.setAttribute('alt', 'Mae');

  }
  
  return (
    <div>
    <img src={Cir} alt="Screen4" className='circle' onClick={makeDog}  />
    </div>
  )
}

export default Screen4