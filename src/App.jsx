import { useEffect, useState } from 'react'
import { getResponse } from './controllers/Services'
import Header from "./components/General/Header/Header"
import Home from "./containers/Home"
import Footer from "./components/General/Footer/Footer"
import ProductsContainer from "./containers/ProductsContainer"
import Contacto from "./containers/Contacto"
import Ayuda from "./containers/Ayuda"
import Cart from "./containers/Cart"
import ShoppingCart from './containers/ShoppingCart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'

function App() {
  const [data, setData] = useState([]) // Productos
  const getApiResponse = async () => {
    try{
      const response = await getResponse();
      setData(response);
    } catch (error) {
      throw console.error(error)
    }
  }
  useEffect(() => { getApiResponse() }, [])
  
  return (
    <BrowserRouter>
      <Header />
      <Cart />
      <main className="container-app">
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
          <Route path="/products" element={<ProductsContainer data={data}/>} />
          <Route path="/contact" element={<Contacto data={data}/>} />
          <Route path="/help" element={<Ayuda data={data}/>} />
          <Route path="/shoppingCart" element={<ShoppingCart data={data}/>} />
          <Route path="*" element={<h1>Error 404: Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App