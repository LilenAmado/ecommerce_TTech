import { useEffect, useState } from 'react'
import { getProducts } from './controllers/Services'
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
import Admin from './components/General/Auth/Roles/Admin'
import User from './components/General/Auth/Roles/User'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'

function App() {
  const [data, setData] = useState([]) // Productos

  const getApiResponse = async () => {
    try{
      const response = await getProducts();
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
              <Admin data={data} setData={setData} />
            </UserAuth>
          } />

          <Route path="/user" element={
            <UserAuth>
              <User data={data} />
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