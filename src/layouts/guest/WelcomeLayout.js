/**
 * Global Imports
*/

import React, { Fragment, useState } from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Local Imports
*/

import { AppConfig } from '~/config/App';
import { Text, TouchableOpacity, View } from '~/components/TailwindCss';

/**
 * Locals
*/

/**
 * 
 */
function AboutModal(props) {
  return (
    <Modal isVisible={ props.isVisible }>
      <View tailwind='flex-auto items-center'>
        <Text tailwind='text-white text-3xl'>
          { AppConfig.name } v{ AppConfig.version }
        </Text>
        <Text tailwind='mt-4 text-white text-xl leading-7'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem leo, facilisis ut
          augue vel, suscipit sagittis lacus. Suspendisse tempor ornare commodo. Duis eu
          rhoncus ipsum, eu mollis nisi. Quisque posuere tincidunt sollicitudin.
        </Text>
        <TouchableOpacity onPress={ props.onClose }>
          <Text tailwind='mt-4 py-2 px-4 text-white text-xl rounded-lg border border-white'>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

/**
 * Exports
*/

/**
 * 
 */
export function WelcomeLayout(props) {
  /** States **/

  const [ isAboutVisible, setIsAboutVisible ] = useState(false);

  /** Output **/

  return (
    <Fragment>
      <View tailwind='flex flex-auto justify-center bg-white'>
        { props.children }
      </View>

      <TouchableOpacity tailwind='absolute right-0 m-4' onPress={ () => setIsAboutVisible(true) }>
        <Icon name='question-circle' size={ 24 } color='white' />
      </TouchableOpacity>

      <AboutModal
        isVisible={ isAboutVisible }
        onClose={ () => setIsAboutVisible(false) }
      />
    </Fragment>
  );
}