/**
 * Global Imports
*/

import React, { useContext, useState } from 'react';

/**
 * Local Imports
*/

import * as Services from '~/services';

import { ServiceConfig } from '~/config';
import { ucfirst } from '~/util/Helpers';

import { ApiContext } from './Api';

/**
 * Exports
*/

export const ServiceContext = React.createContext({});

/**
 * 
 */
export function ServiceProvider(props) {
  /** Contexts **/

  const api = useContext(ApiContext);

  /** States **/

  const [ cache, setCache ] = useState({});

  /** Helpers **/

  /**
   * 
   */
  const cacheValue = (name, value) => {
    setCache({
      ...cache, [name]: {
        value: value,
        promisedValue: new Promise((resolve, reject) => resolve(value)),
        expires: Date.now() + 3600000
      }
    });
  };

  /**
   * 
   */
  const isCached = (name) => {
    return ( name in cache && cache[name].expires > Date.now() );
  };

  /**
   * 
   */
  const cached = (name) => {
    return [ cache[name]?.value?.data, name in cache ];
  };
  
  /**
   * 
   */
  const fetch = (name, ...args) => {
    if (isCached(name)) {
      return cache[name].promisedValue;
    }

    const [ action, group, ...rest ] = name.split('.').map(ucfirst);

    const services = Services[`${ group }Services`];
    const service = services[`${ action }${ group }${ rest.join('') }Service`];

    return new Promise((resolve, reject) => {
      service(api.credentials, ...args)
        .then(response => {
          if (name in ServiceConfig.Cacheable) {
            cacheValue(name, response);
          }
          resolve(response);
        })
        .catch(reject)
      ;
    });
  };
  
  /** Output **/
  
  return (
    <ServiceContext.Provider value={{ fetch, cached }}>
      { props.children }
    </ServiceContext.Provider>
  );
}