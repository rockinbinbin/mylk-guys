import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export class Navbar extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>
            one
          </Text>
          <Text>
            two
          </Text>
          <Text>
            three
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    // position: 'absolute',
    width: '100%',
    height: 20,
    backgroundColor: 'green'
  }
});
