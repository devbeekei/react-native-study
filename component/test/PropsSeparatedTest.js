import React from 'react';
import {Text, View} from 'react-native';

function PropsSeparatedTest({name, birth}) {
  return (
    <View>
      <Text>name: {name}</Text>
      <Text>birth: {birth}</Text>
    </View>
  );
}

export default PropsSeparatedTest;
