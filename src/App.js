import Navbar from "./components/Navbar"
import About from "./components/About"
import Products from "./components/Products"
import Search from "./components/Search"
import Footer from "./components/Footer"

function App(){
    return(
        <div>
  <Navbar></Navbar>
  <Search></Search>
  <Products></Products>
  <About></About>
  <Footer></Footer>

</div>
    )
}

export default App