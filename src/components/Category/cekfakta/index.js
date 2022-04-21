import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, FlatList, Animated, StatusBar, ScrollView } from 'react-native'
import axios from 'axios'
import { FlatGrid } from 'react-native-super-grid'

const CekFakta = () => {
  const [tampil, setTampil] = useState([])
  useEffect(() => {
    axios.get('https://938a-180-254-67-142.ap.ngrok.io/tampil', {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {        
      setTampil(res.data.values)
    })
  },[tampil])
  return (
    <View style = {{flex: 1, backgroundColor: "#fff"}} >
      <ScrollView showsVerticalScrollIndicator = {false} >
        <ScrollView 
            showsHorizontalScrollIndicator = {false}
            pagingEnabled
            horizontal
            style = {styles.wrap}
          >
            {tampil.filter(item => item.category === "terbaru").map((item, index) => {
              return (
                <View key={index} >
                  <Image source={{uri: item.image}} style = {styles.wrap} resizeMode = "cover" />
                  <View style = {styles.headerTitle} >
                    <Text style = {styles.title} >{item.title}</Text>
                  </View>              
                </View>
              )
            })}
            
        </ScrollView>
        <FlatGrid
            data={tampil.filter(item => item.category === "fakta")}
            keyExtractor={(item) => item.id}
            itemDimension={130}
            spacing={10}
            itemsPerRow={2}
            renderItem={({item, index}) => (
              <View style={styles.itemFakta}>
                <Image source={{uri: item.image}} style={styles.imagefakta} resizeMode="cover" />
                <Text style={styles.titleFakta}>{item.title.slice(0,50)}...</Text>
                <Text style = {styles.subtitle} >BacaKoran</Text>
              </View>
            )}
          />
      </ScrollView>
    </View>
  )
}

export default CekFakta

const styles = StyleSheet.create({
  itemFakta: {
    alignSelf: "center",
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height * 0.04,
  },
  imagefakta: {
    width: Dimensions.get("window").width * 20 / 50,
    height: 100,
  },
  titleFakta: {
    fontSize: 12,
    paddingVertical: Dimensions.get("window").width * 0.01,
    fontWeight: "bold",
    color: '#000',
    maxWidth: Dimensions.get("window").width * 0.5,
  },
  subtitle: {
    fontSize: 11,
    color: "gray",
    paddingBottom: Dimensions.get("window").width * 0.01,
  },
  wrap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width * 0.6,
  },
  headerTitle: {
    position: "absolute",
    backgroundColor: "#fff",
    padding: 10,
    bottom: Dimensions.get("window").width * 0.03,
    alignSelf: 'center'
  },
  title:{
    fontSize: 12,
    fontWeight: "bold",
    maxWidth: Dimensions.get("window").width * 0.8,
  },
})