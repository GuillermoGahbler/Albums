import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount () {
    console.log('the component has NOW mounted!!!')
  }
  
  render() {
    return (
      <View>
        <Text>this is the Albums List!</Text>
      </View>
    );
  }
}

export default AlbumList;
