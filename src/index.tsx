import React, { Fragment } from 'react'
import {
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StatusBar,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
type props = {
  children?: any
  barStyle?: 'light-content' | 'dark-content' | 'default'
  statusBarColor?: string
  bottomSafeAreaColor?: string
  scrollType?: 'none' | 'scroll' | 'keyboard'
  translucent?: boolean
  scrollViewProps?: ScrollViewProps
}
export const ScreenWrapper = ({
  barStyle = 'light-content',
  statusBarColor = '#000',
  bottomSafeAreaColor,
  scrollType = 'none',
  translucent = false,
  scrollViewProps,
  children,
}: props) => {
  return (
    <Fragment>
      {!translucent && (
        <SafeAreaView style={{ backgroundColor: statusBarColor }} />
      )}
      <StatusBar
        translucent={translucent}
        barStyle={barStyle}
        backgroundColor={translucent ? 'transparent' : statusBarColor}
      />
      {scrollType === 'scroll' ? (
        <ScrollView {...scrollViewProps}>{children}</ScrollView>
      ) : scrollType === 'keyboard' ? (
        <KeyboardAwareScrollView {...scrollViewProps}>
          {children}
        </KeyboardAwareScrollView>
      ) : (
        children
      )}
      {bottomSafeAreaColor && (
        <SafeAreaView style={{ backgroundColor: bottomSafeAreaColor }} />
      )}
    </Fragment>
  )
}
