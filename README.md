
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
| `statusBarColor`      | `string` | `#000` | Status bar background color|
| `bottomSafeAreaColor`      | `string` | `undefined` | ***IOS Only*** Bottom area (Outside SafeArea) background color|
| `scrollType`      | `string` | `none` | ***none*** OR ***scroll***|
| `translucent`      | `boolean` | `false` | Pass this prop to make status bar translucent|
| `scrollViewPros`      | `object` | `null` | Pass props to Scroll View|

## Author

- [@shoaib_ahmed](https://www.github.com/shoaib2527)


## Support

For support, email shoaib.ahmed@emumba.com


## Buy me a Coffee

Use this link to support the author. 

[Buy Me a Coffee](https://www.buymeacoffee.com/shoaib2527)


