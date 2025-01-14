import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { userCurrentToken } from "../redux/store";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(userCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoutes;
