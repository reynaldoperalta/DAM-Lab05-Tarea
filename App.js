import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConexionFetch from './componentes/conexionFetch/ConexionFetch';
import Detalles from './componentes/Detalles/Detalles';
import Login from './componentes/Login/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Movies" component={ConexionFetch} />
        <Stack.Screen name="Detalles" component={Detalles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;