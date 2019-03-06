import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Image } from 'react-native';
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
  categoryItem: {
    width: '90%',
    height: 100,
    padding: 20,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'blue'
  },
  categoryText: {
    fontSize: 18,
    color: 'white'
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
        <TouchableHighlight onPress={(item) => {this.props.onPress(item)}} style={styles.categoryItem}>
          <View>
          {
            console.log('item: ', item.featured_image_url_100)
          }
          <Image style={styles.imagestyle} source={{uri:`${item.featured_image_url_100}`}} />
            <Text style={styles.categoryText}>
              {item.title}
            </Text>
          </View>
        </TouchableHighlight>
        // <View style={styles.item}>
        //   <Text>{JSON.stringify(item).slice(0, 100)}</Text>
        // </View>
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
