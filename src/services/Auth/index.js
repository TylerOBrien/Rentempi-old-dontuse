/**
 * Local Imports
*/

import { ApiRequest } from '~/util/Api';

/**
 * Exports
*/

/**
 * 
 */
export function LoginAuthService(data) {
  const config = {
    method: 'POST',
    uri: '/v1/login',
    data
  };

  return ApiRequest(config);
}

/**
 * 
 */
export function RegisterAuthService(data) {
  const config = {
    method: 'POST',
    uri: '/v1/register',
    data
  };

  return ApiRequest(config);
}

/**
 * 
 */
export function RefreshAuthService({ token, token_type }, data) {
  const config = {
    token,
    token_type,
    method: 'POST',
    uri: '/v1/refresh',
    data
  };

  return ApiRequest(config);
}

/**
 * 
 */
export function ForgotPasswordAuthService(data) {
  const config = {
    method: 'POST',
    uri: '/v1/forgot-password',
    data
  };

  return ApiRequest(config);
}