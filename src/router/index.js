import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import { Beranda, Detil } from '../pages'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// const MyTab = () => {
//   return (
//   <Tab.Navigator
//       initialRouteName="Feed"
//       activeColor="#000"
//       barStyle={{ backgroundColor: '#fff' }}
//     >
//       <Tab.Screen
//         name="Beranada"
//         component={Beranda}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Buat Berita"
//         component={BuatBerita}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="plus" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Cari"
//         component={Search}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <AntDesign name="search1" color={color} size={26} />
//           ),
//         }}
//       />    
//     </Tab.Navigator>
//   )
// }

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name = "Home" component={Beranda} options={{headerShown: false}} />
      <Stack.Screen name = "Detil" component={Detil} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default Router