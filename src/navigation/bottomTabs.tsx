import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from '../screen/Home';
import Upcoming from '../screen/Upcoming';
import Search from '../screen/Search';
import Download from '../screen/Download';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: styles.tabBar,

      tabBarIcon : ({color,size}) => {

     let name = 'home'
      if(route.name === 'Home'){  

        name = 'home-outline'
      } if(route.name === 'Upcoming'){
        name = 'calendar-outline'
      } if(route.name === 'Search'){
        name = 'search-outline'
      } if(route.name === 'Downloads'){
        name = 'download-outline'
      }

        return <Icon name={name} size={size} color={color} />;
      },


      
      headerShown: false,
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Upcoming" component={Upcoming} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Downloads" component={Download} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopWidth: 0,
  },
});
