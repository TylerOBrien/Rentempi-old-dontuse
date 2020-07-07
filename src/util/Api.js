/**
 * Global Imports
*/

import axios from 'axios';

/**
 * Local Imports
*/

import { ApiConfig } from '~/config';

/**
 * Exports
*/

/**
 * 
 */
export function ApiRequest({ token, token_type, method, uri, data, headers }) {
  const config = {
    method,
    url: `${ ApiConfig.URL }${ uri }`,
    headers: {
      Authorization: ( token && token_type ) ? `${ token_type } ${ token }` : undefined,
      ...headers,
      common: {
        ...headers?.common,
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
  };

  if (method.toLowerCase() === 'get') {
    config.params = data || {};
  } else {
    config.data = data || {};
  }

  return axios({
    ...config,
    headers: Object.fromEntries(
      Object.entries(config.headers).filter(entry => entry[1])
    )
  });
}