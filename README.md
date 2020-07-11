# Rentempi

This project does not use Expo. It assumes that React Native was setup using the `npx react-native init` command.

# Dependencies

Clone `package.json` from the Rentempi repo or manually install the following dependencies:

```
@react-native-community/async-storage
@react-native-community/masked-view
@react-native-community/picker
@react-navigation/bottom-tabs
@react-navigation/native
@react-navigation/stack
axios
babel-plugin-module-resolver
formik
react-native-gesture-handler
moment
moment-timezone
react-native-dash
react-native-modal
react-native-reanimated
react-native-safe-area-context
react-native-screens
react-native-svg
react-native-vector-icons
tailwindcss
tailwind-rn
```

As `yarn` command:

```
yarn add @react-native-community/async-storage @react-native-community/masked-view @react-native-community/picker @react-navigation/bottom-tabs @react-navigation/native @react-navigation/stack axios babel-plugin-module-resolver formik react-native-gesture-handler moment moment-timezone react-native-dash react-native-modal react-native-reanimated react-native-safe-area-context react-native-screens react-native-svg react-native-vector-icons tailwindcss tailwind-rn
```

# Setup

### React Native Vector Icons

#### Android

In the file `android/app/build.gradle` add the following after `apply plugin: "com.android.application"`:

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

#### iOS

In the file `ios/Podfile` add the following after `use_react_native!(:path => config["reactNativePath"])`:

```
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```
