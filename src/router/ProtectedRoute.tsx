import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element | JSX.Element[];
  isAuth: boolean;
  redirectTo: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuth,
  redirectTo,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(redirectTo);
    }
  }, [isAuth, navigate, redirectTo]);

  return children;
};

export default ProtectedRoute;
