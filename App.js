import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DateHead from './todo/DateHead';
import Empty from './todo/Empty';
import AddTodo from './todo/AddTodo';
import TodoList from './todo/TodoList';

const App = () => {
  const date = new Date();
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: 'TODO List 만들어보기', done: false},
  ]);
  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text: text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };
  const onDelete = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  const onToggle = id => {
    const newTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(newTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead date={date} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
