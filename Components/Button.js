import React,{ useState,useEffect } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';




export default function Button(){
        
        
    const  [color,setColor] = useState('black');
    const [icon,setIcon] = useState('heart-outline')
    function changeColor(){
        if(color == 'black'){
            setColor('#C40233');
            setIcon('heart-sharp');
        }
        else{    
            setIcon('heart-outline');
            setColor('black');
        }
        }
        return(
            <View>
                <Ionicons name={icon} size={30} color={color} onPress={changeColor} />
            </View>
        )

}