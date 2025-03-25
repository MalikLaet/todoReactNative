import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 

export default function Inicial() {
return (
    <View style={styles.container}>
          <Text style={styles.titulo}>Meu Cronograma</Text>
          
          <Text style={styles.subTitulo}>Task</Text>
          <View style={styles.container2}>
            <Text style={styles.texto1}>Tarefas criadas</Text>
            <Text style={styles.texto2}>Concluídas</Text>


          </View>
            <TouchableOpacity style={styles.botaoFlutuante} onPress={() => alert("Adicionar nova tarefa")}>
                <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
    </View>
)
}