import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


class AlbumList extends Component {
  //this state = is to initialize not update, if update use this.setState
  state = { albums: [] };
  
  componentWillMount () {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }
  
  render() {
    console.log(this.state);
    return (
      <View>
        <Text>this is the Albums List!</Text>
      </View>
    );
  }
}

export default AlbumList;
