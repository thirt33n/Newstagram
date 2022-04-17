import NavigationBar from 'react-native-navbar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, GrandHotel_400Regular} from '@expo-google-fonts/grand-hotel';

const titleConfig = {
    title: 'Newstagram',
  };

export default function  NavigatorBar(){

    let [fontsLoaded] = useFonts({
        GrandHotel_400Regular,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }    

        return(
            <View style={styles.container}>
              <Text style={styles.fontss}>Newstagram</Text>
            </View>
        )




};


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#C40233',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5%',
        padding: '4%',
        width: '100%',
        height: '9%',
        borderRadius: 10,
        position: 'relative'
        
    },
    fontss: {
        color:'white',
        fontSize: 30,
        fontWeight: '100',
        fontFamily: 'GrandHotel_400Regular',

    }

});