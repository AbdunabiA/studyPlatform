import { NavLink, useLocation } from 'react-router-dom'
import s from './header.module.scss'

const Header = () => {
  const location = useLocation()
  const pages = ['categories', 'themes']
  // console.log(
  //   Object.keys(pages).filter((el) => {
  //     return location.pathname.includes(el);
  //   })
  // );
  return (
    <header>
      <div className="container">
        <nav>
          <div>
            <NavLink to={"/"}>Home</NavLink>
            <h2>
              {
                pages.filter((el)=>{
                  return location.pathname.includes(el)
                })[0]
              }
              {
                location.pathname == '/' ? 'Subjects' : null
              }
            </h2>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header