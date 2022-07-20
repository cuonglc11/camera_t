import React, { useState } from "react";
import {Image, SafeAreaView , Text, TouchableOpacity} from 'react-native'
import ImageCropPicker from "react-native-image-crop-picker";
import { postImg } from "../hook/polyin";
import createResizedImage from "./ImageResizer ";
const HomeScreen  = ({navigation}) => {
  const [img  , setImg] = useState(null)
    return (
        <SafeAreaView
        style={{flex:1, backgroundColor :"#808080" , alignItems :'center' , justifyContent:'center'}}>
                <Image source={require('../asset/img/ca.png')}
            style={{ height: 400, width: '100%' , alignSelf:"center" }} resizeMode='contain'/>
            <TouchableOpacity style={{flex : 1, alignItems :'center' , justifyContent:'center' , flexDirection:'row'}}
            onPress={() => {
                ImageCropPicker.openCamera({
                    width:  1080,
                    height: 1920 ,
                    cropping : true,
                }).then((img) => {
                  console.log('img', img)
                    console.log(img,'123123')
                    postImg(img).then((rs) => {
                      console.log(rs ,  "rs");
                      navigation.replace('Camera' , {
                          image :  img,
                          data :  rs
                      })
                    })
                })
            }}
            
            >
            <Image source={require('../asset/img/camera.png')}
            style={{ height: 200, width: 200 , alignSelf:"center" }}
          />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen