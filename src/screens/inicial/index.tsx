import { FlatList, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from "react";

export default function Inicial() {
    const [tasks, setTasks] = useState<String[]>([]);
    const [newTask, setNewTask] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const addTask = () => {
        if( newTask.trim() !== ""){
            setTasks([ ...tasks , newTask]);
            setNewTask("");
            setModalVisible(false);
        }
    }
return (
    <View style={styles.container}>
          <Text style={styles.titulo}>Meu Cronograma</Text>
          
          <Text style={styles.subTitulo}>Task</Text>
          <View style={styles.container2}>
            <Text style={styles.texto1}>Tarefas criadas</Text>
            <Text style={styles.texto2}>Concluídas</Text>

          </View>
            <FlatList
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={styles.taskItem}>
                        <Text style={styles.taskText}>{item}</Text>
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

            <TouchableOpacity style={styles.botaoFlutuante} onPress={() => setModalVisible(true)}>
                <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
    </View>
)
}