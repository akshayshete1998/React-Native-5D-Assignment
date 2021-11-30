/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { CharacterListScreen } from './src/containers/characterList-screen/index'
import { FavoriteCharactersScreen } from './src/containers/favorite-characters-screen/index'
import { Provider } from 'react-redux';
import Store from './src/redux/store'
import { CharactersDetailsScreen } from './src/containers/characters-details-screen/index'
import { SearchScreen } from './src/containers/search-screen/index'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CharacterList" component={CharacterListScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={CharactersDetailsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Favorites" component={FavoriteCharactersScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default App;
