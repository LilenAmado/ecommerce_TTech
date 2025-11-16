import { Navigate } from 'react-router-dom';

const UserAuth = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default UserAuth;