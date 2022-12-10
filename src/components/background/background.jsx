import React from 'react'
import './background.css'; 

//importing typewriter-effect
import Typewriter from "typewriter-effect";


const bgimage = () => {
 
 
  return (
    <div className="App">
      <Typewriter

        onInit={( typewriter ) => {

          typewriter

            .typeString( "Enjoy Your Honeymoon<br> In A Perfect <b> Hotel</b> " )


            .pauseFor( 2000 )
            .deleteAll()
            .typeString( "Enjoy Your Honeymoon<br>In A Perfect<b>  Hotel</b>" )
           
            .start();
          
            
        }}
      />
    </div>
  )
}

export default bgimage
