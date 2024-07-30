import Header from "../Header/Header.jsx"
import Main from "../Main/Main.jsx"
import Footer from "../Footer/Footer.jsx"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />    
    </>
  )
}

export default Layout