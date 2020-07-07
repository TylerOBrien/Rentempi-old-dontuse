/**
 * Global Imports
*/

import React, { useContext } from 'react';

/**
 * Local Imports
*/

import { AuthContext } from '~/providers/Auth';
import { TokenConfig } from '~/config';

/**
 * Exports
*/

export const ApiContext = React.createContext({});

export function ApiProvider(props) {
  /** Contexts **/
  
  const auth = useContext(AuthContext);
  
  /** Output **/
  
  return (
    <ApiContext.Provider value={{ credentials: { token: auth.token, token_type: TokenConfig.type } }}>
      { props.children }
    </ApiContext.Provider>
  );
}