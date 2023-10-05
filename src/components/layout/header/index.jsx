import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/categories"}>Categories</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header