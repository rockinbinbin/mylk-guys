import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connectInfiniteHits } from 'react-instantsearch-native';

import Heart from '../assets/images/heart.svg'
import HeartFilled from '../assets/images/heart-filled.svg'

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
  categoryItem: {
    // width: '90%',
    height: 100,
    padding: 20,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderRadius: 20,
    // backgroundColor: 'blue'
  },
  categoryText: {
    fontSize: 18,
    color: 'black'
  },  container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 50
    },
    contentContainer: {
      paddingTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imagestyle: {
      width: 60,
      height: 60,
      borderRadius: 20,
      marginRight: 10
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
            {/* <Image
               source={category.heart ? HeartFilled : Heart}
               style={styles.welcomeImage}
             /> */}
          </View>
        </TouchableHighlight>
      )}
    />
  )
}

InfiniteHits.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectInfiniteHits(InfiniteHits);
