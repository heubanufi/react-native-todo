import React, {useState} from "react";
import {Dimensions, StatusBar} from 'react-native';
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Input from "./components/Input";
import IconButton from "./components/IconButton";
import {images} from './images';
import Task from './components/Task';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({theme}) => theme.main};
    align-self: flex-start;
    margin: 10px 20px;
    `;

    const List = styled.ScrollView`
    flex: 1;
    width: ${({width}) => width - 40}px;
    `;

export default function App() {
  const width = Dimensions.get('window').width;
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({
    '1': {id: '1', text: 'Hanbit', completed: false},
    '2': {id: '2', text: 'React Native', completed: true},
    '3': {id: '3', text: 'React Native', completed: false},
    '4': {id: '4', text: 'React Native', completed: false},

  });

  const _addTask = () => {
    alert(`Add: ${newTask}`);
    setNewTask('');
  };
  const _handleTextChange = text => {
    setNewTask(text);
  };

  return(
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
        barStyle="light-content"
        backgroundColor={theme.background}/>
        <Title>TODO LIST</Title>
        <Input 
        placeholder= "+ Add a Task"
        value={newTask}
        onChangeText={_handleTextChange}
        onSubmitEditing={_addTask}
        />

        {/*<IconButton type={images.uncompleted}/>
        <IconButton type={images.completed}/>
        <IconButton type={images.delete}/>
        <IconButton type={images.update}/>*/}

        <List width={width}>
          <Task text="A" />
          <Task text="B" />
          <Task text="C" />
          {Object.values(tasks)
          .reverse()
          .map(item => (
            <Task key={item.id} text={item.text}/>
          ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}