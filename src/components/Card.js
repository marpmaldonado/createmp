// importar

import React from "react";
import Miimagen from "./image/pocoyo.jpg";

class Card extends React.Component{
render(){


    const {nombre,edad,color,descripcion}=this.props


    return(
    <div className="card back">
        <div className="font">
            <h1>React </h1>
            <h1 style={{color:`${color}`}}>Hola {nombre} tu edad es {edad}</h1>

<div className="porta">
    <img src={Miimagen}></img>
             <h2 className="descripcion">{descripcion}</h2>

    </div>
    
    </div>
    </div>

    
    )
   }
}


////////////////////

// function Card((tittle,image,body)){
//     return ( 
//         <div>

//         </div>
//     )
// }

export default Card