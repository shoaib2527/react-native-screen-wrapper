
# React Native Screen Wrapper

Wrap all your pages inside react-native-screen-wrapper to avoid repetition of commonly used components for every page.




## Installation

Install with [npm](https://www.npmjs.com)

```bash
  npm install react-native-screen-wrapper
```

OR

Install with [yarn](https://yarnpkg.com)

```bash
  yarn add react-native-screen-wrapper
```
    
## Usage

```javascript
...
import { ScreenWrapper } from 'react-native-screen-wrapper'

const App = () => {
  const arr = new Array(100).fill(0)
  return <ScreenWrapper >
    <View style={{ flex: 1 }} >
       {/* Your Content here*/}
    </View>
  </ScreenWrapper>
}
export default App;
```

With Scroll Enable

```javascript
...
import { ScreenWrapper } from 'react-native-screen-wrapper'

const App = () => {
  const arr = new Array(100).fill(0)
  return <ScreenWrapper scrollType='scroll'>
    <View style={{ flex: 1 }} >
       {/* Your Content here*/}
    </View>
  </ScreenWrapper>
}
export default App;
```

With customized Status Bar Styles

```javascript
...
import { ScreenWrapper } from 'react-native-screen-wrapper'

const App = () => {
  const arr = new Array(100).fill(0)
  return <ScreenWrapper statusBarColor='white' barStyle='dark-content'>
    <View style={{ flex: 1 }} >
       {/* Your Content here*/}
    </View>
  </ScreenWrapper>
}
export default App;
```
## Props

All props are optional.
| Prop Name | Type     | Default     | Description                       |
| :-------- | :------- | :------- | :-------------------------------- |
| `barStyle`      | `string` | `light-content` | ***light-content*** OR ***dark-content***|
| `statusBarColor`      | `string` | `#000` | Status bar background color ***Note:*** This will not be effective if using default Header from [React Navigation](https://reactnavigation.org/)|
| `translucent`      | `boolean` | `false` | Pass this prop to make status bar translucent|
| `bottomSafeAreaColor`      | `string` | `undefined` | ***IOS Only*** Bottom area (Outside SafeArea) background color ***Note:*** This will not be effective if using Bottom Tab Navigation from [React Navigation](https://reactnavigation.org/)|
| `scrollType`      | `string` | `none` | ***none*** OR ***scroll***|
| `scrollViewPros`      | `object` | `null` | Pass props to Scroll View|

## Author

- [@shoaib_ahmed](https://www.github.com/shoaib2527)

## Contributors

- [@m_muheet](https://github.com/muheet707)
- [@ahmad_hasham](https://www.github.com/hasham24)
- [@saim_nasser](https://www.github.com/saimnasser)

## Support

For support, email shoaib.ahmed@emumba.com


## Buy me a Coffee

Use this link to support the author. 

[Buy Me a Coffee](https://www.buymeacoffee.com/shoaib2527)



## Used By

This project is used by the following companies:

- Develo IT Solutions
- Mypro Tech

