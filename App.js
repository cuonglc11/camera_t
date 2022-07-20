/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CameraUI } from './src/screen/CameraUI';
import { TestTap, PanView } from './src/screen/TestTap';
import { TapJs } from './src/screen/Taps';
import Gesbox from './src/screen/Gesbox';
import HomeNavigation from './src/screen/navigation/HomeNavigation';
const App = () => {
  // console.log(store.getState() , "store");
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <Gesbox /> */}
        <HomeNavigation/>
        {/* <CameraUI/> */}
      </GestureHandlerRootView>

  );
};

export default App;
