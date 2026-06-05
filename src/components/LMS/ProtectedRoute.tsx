import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getAuthUser } from "./authState";
import type { UserRole } from "./lmsData";

type ProtectedRouteProps = {
  roles?: UserRole[];
  children: ReactNode;
};

const ProtectedRoute = ({ roles, children }: ProtectedRouteProps) => {
  const user = getAuthUser();

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    const fallback = user.role === "admin" ? "/admin" : user.role === "mentor" ? "/mentor" : "/dashboard";
    return <Navigate to={fallback} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
