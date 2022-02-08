import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Empty() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.emptyText}>할 일이 없습니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  emptyText: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    marginBottom: 20,
    width: 240,
    height: 179,
  },
});

export default Empty;
