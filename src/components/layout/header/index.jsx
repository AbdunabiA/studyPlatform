import { NavLink } from 'react-router-dom'
import s from './header.module.scss'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div>
            <NavLink to={"/"}>Home</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header