import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from "../HomeScreen";
import Gesbox from "../Gesbox";
import { CameraUI } from "../CameraUI";
const HomeNavigation = props => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}
            initialRouteName='Home'
            >
                <Stack.Screen component={HomeScreen} name="Home" />
                <Stack.Screen component={Gesbox} name="Camera" />
                <Stack.Screen component={CameraUI} name="CameraUI" />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default HomeNavigation