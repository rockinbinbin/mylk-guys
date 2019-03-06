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
import InfiniteHits from '../../src/InfiniteHits';

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
    // navigate('Menu', {name: this.state.categories[i]})
  }

  toggleHeart = (i) => {
    // let updatedCategories = this.state.categories
    // updatedCategories[i].heart = updatedCategories.heart && !updatedCategories[i].heart
    // this.setState({ categories: updatedCategories })
  }

  render() {
    const categoryViews =
      this.state.categories.map((category, i) => {
      return (
        <InstantSearch
          searchClient={searchClient}
          indexName="products_production"
          root={this.root}
        >
          <InfiniteHits onPress={(i) => {this.onPressCategory(i)}} />
        </InstantSearch>
      )
    })

    return (
      <View style={styles.container}>
        <Navbar></Navbar>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContainer}>
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
    marginTop: 50,
    width: '100%'
  },
  scrollViewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  categoryItem: {
    width: 150,
    height:150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'green',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10
  },
  categoryText: {
    fontSize: 18,
    color: 'white'
  }
});
