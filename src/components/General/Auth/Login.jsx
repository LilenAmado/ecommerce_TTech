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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Autenticación
    if (user === 'admin' && password === '1234') {
      login(user)
      navigate('/admin');
    } else {
      alert('Credenciales incorrectas'); // agregar span rojo
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='login-container'>
        <Text element={'title'} text={'Iniciar sesión'} />

        {/* User */}
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        {/* Password */}
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <button type="submit">Iniciar sesión</button>

      </form>
    </>
  )
}

export default Login