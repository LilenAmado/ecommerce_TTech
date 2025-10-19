import { useEffect, useContext } from 'react'
import { ProyectContext } from '../context/ProyectContext.jsx';
import Text from '../components/General/Text/Text'
import Products from '../components/Products/Products'

const ProductsContainer = ({data}) => {
  const { setActiveSection } = useContext(ProyectContext);

  useEffect(() => {
    setActiveSection('products')
  }, [])

  return (
    <div className="products-container"> 
      <div className='items-products-container' style={{marginTop:'-30px'}}>
        <Text element={'title'} text={'Productos'} />
      </div>

      <Products data={data} element={'products'}/>
    </div>
  )
}

export default ProductsContainer