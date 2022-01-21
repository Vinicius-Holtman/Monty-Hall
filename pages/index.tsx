import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/PortaModel";



export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3, 2))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}></Porta>
    })
  }

  console.log(criarPortas(3, 2))

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {renderizarPortas()}
    </div>
  )
}
