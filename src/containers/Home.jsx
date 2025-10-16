// import { useState } from "react"
import { Link } from 'react-router-dom'
import Text from '../components/General/Text/Text'
import PrimaryBanner from "../components/Home/PrimaryBanner/PrimaryBanner"
import Categories from "../components/Home/Categories/Categories"
import Products from "../components/Products/Products"
import './styles/Home.css'

const Home = ({data}) =>{

  return (
    <>
      <PrimaryBanner />
      <Categories data={data}/>
     
      <div className='items-offer-container'>
        <Text element={'title'} text={'Ofertas Imperdibles'} />
        <Link to={'products'} className='btn-offer-plus' style={{marginTop: '30px'}}>Ver más</Link>
      </div>

      <Products data={data} element={'offer'} />

      <div className='items-offer-container'>
        <Text element={'title'} text={'Lo más vendido'} />
        <Link to={'products'} className='btn-offer-plus' style={{marginTop: '30px'}}>Ver más</Link>
      </div>

      <Products data={data} element={'popular'}/>
        
    </>
  )
}

export default Home