import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";

import { Navigate } from "react-router";
import { selectCurrentUser } from "../redux/features/auth/authSlice";

const ProtectRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(selectCurrentUser);
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectRoute;
