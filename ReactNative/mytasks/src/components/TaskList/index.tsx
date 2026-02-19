import React from 'react';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
  Alert,
} from 'react-native';

import {Task} from '../../interfaces/Task';
import {ITask, useTaskList} from '../../context/TaskContext';

interface Props {}

const TaskList: React.FC<Props> = () => {
  const {tasks, removeTask} = useTaskList();

  const handleRemoveTask = (id: string) => {
    Alert.alert('Tem certeza', 'Deseja Realmente excluir a tarefa', [
      {text: 'Cancelar', onPress: () => {}},
      {text: 'Excluir', onPress: () => removeTask(id)},
    ]);
  };

  return (
    <FlatList
      data={tasks as unknown as ITask[]}
      keyExtractor={(item: Task) => item.id}
      renderItem={({item}: ListRenderItemInfo<Task>) => (
        <TouchableOpacity
          onPress={() => handleRemoveTask(item.id)}
          style={styles.buttonTask}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TaskList;
