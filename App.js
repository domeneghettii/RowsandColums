import { createNagativeStackNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNagativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="2TDS1" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}