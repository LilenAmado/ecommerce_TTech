import Card from '../General/Card/Card'
import './Products.css'

const Products = ({data, element}) => {
  switch(element) {
    case 'offer':
      return (
        <div className="products-container"> 
          <div className='items-products-container' key={data.id}>
            {data.slice(0, 5).map((product) => (
              <Card 
                key={product.id}
                element={'offer'}
                id={product.id}
                title={product.title}
                image={product.image}
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
            {data.slice(5, 15).map((product) => (
              <Card 
                key={product.id}
                element={'products'}
                id={product.id}
                title={product.title}
                image={product.image}
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
            {data.map((product) => (
              <Card 
                key={product.id}
                element={'products'}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>
      )
  }
}

export default Products