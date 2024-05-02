import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import './styles.css'
import Saludo from ".7components/Saludo"
//JSX
const root=ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(<Card
nombre="MP"
edad="19"
color="black"
descripcion="El Nilo, un río que fluye hacia el norte en África, se encuentra entre las vías fluviales más largas del mundo, y es famoso por su antigua historia y los sitios arqueológicos que se encuentran a lo largo de sus orillas. El fértil Nilo inferior dio origen a la antigua civilización egipcia y aún alberga las Grandes Pirámides y la Esfinge de Guiza cerca de El Cairo."
/>)
