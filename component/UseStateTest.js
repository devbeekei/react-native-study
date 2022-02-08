import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function Box() {
  return (
    <View style={styles.box}>
      <Text>UseState 예제</Text>
    </View>
  );
}

function UseStateTest() {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <View>
      {visible ? <Box /> : null}
      <Button title="토글" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 4,
    borderColor: 'black',
    width: 200,
    height: 200,
  },
});

export default UseStateTest;
