import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import { connectInfiniteHits } from 'react-instantsearch-native';

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    padding: 10,
    flexDirection: 'column',
  },
  titleText: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
  contentContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryItem: {
    width: '90%',
    height: 100,
    padding: 20,
    marginBottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'blue'
  },
  categoryText: {
    fontSize: 18,
    color: 'white'
  }
});

const InfiniteHits = ({ hits, hasMore, refine }) => {
  return (
    <FlatList
      data={hits}
      keyExtractor={item => item.objectID}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={() => hasMore && refine()}
      renderItem={({ item }) => (
        <TouchableHighlight onPress={(item) => {this.props.onPress(item)}}>
          <View style={styles.categoryItem}>
          {
            console.log('item: ', item.featured_image_url_100)
          }
          <Image style={styles.imagestyle} source={{uri:`${item.featured_image_url_100}`}} />
            <Text style={styles.categoryText}>
              {item.title}
            </Text>
          </View>
        </TouchableHighlight>
      )}
  )
}

InfiniteHits.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectInfiniteHits(InfiniteHits);
