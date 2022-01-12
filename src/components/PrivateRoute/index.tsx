import React, { useState, useEffect, useCallback } from 'react'
import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { waitFor } from '../../utils/wait';
import { IPrivateRouteProps } from '../../identity';

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ children }) => {
  const [ user ] = useAuth();
  const [endLoad, setEndLoad] = useState(false);
  const location: any = useLocation();

  const memoizedCallback = useCallback(
    async () => {
      await waitFor(100);
      setEndLoad(true);
    },
    [],
  );

  useEffect(() => {
    console.log('PrivateRoute');
    memoizedCallback();
    return () => {
      console.log('PrivateRoute unmount');
    }
  }, [memoizedCallback]);

  return endLoad ? (
    user ? children : <Navigate to="/" state={{ from: location }} replace />)
  : null;
}

export default PrivateRoute;