import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../../context/AuthContext.jsx';
import Text from '../../Text/Text';
import logoutIcon from '../../../../assets/door-open.svg'
import '../Auth.css'

const User = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    logout();
    navigate('/login');
  };

  return (
    <>
      <div className='admin-flex'>
        <div className='header-admin-user'>
          <Text element={'subtitle'} text={'Hola, Pepito'} />
        </div>
        
        <button onClick={handleSubmit} className='btn-logout'>
          <img src={logoutIcon} alt="" width={20}/>
        </button>
      </div>
      <br /><hr /><br />
      <div className='admin-user-container'>
        <div className='user-data'>
          <Text element={'subtitle'} text={'Datos:'} />
          <p>Nombre: Pepito</p>
          <p>Apellido: Pérez</p>
          <p>Email: prueba@prueba.com</p>
          <p>Dirección: Calle Falsa 123</p>
          <p>Telefono: 281372137</p>
        </div>

        <div className='order-data'>
          <Text element={'subtitle'} text={'Órdenes:'} />
          <p>Orden #1 - Estado: En proceso</p>
          <p>Orden #2 - Estado: Enviado</p>
          <p>Orden #3 - Estado: Entregado</p>
        </div>

      </div>
    </>
  )
}

export default User