# Rentempi

This project does not use Expo.

It assumes that React Native was setup using the `react-native init` command. This is how this repo was created. Using the existing android/ios folders is not required, but using them will make the actual app named `Rentempi` which is unlikely to be tenable. You must either create a new React Native project and copy over the project files less the android/ios directories, or rename this existing project.

If creating a new project, use React Native version `0.63.0` to ensure best compability, as it is the version used to create Rentempi:

```
npx react-native init MyProject --version 0.63.0
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

If necessary, add `android/local.properties` file containing filepath to your local version of the Android SDK:

*Windows*
```
sdk.dir=%LOCALAPPDATA%\\Android\\sdk
```

*Linux*
```
sdk.dir=~/Android/Sdk
```

*Mac*
```
sdk.dir=~/Library/Android/sdk
```

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

In the file `ios/YourProjectName/Info.plist` add the following the end of the file before `</dict>`:

```
<key>UIAppFonts</key>
<array>
	<string>AntDesign.ttf</string>
	<string>Entypo.ttf</string>
	<string>EvilIcons.ttf</string>
	<string>Feather.ttf</string>
	<string>FontAwesome.ttf</string>
	<string>FontAwesome5_Brands.ttf</string>
	<string>FontAwesome5_Regular.ttf</string>
	<string>FontAwesome5_Solid.ttf</string>
	<string>Foundation.ttf</string>
	<string>Ionicons.ttf</string>
	<string>MaterialIcons.ttf</string>
	<string>MaterialCommunityIcons.ttf</string>
	<string>SimpleLineIcons.ttf</string>
	<string>Octicons.ttf</string>
	<string>Zocial.ttf</string>
	<string>Fontisto.ttf</string>
</array>
```

Run from `ios` directory:

```
pod update
```

# Notes

Use this to generate the `styles.json` file for Tailwind:

```
npx create-tailwind-rn
mv styles.json resources/tailwind
```
