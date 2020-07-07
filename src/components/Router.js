/**
 * Global Imports
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Exports
*/

/**
 * 
 */
export function Router(props) {
  return (
    <props.container>
      <props.stack.Navigator
        screenOptions={ props.screenOptions }
        initialRouteName={ props.initialRouteName }
      >
        {
          Object.entries(props.screens).map(([name, screen], index) => (
            <props.stack.Screen
              key={ index }
              name={ name }
              component={ screen }
            />
          ))
        }
      </props.stack.Navigator>
    </props.container>
  );
}

Router.propTypes = {
  container: PropTypes.func.isRequired,
  screens: PropTypes.object.isRequired,
  screenOptions: PropTypes.object,
  initialRouteName: PropTypes.string
};