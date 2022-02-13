import React from 'react';
import {View, Text, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';

function IdText() {
  const route = useRoute();
  return <Text>id: {route.params.id}</Text>;
}

function DetailScreen({navigation, route}) {
  return (
    <View>
      <IdText />
      <Button
        title="다음"
        onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
      />
      <Button title="뒤로가기" onPress={() => navigation.pop()} />
      <Button title="처음으로" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default DetailScreen;
