import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../../context/AuthContext.jsx';
import AdminProductForm from '../../../Products/AdminProductForm.jsx';
import Text from '../../Text/Text';
import logoutIcon from '../../../../assets/door-open.svg'
import '../Auth.css'

const Admin = (props) => {
  const { data, setData} = props;
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
          <Text element={'subtitle'} text={'Bienvenido, Administrador'} />
        </div>
        
        <button onClick={handleSubmit} className='btn-logout'>
          <img src={logoutIcon} alt="" width={20}/>
        </button>
      </div>
      <br /><hr /><br />
      <AdminProductForm data={data} setData={setData} />
    </>
  )
}

export default Admin