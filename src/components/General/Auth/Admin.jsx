import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext.jsx';
import './Auth.css'

const Admin = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    logout();
    navigate('/login');
  };

  return (
    <>
      <div>Admin</div>
      <button onClick={handleSubmit} className='btn-logout'>Cerrar sesión</button>
    </>
  )
}

export default Admin