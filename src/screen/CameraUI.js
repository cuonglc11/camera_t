import React, { useState, useEffect } from "react"
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native'
import Svg, { Line } from "react-native-svg"
import TapJs from "./Taps"
export const CameraUI = ({route}) => {
  // console.log(route.params.image.path , "dd");
  // const img = route?.params?.image?.path 
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor :"#696969" }}>
      <Image
       source={require('../asset/img/logo.png')} style={{height : '20%' , width :'100%'}} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',

  }
})