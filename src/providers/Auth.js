/**
 * Global Imports
*/

import React, { useEffect, useState } from 'react';

/**
 * Local Imports
*/

import { RefreshAuthService } from '~/services/Auth';
import { TokenStorage } from '~/util/Token';

/**
 * Locals
*/

const TOKEN_VERIFYING_LOCAL = 0;

/**
 * Exports
*/

export const AuthContext = React.createContext({ token: TOKEN_VERIFYING_LOCAL });
export const UserContext = React.createContext(null);

/**
 * 
 */
export function AuthProvider(props) {
  /** States **/

  const [ user, setUser ] = useState(null);
  const [ isUserLoaded, setIsUserLoaded ] = useState(false);
  const [ token, setToken ] = useState(TOKEN_VERIFYING_LOCAL);

  /** Side-Effects **/
  
  useEffect(() => {
    handleMount();
  }, []);

  /** Helpers **/

  /**
   * 
   */
  const authenticate = ({ user, token, token_type }) => {
    TokenStorage.set({ token, token_type });

    setUser(user);
    setToken(token);

    setIsUserLoaded(true);
  };

  /**
   * 
   */
  const mergeUser = (data) => {
    setUser({ ...user, ...data });
  };

  /**
   * 
   */
  const logout = () => {
    TokenStorage.clear().then(() => {
      setIsUserLoaded(false);
      setUser(null);
      setToken(null);
    });
  };

  /**
   * 
   */
  const isVerifying = () => {
    return token === TOKEN_VERIFYING_LOCAL;
  };

  /** Event Handlers **/

  /**
   * 
   */
  const handleMount = () => {
    TokenStorage.get().then(storedToken => {
      if (storedToken) {
        handleVerifyToken( JSON.parse(storedToken) );
      } else {
        setToken(null);
      }
    });
  };

  /**
   * 
   */
  const handleVerifyToken = (storedToken) => {
    RefreshAuthService(storedToken)
      .then(response => authenticate(response.data))
      .catch(error => {
        TokenStorage.clear();
        setToken(null);
      })
    ;
  };

  /** Output **/

  return (
    <AuthContext.Provider value={{ token, authenticate, logout, isUserLoaded, isVerifying, setUser, mergeUser }}>
      <UserContext.Provider value={ token && user ? user : null }>
        { props.children }
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}