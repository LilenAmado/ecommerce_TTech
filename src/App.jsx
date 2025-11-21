import { useEffect, useState } from 'react'
import { getResponse } from './controllers/Services'
import { useAuthContext } from './context/AuthContext';
import Header from "./components/General/Header/Header"
import Home from "./containers/Home"
import Footer from "./components/General/Footer/Footer"
import ProductsContainer from "./containers/ProductsContainer"
import ProductDetail from "./components/Products/ProductDetail"
import Contacto from "./containers/Contacto"
import Ayuda from "./containers/Ayuda"
import Cart from "./containers/Cart"
import ShoppingCart from './containers/ShoppingCart'
import UserAuth from './components/General/Auth/UserAuth'
import Login from './components/General/Auth/Login'
import Admin from './components/General/Auth/Admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'

function App() {
  const { isAuthenticated } = useAuthContext();
  const [data, setData] = useState([]) // Productos

  const getApiResponse = async () => {
    try{
      const response = await getResponse();
      setData(response);
    } catch (error) {
      throw console.error(error)
    }
  }

  useEffect(() => { 
    getApiResponse()
  }, [])
  
  return (
    <BrowserRouter>
      <Header />
      <Cart />
      <main className="container-app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home data={data}/>} />
          <Route path="/products" element={<ProductsContainer data={data}/>} />
          <Route path="/contact" element={<Contacto data={data}/>} />
          <Route path="/help" element={<Ayuda data={data}/>} />
          <Route path="/product/:id" element={<ProductDetail data={data} />} />
          <Route path="*" element={<h1>Error 404: Not Found</h1>} />

          {/* Rutas protegidas */}
          <Route path="/admin" element={
            <UserAuth>
              <Admin />
            </UserAuth>
          } />

          <Route path="/shoppingCart" element={
            <UserAuth>
              <ShoppingCart data={data}/>
            </UserAuth>
          } />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App