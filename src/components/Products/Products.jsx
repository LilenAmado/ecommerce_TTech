import { ProyectContext } from '../../context/ProyectContext.jsx';
import { useContext } from 'react';
import Card from '../General/Card/Card'
import './Products.css'

const Products = ({data, element}) => {

  const {searchQuery} = useContext(ProyectContext);

  const filteredData = data.filter(product => {
    const productTitle = (product.title || product.name || '').toLowerCase();
    return productTitle.includes(searchQuery.toLowerCase());
  });

// console.log(" data:", filteredData);
  switch(element) {
    case 'offer':
      return (
        <div className="products-container"> 
          <div className='items-products-container' key={data.id}>
            {data.map((product) => (
              <Card 
                key={product.id}
                element={'offer'}
                id={product.id}
                title={product.name ?? product.title}
                image={product.img ?? product.image}
                price={product.price}
                discountedPrice={10}
              />
            ))}
          </div>
        </div>
      )
    case 'popular':
      return (
        <div className="products-container"> 
          <div className='items-products-container' key={data.id}>
            {data.map((product) => (
              <Card 
                key={product.id}
                element={'products'}
                id={product.id}
                title={product.name ?? product.title}
                image={product.img ?? product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>
      )
    case 'products':
      return (
        <div className="products-container"> 
          <div className='items-products-container' key={data.id}>
            {filteredData.map((product) => (
              <Card 
                key={product.id}
                element={'products'}
                id={product.id}
                title={product.name ?? product.title}
                image={product.img ?? product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>
      )
  }
}

export default Products