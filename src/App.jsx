import Header from "./components/Header";
import EventoCard from "./components/EventoCard";
import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css";
function App() {
  const [busca, setBusca] = useState("")
  const [eventos, setEventos] = useState([])
const [carregando, setCarregando] = useState(true)
const [erro, setErro] = useState(false)
  const eventosFiltrados = eventos.filter((evento) =>
 evento.titulo.toLowerCase().includes(busca.toLowerCase())
);
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

{busca !== '' && (
 <p className="contador">
 {eventosFiltrados.length} evento(s) encontrado(s)
 </p>
)}

{eventosFiltrados.length === 0 ? (
 <p className="lista-vazia">
 Nenhum evento encontrado para "{busca}".
 </p>
) : (
 <main className="lista-eventos">
 {eventosFiltrados.map((evento) => (
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
)}
</>
 )
}
export default App;