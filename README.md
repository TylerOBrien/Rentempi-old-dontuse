# Rentempi

This project does not use Expo.

It assumes that React Native was setup using the `npx react-native init` command. This is how this repo was created. Using the existing android/ios folders is not required, but using them will make the actual app named `Rentempi` which is unlikely to be tenable. You must either create a new React Native project or rename this existing one.

Use React Native version `0.63.0` to ensure best compability, as it is the version used to create Rentempi:

```
react-native init MyProject --version 0.63.0
```

# Dependencies

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

### General

#### Android

Nothing.

#### iOS

Run from project root:

```
npx pod-install
```

---

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
