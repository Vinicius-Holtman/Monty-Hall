import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/PortaModel";



export default function Home() {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h2>formulario de inicio</h2>
    </div>
  )
}
