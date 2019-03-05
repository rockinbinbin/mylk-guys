import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight
} from 'react-native';
import { WebBrowser } from 'expo';

import { Navbar } from '../../components/Navbar';

export default class HomeScreen extends React.Component {

  state = {
    categories: [{'name':'Bakery'},
                {'name': 'Cheese'},
                {'name': 'Frozen'},
                {'name': 'Meat & Seafood'},
                {'name': 'Milk, Yogurt & Eggs'},
                {'name': 'Mylk Exclusives'},
                {'name': 'Pantry'},
                {'name': 'Personal Care'},
                {'name': 'Prepared'},
                {'name': 'Snacks'},
                {'name': 'Specialty'},
                {'name': 'Sweets'}
              ]
  }

  static navigationOptions = {
    header: null,
  };

  onPressCategory = (i) => {
    // navigate('Profile', {name: 'Jane'})
  }

  render() {
    const categoryViews =
      this.state.categories.map((category, i) => {
      return (
        <TouchableHighlight onPress={() => {this.onPressCategory(i)}} style={styles.categoryItem} key={i}>
            <Text style={styles.categoryText}>
              {category.name}
            </Text>
        </TouchableHighlight>
      )
    })

    return (
      <View style={styles.container}>
        <Navbar></Navbar>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {categoryViews}
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 10,
  },
  tabBarInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  categoryItem: {
    width: '100%',
    height:60,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryText: {
    fontSize: 18
  }
});
