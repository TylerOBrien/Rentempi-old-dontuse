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
export function LoginService(data) {
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
export function RegisterService(data) {
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
export function RefreshService({ token, token_type }, data) {
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
export function ForgotPasswordService(data) {
  const config = {
    method: 'POST',
    uri: '/v1/forgot-password',
    data
  };

  return ApiRequest(config);
}