import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function Inicial() {
  const [tasks, setTasks] = useState<
    { id: number; title: string; completed: boolean }[]
  >([]);
  const [newTask, setNewTask] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: Date.now(),
        title: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
      setModalVisible(false);
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Cronograma</Text>

      <Text style={styles.subTitulo}>Task</Text>
      <View style={styles.container2}>

        <Text style={styles.texto1}>Tarefas criadas</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.criadas}>{tasks.length}</Text>
        </TouchableOpacity>

        <Text style={styles.texto2}>Concluídas</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.criadas}>
            {tasks.filter((task) => task.completed).length}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
              {item.completed ? (
                <AntDesign name="checkcircle" size={24} color="#C10C99" />
              ) : (
                <AntDesign name="checkcircleo" size={24} color="gray" />
              )}
            </TouchableOpacity>
            <Text style={[styles.taskText, item.completed && styles.taskDone]}>
              {item.title}
            </Text>
          </View>
        )}
      />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nova Tarefa</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua tarefa"
              placeholderTextColor="#ffff"
              
              value={newTask}
              onChangeText={setNewTask}
            />
            <TouchableOpacity style={styles.botaoAdicionar} onPress={addTask}>
              <Text style={styles.textoBotao}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botaoCancelar}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textoBotao}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.botaoFlutuante}
        onPress={() => setModalVisible(true)}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
