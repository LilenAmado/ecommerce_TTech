import Banner from '../../../assets/banner.png'
import Text from '../../General/Text/Text'
import './PrimaryBanner.css'    

const PrimaryBanner = () => {
  return (
    <div className="primary-banner">
      <div>
        <div>
          <Text element={'important-text'} text={'ÁGORA'}/>
          <Text element={'banner'} text={'Encontra todo lo que necesitas'} />
          <div className='flex-banner'>
            <Text element={'subtitle'} text={'Los mejores productos'}/> {/* al mejor precio */}
            <Text element={'spam-banner'} text={'al mejor precio'} />
          </div>
        </div>
        <img src={Banner} alt="" width={250} style={{marginTop: '30px'}}/>
      </div>
      
    </div>
  )
}

export default PrimaryBanner
