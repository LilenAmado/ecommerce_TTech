import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext.jsx';

const UserAuth = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default UserAuth;