import React, { Fragment } from "react";
import { SafeAreaView, ScrollView, ScrollViewProps, StatusBar } from "react-native";
type props = {
  children?: any,
  barStyle?: 'light-content' | 'dark-content',
  statusBarColor?: string,
  bottomSafeAreaColor?: string,
  scrollType?: 'none' | 'scroll',
  translucent?: boolean,
  scrollViewPros?: ScrollViewProps
}
export const ScreenWrapper = ({
  barStyle = 'light-content',
  statusBarColor = '#000',
  bottomSafeAreaColor,
  scrollType = 'none',
  translucent = false,
  scrollViewPros,
  children
}: props) => {
  return <Fragment>
    {!translucent && <SafeAreaView style={{ backgroundColor: statusBarColor }} />}
    <StatusBar translucent={translucent} barStyle={barStyle} backgroundColor={translucent ? 'transparent' : statusBarColor} />
    {scrollType === 'none' ?
      children
      : scrollType === 'scroll' &&
      <ScrollView {...scrollViewPros}>
        {children}
      </ScrollView>
    }
    {bottomSafeAreaColor && <SafeAreaView style={{ backgroundColor: bottomSafeAreaColor }} />}
  </Fragment>
}