import React from 'react'
import { StyleSheet, Animated, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { CekFakta, Hot, Kesehatan, LifeStyle, Olahraga, Regional, Semua, Teknologi } from '../components/Category'

const Tab = createMaterialTopTabNavigator()
const  MyTobBar = ({ state, descriptors, navigation, position }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator = {false} >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

      
          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ marginBottom: Dimensions.get("window").height / 50 , flex: 1, width: Dimensions.get('window').width * 20 / 50, }}
            >
              {/* <Animated.View style = {{backgroundColor: isFocused ? "#9599a6" : null, borderWidth: 1, borderRadius: 25, paddingVertical: 5, width: "100%"}} > */}
                <Animated.Text style={{ fontWeight: isFocused ? "bold" : "normal", fontSize: 13, textAlign: 'center', color: isFocused ? "#151515" : "gray",   }}>
                  {label}
                </Animated.Text>
              {/* </Animated.View> */}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
const TopNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTobBar {...props} />}  >
      <Tab.Screen name="News" component={Semua} />
      <Tab.Screen name="Cek Fakta" component={CekFakta} />
      <Tab.Screen name="Hot" component={Hot} />
      <Tab.Screen name="Kesehatan" component={Kesehatan} />
      <Tab.Screen name="LifeStyle" component={LifeStyle} />
      <Tab.Screen name="Olahraga" component={Olahraga} />
      <Tab.Screen name="Regional" component={Regional} />
      <Tab.Screen name="Teknologi" component={Teknologi} />
    </Tab.Navigator>
    
  )
}

export default TopNavigator

const styles = StyleSheet.create({})