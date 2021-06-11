import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from './Header';

export default class Write extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#FFB7B7', margin: 0, height: 700 }}>
        <Header />

        <TextInput
          style={{
            height: 40,
            borderColor: 'white',
            borderWidth: 2,
            placeholderTextColor: 'white',
            textAlign: 'center',
            borderRadius: 30,
            margin: 10,
            color: 'white',
          }}
          placeholder="Title of The Story"
          onChangeText={(text) => {
            this.setState({
              titleTxt: text,
            });
          }}
        />

        <TextInput
          style={{
            height: 40,
            borderColor: 'white',
            borderWidth: 2,
            placeholderTextColor: 'white',
            textAlign: 'center',
            borderRadius: 30,
            margin: 10,
            color: 'white',
          }}
          placeholder="Author of The Story"
        />

        <TextInput
          style={{
            height: 200,
            borderColor: 'white',
            borderWidth: 2,
            placeholderTextColor: 'white',
            textAlign: 'center',
            borderRadius: 30,
            margin: 10,
            color: 'white',
          }}
          placeholder="Type the story here ..."
        />
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginBottom: 60,
            backgroundColor: '#FFD700',
            borderRadius: 50,
            borderWidth: '2px',
            padding: 10,
            borderColor: 'white',
            width:150,
            textAlign:'center'
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'cursive',
            }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
