import { UserContext } from "@/09-useContext/context/UserContext"
import { useContext, type JSX } from "react"
import { Navigate } from "react-router";

interface Props {
  element: JSX.Element, // React.ReactNode
  // element: React.ReactNode,
}

export const PrivateRoute = ( {element}: Props ) => {
  const { authStatus } = useContext(UserContext);

  if (authStatus === 'checking') {
    return <div>Loading ...</div>;
  }

  if (authStatus === 'authenticated') {
    return element;
  }

  return <Navigate to='/login' replace />;
}
