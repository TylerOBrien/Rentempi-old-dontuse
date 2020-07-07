/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useContext } from 'react';

/**
 * Local Imports
*/

import { AuthContext } from '~/providers';

/**
 * Exports
*/

/**
 * 
 */
export function AuthGuard(props) {
  /** Contexts **/

  const auth = useContext(AuthContext);

  /** Renderers **/

  /**
   * 
   */
  const renderVerified = () => (
    typeof props.verified === 'function'
      ? React.createElement(props.verified)
      : props.verified
  );
  
  /**
   * 
   */
  const renderGuest = () => (
    typeof props.guest === 'function'
      ? React.createElement(props.guest)
      : props.guest
  );
  
  /**
   * 
   */
  const renderVerifying = () => (
    null
  );

  /** Output **/
  
  return (auth.isUserLoaded && auth.token)
    ? renderVerified()
    : auth.isVerifying()
      ? renderVerifying()
      : renderGuest()
  ;
}

AuthGuard.propTypes = {
  guest: PropTypes.oneOfType([ PropTypes.node, PropTypes.func ]).isRequired,
  verified: PropTypes.oneOfType([ PropTypes.node, PropTypes.func ]).isRequired
};