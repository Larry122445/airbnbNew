import { Link } from 'expo-router';
import React from 'react'
import { Text, View, Image, ImageBackground, StyleSheet, Pressable } from 'react-native'

const image = ('@/assets/images/Rectangle 46.png');

const signup = () =>{
    return (
      <View style = {styles.container}>
        <ImageBackground source={require(image)} resizeMode='cover'
        style = {styles.image}>
          
        </ImageBackground>
       <View style = {styles.container2}>


        <Text style ={styles.message}
          >Small mobile application development project by Group 33. Live, Study and Thrive</Text>
          <Text style = {styles.message2}>ALREADY HAVE AN ACCOUNT?</Text>

          <Pressable >
            <Link href= {'./Account'} style = {styles.loginButton}>LOG IN</Link>
          </Pressable>

          </View>
          <Image source={require('@/assets/images/Ellipse 13.png')} style = {styles.circle}></Image>
          <Image source={require('@/assets/images/home.png')} style = {styles.home}></Image>
          <Text style ={styles.welcomeText}>Welcome To {"\n"}
            HomeHive!</Text>

          <Pressable style ={styles.signupButton}>
            <Text style ={styles.signupTxt}>SIGN UP</Text>  
            <Link href = {'/(modals)/Auth'}></Link>  
          </Pressable>

          

          
        
      </View>
  )
  
}

export default signup

const styles = StyleSheet.create({
  container: {
    flex : 1,

  },
  image: {
    justifyContent : "center",
    height : 485,
    position : 'relative'
  },
  container2: {
    backgroundColor : 'white',
    flex : 2,
    justifyContent : 'flex-end',
    height : '67%',
    width: '100%',
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    position : 'absolute',
    bottom : 0
  },
  circle: {
    width : 97,
    height : 97,
    top : -188,
    left : 141
  },
  home: {
    width : 35,
    height : 35,
    top : -257,
    left : 173
  },
  welcomeText: {
    width : 194,
    height : 94,
    top : -220,
    left : 99,
    fontFamily : 'K2D',
    fontSize : 36,
    textAlign : 'center',
    color : '#2D0C57',
    fontWeight : '800'
  },
  signupButton: {
    width : '90%',
    height : 56,
    left : 20,
    bottom : 130,
    backgroundColor : '#044D5B',
    borderRadius : 14
  },
  signupTxt: {
    top : 20,
    fontSize : 16,
    fontWeight : '500',
    textAlign : 'center',
    color : 'white',
    height : 26.48,
    fontFamily : 'K2D'
  },
  message: {
    fontFamily : 'K2D',
    height : 78,
    textAlign : 'center',
    color : '#9586A8',
    bottom : 140,
    fontSize : 17
  },
  message2: {
    fontFamily : 'K2D',
    fontWeight : '400',
    fontSize : 16,
    textAlign : 'center',
    bottom : 20
  },
  loginButton: {
    textAlign: 'center',
    color : '#4EC7FD',
    fontSize : 16,
    fontWeight : '400',
    fontFamily : 'K2D',
    bottom : 20
  }
})
