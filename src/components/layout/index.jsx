import Footer from "components/layout/footer"
import Header from "components/layout/header"
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout