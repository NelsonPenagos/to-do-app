// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';

// create a component
class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Header
        </Text>
        <TextInput
          style={styles.texto}
          placeholder="Escribe la tarea..."
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#546e7a',
  },
  texto: {
    paddingHorizontal: 16,
  },
});

// make this component available to the app
export default Header;
