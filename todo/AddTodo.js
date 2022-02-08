/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Keyboard,
} from 'react-native';

function AddTodo({onInsert}) {
  const [text, setText] = useState('');
  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss(); // 키보드 닫기
  };
  const AddButton = (
    <View style={styles.button}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="할일을 입력해주세요."
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {AddButton}
          </TouchableOpacity>
        ),
        android: (
          <View style={{overflow: 'hidden', borderRadius: 24}}>
            <TouchableNativeFeedback onPress={onPress}>
              {AddButton}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 64,
    paddingHorizontal: 16, // 좌우측 패딩
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8, // 상하단 패딩
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
});

export default AddTodo;
