import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, FlatList, Animated, StatusBar, ScrollView } from 'react-native'
import axios from 'axios'
import { FlatGrid } from 'react-native-super-grid'
import { BannerAd, TestIds } from '@react-native-admob/admob';

const Semua = () => {
    const [tampil, setTampil] = useState([])
    const bannerRef = useRef(null);
    const [fadeAnim] = useState(new Animated.Value(1));  
    useEffect(() => {
      setInterval(() => {
        if (fadeAnim._value === 0) {
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false
          }).start();
          
        } else {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
          }).start();
        }
      }, 2000);
    }, [fadeAnim]);
  
  
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
    <View style = {styles.container} >
      <ScrollView showsVerticalScrollIndicator={false} >
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

    
          <View style = {{
            backgroundColor: "#125B50",
            padding: 10,
            flexDirection: "row",
            alignItems: 'center',
            marginTop: Dimensions.get('window').height * 0.04,
          }} >
            <Animated.Text style = {{
              fontSize: 15,
              fontWeight: "500",
              color: "#fff",
              marginRight: 10,
              opacity: fadeAnim,
            }} >Ramdhan Asik</Animated.Text>
          </View>
    
          <FlatGrid
            data={tampil.filter(item => item.category === "agama")}
            keyExtractor={(item) => item.id}
            itemDimension={130}
            spacing={10}
            itemsPerRow={2}
            renderItem={({item, index}) => (
              <View style={styles.itemAgama}>
                <Image source={{uri: item.image}} style={styles.imageAgama} resizeMode="cover" />
                <Text style={styles.titleAgama}>{item.title.slice(0,50)}...</Text>
                <Text style = {styles.subtitle} >BacaKoran</Text>
              </View>
            )}
          />
          <View style = {{
            backgroundColor: "#125B50",
            padding: 10,
            marginTop: Dimensions.get('window').height * 0.04,
            marginBottom: Dimensions.get('window').height * 0.04,
          }} >
            <Animated.Text style = {{
              fontSize: 15,
              fontWeight: "500",
              color: "#fff",
              marginRight: 10,
              opacity: fadeAnim,
            }} >Fakta Berita</Animated.Text>
            <Text style = {{
              fontSize: Dimensions.get('window').height * 0.02,
              fontWeight: "500",
              color: "#fff",
              marginRight: 10,
            }} >Berita tentang fakta fakta yang ada didunia</Text>
          </View>
    
          <FlatGrid
            data={tampil.filter(item => item.category === "fakta")}
            keyExtractor={(item) => item.id}
            itemDimension={130}
            spacing={10}
            itemsPerRow={2}
            renderItem={({item, index}) => (
              <View style={styles.itemAgama}>
                <Image source={{uri: item.image}} style={styles.imageAgama} resizeMode="cover" />
                <Text style={styles.titleAgama}>{item.title.slice(0,50)}...</Text>
                <Text style = {styles.subtitle} >BacaKoran</Text>
              </View>
            )}
          />

          <View style = {{
            paddingHorizontal: Dimensions.get('window').width * 0.05,
            paddingVertical: Dimensions.get('window').height * 0.04,
          }} >
            <Text style = {{
              fontSize: Dimensions.get('window').height * 0.03,
              color: "#000",
              fontWeight: "400"
            }} >Hi, Bagas</Text>
            <Text style = {{
              fontSize: Dimensions.get('window').height * 0.03,
              textTransform: "capitalize",
              color: "#000",
              fontWeight: "400"
            }} >Artikel Pilihan Untukmu</Text>
            <View style = {{
              flexDirection: "row",
              alignItems: "center"
            }} >
              <Text style = {{
                fontSize: Dimensions.get('window').height * 0.01,
                color: "#000",
                fontWeight: "400"
              }} >Power by {""} </Text>
              <Text style = {{
                fontSize: Dimensions.get('window').height * 0.02,
                color: "#000",
                fontWeight: "bold"
              }} >bacakoran</Text>
            </View>
          </View>

          <FlatGrid
            data={tampil.filter(item => item.category === "semua")}
            keyExtractor={(item) => item.id}
            itemDimension={130}
            spacing={10}
            itemsPerRow={2}
            renderItem={({item, index}) => (
              <View style={styles.itemAgama}>
                <Image source={{uri: item.image}} style={styles.imageAgama} resizeMode="cover" />
                <Text style={styles.titleAgama}>{item.title.slice(0,50)}...</Text>
                <Text style = {styles.subtitle} >BacaKoran</Text>
              </View>
            )}
          />

          <View style = {{
            backgroundColor: "#FF1818",
            padding: 10,
            marginTop: Dimensions.get('window').height * 0.04,
            marginBottom: Dimensions.get('window').height * 0.04,
          }} >

            <Animated.Text style = {{
              fontSize: 15,
              fontWeight: "500",
              color: "#fff",
              marginRight: 10,
              opacity: fadeAnim,
            }} >HOT ISSUE</Animated.Text>
            <Text style = {{
              fontSize: Dimensions.get('window').height * 0.02,
              fontWeight: "500",
              color: "#fff",
              marginRight: 10,
            }} >Berita yang sedang dibicarakan saat ini</Text>
          </View>
    
          <FlatGrid
            data={tampil.filter(item => item.category === "hot")}
            keyExtractor={(item) => item.id}
            itemDimension={130}
            spacing={10}
            itemsPerRow={2}
            renderItem={({item, index}) => (
              <View style={styles.itemAgama}>
                <Image source={{uri: item.image}} style={styles.imageAgama} resizeMode="cover" />
                <Text style={styles.titleAgama}>{item.title.slice(0,50)}...</Text>
                <Text style = {styles.subtitle} >BacaKoran</Text>
              </View>
            )}
          />

        </ScrollView>
    </View>
  )
}

export default Semua

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  card:{
    alignItems: 'center',
    padding: 10,
    flex: 1,
    height: Dimensions.get('window').width * 0.6,

  },
  image:{
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").width * 0.5,
    borderRadius: 10
  },
  title:{
    fontSize: 12,
    fontWeight: "bold",
    maxWidth: Dimensions.get("window").width * 0.8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: "#000"
  },
  headerTitle: {
    position: "absolute",
    backgroundColor: "#fff",
    padding: 10,
    bottom: Dimensions.get("window").width * 0.03,
    alignSelf: 'center'
  },
  itemAgama: {
    justifyContent: 'flex-end',
    height: 150,
    marginVertical: Dimensions.get("window").width * 0.05,

  },
  imageAgama: {
    width: Dimensions.get("window").width * 20 / 50,
    height: 100,
  },
  titleAgama: {
    fontSize: 12,
    paddingVertical: Dimensions.get("window").width * 0.01,
    fontWeight: "bold",
    color: '#000'
  },
  subtitle: {
    fontSize: 11,
    color: "gray",
    paddingBottom: Dimensions.get("window").width * 0.01,
  },
  avatar: {
    width: Dimensions.get("window").width * 0.12,
    height: Dimensions.get("window").width * 0.12,
    borderRadius: Dimensions.get("window").width * 0.02,
  },
  headerAvatar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 10
  },
  wrap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width * 0.6,
  },
})