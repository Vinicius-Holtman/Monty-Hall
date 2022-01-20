import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/PortaModel";



export default function Home() {
  const [p1, setp1] = useState(new PortaModel(1))

  return (
    <div style={{display: "flex"}}>
      <Porta porta={p1}/>
    </div>
  )
}
