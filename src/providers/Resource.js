/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';

/**
 * Local Imports
*/

import { ApiContext } from '~/providers';
import { usePagination } from '~/util/Paginate';

/**
 * Locals
*/

/**
 * 
 */
function MakeSingularName(name) {
  return name.toLowerCase();
}

/**
 * 
 */
function MakePluralName(name) {
  if (name[name.length-1] === 'y') {
    name = name.slice(0, name.length-1) + 'ie';
  }

  return name.toLowerCase() + 's';
}

/**
 * 
 */
function SerializeFilter(filter) {
  const result = {};

  for (const [ column, data ] of Object.entries(filter)) {
    for (const [ cmp, value ] of Object.entries(data)) {
      result[`filter[${ column }][${ cmp }]`] = value;
    }
  }

  return result;
}

/**
 * Exports
*/

/**
 * 
 */
export function ResourceProvider(props) {
  /** Contexts **/

  const api = useContext(ApiContext);
  
  /** States **/
  
  const [ resource, setResource ] = useState(null);
  const [ resources, setResources ] = useState(null);
  const [ indexFilterQuery, setIndexFilterQuery ] = useState('');
  const [ indexFilterProps, setIndexFilterProps ] = useState([]);
  
  /** Helpers **/
  
  /**
   * 
   */
  const getFilteredResources = () => {
    if (!resources || !indexFilterQuery) {
      return resources;
    }

    const needle = indexFilterQuery.toLowerCase();

    return resources.filter(child => {
      for (const prop of indexFilterProps) {
        const parts = prop.split('.');

        let index = 1;
        let target = child[parts[0]];

        while (target && index < parts.length) {
          target = target[parts[index]];
          index++;
        }

        if (target && target.toLowerCase().indexOf(needle) !== -1) {
          return true;
        }
      }

      return false;
    });
  };

  const filteredResources = getFilteredResources();
  const pagination = usePagination({ per: 7, length: filteredResources?.length });

  /** Settings **/

  const services = {
    index: props.services[`Index${ props.name }Service`],
    show: props.services[`Show${ props.name }Service`],
    store: props.services[`Store${ props.name }Service`],
    update: props.services[`Update${ props.name }Service`],
    destroy: props.services[`Destroy${ props.name }Service`]
  };
  
  /** Helpers **/

  const isLoading = ({ id }) => {
    return !resource || resource.id !== parseInt(id);
  };

  const isLoadingIndex = () => {
    return resources === null;
  };

  const index = (filter, ...args) => {
    if (isLoadingIndex()) {
      services.index(api.credentials, ...args, filter && SerializeFilter(filter))
        .then(response => setResources(response.data))
      ;
    }
  };

  const show = (request) => {
    return new Promise((resolve, reject) => {
      if (!resource || resource.id !== parseInt(request.id)) {
        services.show(api.credentials, request)
          .then(response => setResource(response.data))
          .finally(resolve)
        ;
      } else {
        resolve();
      }
    });
  };

  const store = () => {
    //
  };

  const update = () => {
    //
  };

  /** Event Handlers **/
  
  /** Output **/

  return (
    <props.context.Provider
      value={{
        pagination,
        index, show,
        isLoading, isLoadingIndex,
        indexFilterProps, indexFilterQuery,
        setIndexFilterProps, setIndexFilterQuery,
        set: setResource,
        setIndex: setResources,
        [ MakeSingularName(props.name) ]: resource,
        [ MakePluralName(props.name) ]: filteredResources,
      }}
    >
      { props.children }
    </props.context.Provider>
  );
}

ResourceProvider.propTypes = {
  name: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired
};