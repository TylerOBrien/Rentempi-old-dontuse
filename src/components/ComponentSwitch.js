/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

/**
 * Exports
*/

/**
 * 
 */
export function ComponentSwitch(props) {
  /** States **/
  
  const [ active, setActive ] = useState(props.active || props.initial);
  
  /** Side-Effects **/
  
  useEffect(() => {
    setActive(props.active || props.initial);
  }, [ props.active ]);
  
  /** Renderers **/

  /**
   * 
   */
  const renderComponent = (component) => {
    const config = {
      switch: { active, setActive }
    };
    
    return (
      typeof component === 'function'
        ? React.createElement(component, config)
        : React.cloneElement(component, config)
    );
  };

  /**
   * 
   */
  const renderChildren = () => (
    React.Children.map(
      props.children, child => (
        child.props[props.childNameProp] === active
          ? renderComponent(child)
          : null
      )
    )
  );

  /** Output **/
  
  return (
    props.children
      ? renderChildren()
      : renderComponent(props.components[active])
  );
}

ComponentSwitch.propTypes = {
  active: PropTypes.string,
  initial: PropTypes.string.isRequired,
  components: PropTypes.object,
  childNameProp: PropTypes.string
};

ComponentSwitch.defaultProps = {
  childNameProp: 'name'
};