import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function StyleSheetTest(props) {
  return (
    <View
      style={[
        styles.container,
        props.rounded && styles.rounded, // props로 받은 rounded값이 true일때 rounded 스타일 적용
        sizes[props.size], // props로 받은 size값을  적용
      ]}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}

StyleSheetTest.defaultProps = {
  size: 'medium', // 기본 사이즈
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderWidth: 4,
    borderColor: 'blue',
  },
  rounded: {
    borderRadius: 30,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default StyleSheetTest;
