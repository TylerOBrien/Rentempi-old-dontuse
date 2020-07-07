/**
 * Global Imports
*/

import { useEffect, useState } from 'react';

/**
 * Exports
*/

/**
 * 
 */
export function useResource(serviceContext, name, initial, ...args) {
  /** States **/

  const [ cached, found ] = serviceContext.cached(name);
  const [ resource, setResource ] = useState(found ? cached : initial);
  const [ error, setError ] = useState(null);
  const [ isLoaded, setIsLoaded ] = useState(found ? true : false);

  /** Side-Effects **/

  useEffect(() => {
    if (!found) {
      serviceContext.fetch(name, ...args)
        .then(response => setResource(response.data))
        .catch(error => setError(error.response.data))
        .finally(() => setIsLoaded(true))
      ;
    }
  }, []);

  /** Output **/

  return [ resource, error, isLoaded ];
}