/**
 * Local Imports
*/

import { ApiRequest } from '~/util/Api';

/**
 * Locals
*/

const endpoint = 'users';

/**
 * Exports
*/

/**
 * 
 */
export function IndexUserService({ token, token_type }, data) {
  const config = {
    token,
    token_type,
    method: 'GET',
    uri: `/v1/${ endpoint }`,
    data
  };

  return ApiRequest(config);
}

/**
 * 
 */
export function ShowUserService({ token, token_type }, { id }, data) {
  const config = {
    token,
    token_type,
    method: 'GET',
    uri: `/v1/${ endpoint }/${ id }`,
    data
  };

  return ApiRequest(config);
}

/**
 * 
 */
export function StoreUserService({ token, token_type }, { id }, data) {
  const config = {
    token,
    token_type,
    method: 'POST',
    uri: `/v1/${ endpoint }`,
    data
  };

  return ApiRequest(config);
}

/**
 * 
 */
export function UpdateUserService({ token, token_type }, { id }, data) {
  const config = {
    token,
    token_type,
    method: 'PUT',
    uri: `/v1/${ endpoint }/${ id }`,
    data
  };

  return ApiRequest(config);
}

/**
 * 
 */
export function DestroyUserService({ token, token_type }, { id }, data) {
  const config = {
    token,
    token_type,
    method: 'DELETE',
    uri: `/v1/${ endpoint }/${ id }`,
    data
  };

  return ApiRequest(config);
}