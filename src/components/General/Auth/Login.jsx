import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext.jsx';
import Text from '../Text/Text';
import './Auth.css'

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Autenticación
    if (user === 'admin' && password === '1234') {
      login(user)
      navigate('/admin');
      setIsAuthenticated(true)
    } else if (user === 'user' && password === '1234') {
      login(user)
      navigate('/user');
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='login-container'>
        <Text element={'subtitle'} text={'Iniciar sesión'} />
        <span className='span-login-info'>Usuarios de prueba: admin/1234 - user/1234</span>

        {/* User */}
        <div className='container-user'>
          <label><Text element={'auth'} text={'Usuario'} /></label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className='container-password'>
          <label><Text element={'auth'} text={'Password'} /></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <button type="submit" className='btn-login'>Iniciar sesión</button>
        
        {!isAuthenticated && <span className='span-login-error'>Usuario o contraseña incorrecta</span>}

      </form>
    </>
  )
}

export default Login