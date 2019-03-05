import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export class Navbar extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>
            Account
          </Text>
          <Text style={styles.middleText}>
            Shopping
          </Text>
          <Text>
            Invite
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
    position: 'absolute',
    paddingLeft: 20,
    paddingRight: 20,
    top: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'white'
  },
  middleText: {
    fontSize: 24
  }
});
