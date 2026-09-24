import Header from "./components/Header";
import EventoCard from "./components/EventoCard";
import { eventos } from "./data/eventos";
import { useState } from "react"
import "./App.css";
function App() {
  const [busca, setBusca] = useState("")
 return (
 <>
 <Header />
 <section className="busca">
 <input
 type="text"
 placeholder="Buscar evento pelo título..."
 value={busca}
 onChange={(e) => setBusca(e.target.value)}
 />
</section>

<p>Você digitou: {busca}</p>

 <main className="lista-eventos">
 {eventos.map((evento) => (
 <EventoCard
 key={evento.id}
 titulo={evento.titulo}
 tipo={evento.tipo}
 data={evento.data}
 local={evento.local}
 vagas={evento.vagas}
 />
 ))}
 </main>
 </>
 );
}
export default App;