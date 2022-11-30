import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ComercioComponent from './src/componentes/comercio';
import Home from './src/componentes/home';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Comercio" component={ComercioComponent} />
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default App;