import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { Fonts } from '../Font';
import Button from '~/Components/MyButton';
import Styled from 'styled-components/native';

const ButtonControl = Styled.View`
padding-top: 260px;
`;

const A0_Start = (props) => {
  
        const { navigate } = props.navigation;

        return (
            <View style = {styles.container}>
        <ImageBackground source={require('../Assets/Images/Main-picture.jpg')} style = {styles.picture}>
          <View style = {{flex:1,
          alignSelf: 'stretch', 
          backgroundColor: 'rgba(0,0,0,0.6)'}} >
            <View style = {styles.Box}>
              <View style = {styles.AllLogo}>
                <Text style = {styles.Slogan}>편하게 요리하자</Text>
                <Image source={require('../Assets/Images/Logo.png')} style = {styles.Logo } />
              </View>
              <View style = {{ 
                 alignItems: 'center',
                 padding: 10,
                 width: 300,
                 marginTop: 10,}}>
                   <ButtonControl>
              <Button title="회원가입"
                          onPress={() => navigate(
                            'Signin'
                        )}></Button>    
                        </ButtonControl>  
              </View>
            </View>
          </View>
        </ImageBackground>
    </View>
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      flexDirection: 'column', 
    },
    picture: {
      height: '100%',
    },
    Box: {
      alignItems: 'center',
    },
    AllLogo: {
      paddingTop: 200,
    },
    Slogan: {
      color: '#ffffff',
      fontFamily: Fonts.NotoSansKR_Medium,
      fontSize: 18,
    },
    Logo: {
      width: 220,
      height: 40,
    },
    Button: {
        alignItems: 'center',
        padding: 10,
        width: 300,
        marginTop: 90,
      },
  });

  export default A0_Start;