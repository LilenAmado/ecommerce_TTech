import { Link } from 'react-router-dom'
import Card from '../../General/Card/Card'
import Text from '../../General/Text/Text'
import './Popular.css'

const Popular = ({data}) => {
  return (
    <div className="offer-container"> 
      
        <div className='items-offer-container'>
          <Text element={'title'} text={'Lo más vendido'} />
          <Link to={''} className='btn-offer-plus'>Ver más</Link>
        </div>

      <div className='items-offer-container'>
        {data.slice(8, 14).map((data) => (
          <Card 
            key={data.id}
            element={"popular"}
            title={data.title}
            image= {data.image}
            price={data.price}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Popular