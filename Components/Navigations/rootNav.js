import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../../Pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
      <View>
        <Homepage />
      </View>
    );
  }

  function Sports() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

export default function TabNavigations()
{
    return(
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name = "Top" component={HomeScreen} options={{headerShown: false,
                  tabBarIcon: () => <Ionicons name="home" size={24} color="white" />}}  />
              <Tab.Screen name = "Sports" component={Sports}  options={{headerShown: false, 
                  tabBarIcon: () => <Ionicons name="football" size={24} color="white" /> }}/>
          </Tab.Navigator>
        </NavigationContainer>

    );



}
