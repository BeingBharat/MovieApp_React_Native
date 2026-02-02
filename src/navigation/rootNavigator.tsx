import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './bottomTabs';
import { View } from 'react-native';
import DetailView from '../screen/DetailView';



const Stack = createNativeStackNavigator();

export default function RootNavigtor() {
  return (
    



<Stack.Navigator screenOptions={{ headerShown: false }}>

<Stack.Screen name="BottomTabs" component={BottomTabs} />
    <Stack.Screen name='DetailView' component={DetailView} />
</Stack.Navigator>  

  );
}

