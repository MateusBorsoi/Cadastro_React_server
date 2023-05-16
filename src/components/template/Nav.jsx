import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
       <aside className="menu-area">
        <nav className="menu">
            <Link to="/">Inicio</Link>
            <Link to="/users">Usuários</Link>
        </nav>
       </aside>
    )
}

export default Nav