import { Link } from 'react-router-dom'
import Card from '../../General/Card/Card'
import Text from '../../General/Text/Text'
import './Offer.css'

const Offer = ({data}) => {
  return (
    <div className="offer-container"> 
      
        <div className='items-offer-container'>
            <Text element={'title'} text={'Ofertas Imperdibles'} />
            <Link to={''} className='btn-offer-plus'>Ver más</Link>
        </div>

      <div className='items-offer-container'>
        {data.slice(0, 6).map((data) => (
          <Card 
            key={data.id}
            element={"offer"}
            title={data.title}
            image= {data.image}
            price={data.price}
            discountedPrice={10}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Offer