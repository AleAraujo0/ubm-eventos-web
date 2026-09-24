import { useEffect, useState } from "react"
import EventoCard from "../components/EventoCard"
import api from "../services/api"

function Home() {
  const [eventos, setEventos] = useState([])
  const [busca, setBusca] = useState("")
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    async function carregarEventos() {
      try {
        const resposta = await api.get("/eventos")
        setEventos(resposta.data)
      } catch (error) {
        console.log("Erro ao buscar eventos:", error)
        setErro(true)
      } finally {
        setCarregando(false)
      }
    }

    carregarEventos()
  }, [])

  const eventosFiltrados = eventos.filter((evento) =>
    evento.titulo.toLowerCase().includes(busca.toLowerCase())
  )

  if (carregando) {
    return <p className="aviso">Carregando eventos...</p>
  }

  if (erro) {
    return (
      <p className="aviso">
        Não foi possível carregar os eventos.
      </p>
    )
  }

  return (
    <>
      <section className="busca">
        <input
          type="text"
          placeholder="Buscar evento pelo título..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </section>

      {busca !== "" && (
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
              id={evento.id}
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

export default Home