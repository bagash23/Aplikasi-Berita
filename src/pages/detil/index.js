import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'

const Detil = ({route}) => {
    const {
        id,
        title,
        image,
        category,
        deskripsi
    } = route.params
  return (
    <View style = {styles.container} >
        <ScrollView showsHorizontalScrollIndicator = {false} >
            <View style = {styles.contentContainer} >
                <Text style = {{
                    fontSize: Dimensions.get('window').width / 30,
                    fontWeight: 'bold',
                    color: '#FF1818',
                    textTransform: "capitalize"
                }} >{category}</Text>
                <Text style = {{
                    fontSize: Dimensions.get('window').width / 25,
                    fontWeight: 'bold',
                    color: '#000',
                    maxWidth: Dimensions.get('window').width / 1,
                    marginVertical: Dimensions.get('window').height / 50
                }} >{title}</Text>
                <Text style = {styles.subtitle} >BacaKoran</Text>
            </View>
                <Image source={{uri: image}} style = {styles.imgBerita} resizeMode = "contain"  />
                <Text style = {{
                    fontSize: Dimensions.get('window').width / 25,  
                    fontWeight: '400',
                    color: '#000',
                    maxWidth: Dimensions.get('window').width / 1,
                    margin: Dimensions.get("window").width * 0.05,
                }} >{deskripsi}</Text>
        </ScrollView>
    </View>
  )
}

export default Detil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    contentContainer: {
        margin: Dimensions.get("window").width * 0.05,
    },
    imgBerita: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.4,
    },
    subtitle: {
        fontSize: 11,
        color: "gray",
        paddingBottom: Dimensions.get("window").width * 0.01,
    },
})