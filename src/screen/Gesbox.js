import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, SafeAreaView, Text, ImageBackground } from 'react-native'
import TapJs from "./Taps";
import Svg, { Line } from "react-native-svg";
import { getPonin } from "../hook/polyin";
const Gesbox = (route, navigation) => {
  const { bl, br, tl, tr } = route.route.params.data;
  const [show, setShow] = useState(false)
  const [crop, setCrop] = useState(false)
  const [point, setPoint] = useState({ x: 0, y: 0 })
  // const [point1, setPoint1] = useState({ x: tl[0], y: tl[1] })
  // const [point2, setPoint2] = useState({ x2: tr[0], y2: tr[1] })
  // const [point3, setPoint3] = useState({ x3: bl[0], y3: bl[1] })
  // const [point4, setPoint4] = useState({ x4: br[0], y4: br[1] })
    const [point1, setPoint1] = useState({ x: 50, y: 50 })
  const [point2, setPoint2] = useState({ x:50 , y: 250 })
  const [point3, setPoint3] = useState({ x: 250, y: 50 })
  const [point4, setPoint4] = useState({ x: 250, y: 250 })
  const [maxWidth, setMaxWidth] = useState(0)
  const [maxHeight, setMaxHeight] = useState(0)
  const img = route.route.params.image
  console.log(img.size, "size");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#808080" }}>
      <View style={{ height: 56, position: 'absolute', top: 0, left: 0, backgroundColor: 'blue', flexDirection: 'row', zIndex: 9999, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={{ marginStart: 10, justifyContent: 'center', position: 'absolute', left: 0 }}
          onPress={() => route.navigation.replace('Home')}
        >
          <Image source={require('../asset/img/back.png')} style={{ width: 30, height: 30 }}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <Text style={{ color: '#fff', fontSize: 26, fontWeight: 'bold', alignSelf: 'center' }}>Image Crop</Text>

      </View>
      <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
      >
        <ImageBackground
          source={{ uri: img.path }} style={{ height: 500, width: 300 , zIndex:1 }}
        >
          <View style={{ flex: 1, position: 'absolute' , zIndex:3 }}>
          <TapJs
              onDragEnd={boxXY => {
                setPoint1({ x: boxXY.x, y: boxXY.y })
                // setPoint({ x: boxXY.x - 42, y: boxXY.y - 42 })

                setShow(boxXY.show)
              }}
              limitationWidth={300} limitationHeight={400} x={point1.x} y={point1.y}    >
              <View style={{ width: 15, height: 15, backgroundColor: '#fff', borderColor: '#00FA9A', borderWidth: 2, borderRadius: 20 }} />
            </TapJs>
            <TapJs
              onDragEnd={boxXY => {
                setPoint1({ x: boxXY.x, y: boxXY.y })
                setPoint({ x: boxXY.x - 42, y: boxXY.y - 42 })

                setShow(boxXY.show)
              }}
              limitationWidth={300} limitationHeight={400} x={point2.x} y={point2.y}    >
              <View style={{ width: 15, height: 15, backgroundColor: '#fff', borderColor: '#00FA9A', borderWidth: 2, borderRadius: 20 }} />
            </TapJs>
            <TapJs
              onDragEnd={boxXY => {
                setPoint1({ x: boxXY.x, y: boxXY.y })
                setPoint({ x: boxXY.x - 42, y: boxXY.y - 42 })

                setShow(boxXY.show)
              }}
              limitationWidth={300} limitationHeight={400} x={point3.x} y={point3.y}    >
              <View style={{ width: 15, height: 15, backgroundColor: '#fff', borderColor: '#00FA9A', borderWidth: 2, borderRadius: 20 }} />
            </TapJs>
            <TapJs
              onDragEnd={boxXY => {
                setPoint1({ x: boxXY.x, y: boxXY.y })
                setPoint({ x: boxXY.x - 42, y: boxXY.y - 42 })

                setShow(boxXY.show)
              }}
              limitationWidth={300} limitationHeight={400} x={point4.x} y={point4.y}    >
              <View style={{ width: 15, height: 15, backgroundColor: '#fff', borderColor: '#00FA9A', borderWidth: 2, borderRadius: 20 }} />
            </TapJs>
          </View>
          <View style={{ position: 'absolute', zIndex: 2 }}>
            <Svg width={300} height={500} >
              <Line x1={point1.x +7} y1={point1.y +7} x2={point2.x +7} y2={point2.y + 7} stroke="#00FA9A" strokeWidth="2" />
            </Svg>
          </View>
          <View style={{ position: 'absolute', zIndex: 2 }}>
            <Svg width={300} height={500} >
              <Line x1={point1.x +7} y1={point1.y +7} x2={point3.x +7} y2={point3.y + 7} stroke="#00FA9A" strokeWidth="2" />
            </Svg>
          </View>
          <View style={{ position: 'absolute', zIndex: 2 }}>
            <Svg width={300} height={500} >
              <Line x1={point3.x +7} y1={point3.y +7} x2={point4.x +7} y2={point4.y + 7} stroke="#00FA9A" strokeWidth="2" />
            </Svg>
          </View>
          <View style={{ position: 'absolute', zIndex: 2 }}>
            <Svg width={300} height={500} >
              <Line x1={point2.x +7} y1={point2.y +7} x2={point4.x +7} y2={point4.y + 7} stroke="#00FA9A" strokeWidth="2" />
            </Svg>
          </View>
        </ImageBackground>
      </View>
      {/* <View style={{ width: '100%', height: 56 , alignItems: 'center' , justifyContent:'center', alignSelf:'center' ,position :'absolute' , bottom :  0 , zIndex:9999 ,backgroundColor:'red'}}>
        <View onLayout={(ev) => {
          setMaxWidth(ev.nativeEvent.layout.width)
          setMaxHeight(ev.nativeEvent.layout.height)
        }} style={{ width: 300, height: 700 ,alignItems:'center',justifyContent:'center' , position: 'relative'}}>
          <Image
            resizeMode="contain"
            source={{ uri: img.path }} style={{ width: '100%', height: '100%'}
          }
          onLayout = {(ev) =>{
            console.log(ev.nativeEvent.layout.height , "he");
            console.log(ev.nativeEvent.layout.width ,'wuth') ;
          }}

          />
          
          <View style={{ flex: 1, zIndex: 5, position: 'absolute' }}>
            <TapJs
              onDragEnd={boxXY => {
                setPoint1({ x: boxXY.x, y: boxXY.y })
                setPoint({ x: boxXY.x - 42, y: boxXY.y - 42 })

                setShow(boxXY.show)
              }}
              limitationWidth={maxWidth} limitationHeight={maxHeight} x={point1.x} y={point1.y} height={100} width={100}   >
              <View style={{ width: 15, height: 15, backgroundColor: '#fff', borderColor: '#00FA9A', borderWidth: 2, borderRadius: 20 }} />
            </TapJs>
            <TapJs
              onDragEnd={boxXY => {
                setShow(boxXY.show)

                setPoint2({ x2: boxXY.x, y2: boxXY.y })
                setPoint({ x: boxXY.x - 42, y: boxXY.y - 42 })

              }}
              limitationWidth={maxWidth} limitationHeight={maxHeight} x={point2.x2} y={point2.y2} height={100} width={100}   >
              <View style={{ width: 15, height: 15, backgroundColor: '#fff', borderColor: '#00FA9A', borderWidth: 2, borderRadius: 20 }} />

            </TapJs>
            <TapJs
              onDragEnd={boxXY => {
                setShow(boxXY.show)
                setPoint3({ x3: boxXY.x, y3: boxXY.y })
                setPoint({ x: boxXY.x - 42, y: boxXY.y - 42 })

              }}
              limitationWidth={maxWidth} limitationHeight={maxHeight} x={point3.x3} y={point3.y3} height={100} width={100}   >
              <View style={{ width: 15, height: 15, backgroundColor: '#fff', borderColor: '#00FA9A', borderWidth: 2, borderRadius: 20 }} />

            </TapJs>
            <TapJs
              onDragEnd={boxXY => {

                setShow(boxXY.show)

                setPoint4({ x4: boxXY.x, y4: boxXY.y })
                setPoint({ x: boxXY.x - 42, y: boxXY.y - 42 })

              }}
              limitationWidth={maxWidth} limitationHeight={maxHeight} x={point4.x4} y={point4.y4} height={100} width={100}   >
              <View style={{ width: 15, height: 15, backgroundColor: '#fff', borderColor: '#00FA9A', borderWidth: 2, borderRadius: 20 }} />

            </TapJs>
          </View>

          <View style={{ position: 'absolute', zIndex: 4 }}>
            <Svg width={maxWidth} height={maxHeight} >
              <Line x1={point1.x + 6} y1={point1.y + 6} x2={point2.x2 + 6} y2={point2.y2 + 6} stroke="#00FA9A" strokeWidth="2" />
            </Svg>

          </View>
          <View style={{ position: 'absolute', zIndex: 4 }}>
            <Svg width={maxWidth} height={maxHeight} >
              <Line x1={point1.x + 6} y1={point1.y + 6} x2={point3.x3 + 6} y2={point3.y3 + 6} stroke="#00FA9A" strokeWidth="2" />
            </Svg>

          </View>
          <View style={{ position: 'absolute', zIndex: 4 }}>
            <Svg width={maxWidth} height={maxHeight} >
              <Line x1={point2.x2 + 6} y1={point2.y2 + 6} x2={point4.x4 + 6} y2={point4.y4 + 6} stroke="#00FA9A" strokeWidth="2" />
            </Svg>

          </View>
          <View style={{ position: 'absolute', zIndex: 4 }}>
            <Svg width={maxWidth} height={maxHeight} >
              <Line x1={point3.x3 + 6} y1={point3.y3 + 6} x2={point4.x4 + 6} y2={point4.y4 + 6} stroke="#00FA9A" strokeWidth="2" />
            </Svg>
          </View>
        </View>
      
        {
          show == true ?  (
            <View style={[{ position: 'absolute', overflow: "hidden", width: 100, height: 100, right: 50, bottom: 0, alignSelf:'flex-start' }]}>
            <View style={[{ position: 'absolute' },
            {
              transform: [
                {
                  translateX: -(point.x)
                },
                { translateY: -(point.y) }, { scale: 1 }
              ]
  
            }
            ]}>
              <Image source={{ uri: img.path }} style={[{ height: 400, width: 300, position: 'absolute' }]} />
  
              <View style={{ position: 'absolute', zIndex: 4 }}>
                <Svg width={maxWidth} height={maxHeight} >
                  <Line x1={point1.x + 6} y1={point1.y + 6} x2={point2.x2 + 6} y2={point2.y2 + 6} stroke="#00FA9A" strokeWidth="2" />
                </Svg>
  
              </View>
              <View style={{ position: 'absolute', zIndex: 4 }}>
                <Svg width={maxWidth} height={maxHeight} >
                  <Line x1={point2.x2 + 6} y1={point2.y2 + 6} x2={point4.x4 + 6} y2={point4.y4 + 6} stroke="#00FA9A" strokeWidth="2" />
                </Svg>
  
              </View>
              <View style={{ position: 'absolute', zIndex: 4 }}>
                <Svg width={maxWidth} height={maxHeight} >
                  <Line x1={point2.x2 + 6} y1={point2.y2 + 6} x2={point4.x4 + 6} y2={point4.y4 + 6} stroke="#00FA9A" strokeWidth="2" />
                </Svg>
  
              </View>
              <View style={{ position: 'absolute', zIndex: 4 }}>
                <Svg width={maxWidth} height={maxHeight} >
                  <Line x1={point3.x3 + 6} y1={point3.y3 + 6} x2={point4.x4 + 6} y2={point4.y4 + 6} stroke="#00FA9A" strokeWidth="2" />
                </Svg>
              </View>
              <View style={{ position: 'absolute', zIndex: 4 }}>
                <Svg width={maxWidth} height={maxHeight} >
                  <Line x1={point1.x + 6} y1={point1.y + 6} x2={point3.x3 + 6} y2={point3.y3 + 6} stroke="#00FA9A" strokeWidth="2" />
                </Svg>
              </View>
            </View>
          </View>
          ) : null
        }
      </View> */}
      <View style={{ backgroundColor: 'black', flexDirection: 'row', height: 80, width: '100%', position: 'absolute', bottom: 0, left: 0, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 40 }}>
        <TouchableOpacity
          onPress={() => {
            getPonin(point1, point2, point3, point4)
            // route.navigation.replace('CameraUI')
            // console.log(11111111);
          }}
          style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../asset/img/crop_1.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Crop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            getPonin(point1, point2, point3, point4)
            // route.navigation.replace('CameraUI')
            // console.log(11111111);
          }}
          style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../asset/img/n.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Next</Text>
        </TouchableOpacity>


      </View>


    </SafeAreaView>
  )
}
export default Gesbox