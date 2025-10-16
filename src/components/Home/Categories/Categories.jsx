import Card from '../../General/Card/Card'
import Text from '../../General/Text/Text'
// Category imgs
import electronics from '../../../assets/electronics.png'
import jewelery from '../../../assets/jewelery.png'
import womenClothing from '../../../assets/women-clothing.png'
import menClothing from '../../../assets/men-clothing.png'
import './Categories.css'

const Categories = ({data}) => {
  // Obtener categorías únicas
  const categories = [...new Set(data.map(item => item.category))] // ver como funciona pq no entiendo
  const categoryImages = [{
    "electronics": electronics,
    "jewelery": jewelery,
    "men's clothing": menClothing,
    "women's clothing": womenClothing
  }];


  return (
    <div className="categories-container"> 
      <Text element={'title'} text={'Categorías'} />

      <div className='items-categories-container'>
        {categories.map((data, id) => (
            <Card 
              key={id}
              element={"category"}
              title={categories[id]}
              image= {categoryImages[0][categories[id]]}
            />
        ))}
      </div>
    </div>
  )
}

export default Categories