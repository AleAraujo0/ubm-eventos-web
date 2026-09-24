import { NavLink, Outlet } from "react-router-dom"
import Header from "./Header"

function Layout() {
  return (
    <>
      <Header />

      <nav className="app-nav">
        <NavLink to="/" end>
          Eventos
        </NavLink>

        <NavLink to="/sobre">
          Sobre
        </NavLink>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout