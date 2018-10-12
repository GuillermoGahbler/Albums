// Import library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumsList from './src/components/AlbumList';

// Create a component
const App = () => (
        <View>
        <Header headerText={'Albums'}/>
        <AlbumsList/>
        </View>
     );
  

// Render it to the device
AppRegistry.registerComponent('albumsproject', () => App);