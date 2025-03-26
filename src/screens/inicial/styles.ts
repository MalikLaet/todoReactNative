import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27272A",
    paddingTop: 100,
    alignItems: "center",
  },
  titulo: {
    fontSize: 36,
    color: "#FFFFFF",
    paddingBottom: 24,
  },
  subTitulo:{
    fontSize: 24,
    color: "#71717B",
    paddingRight: 180,
    paddingTop: 40
},
  container2:{
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#71717B",
  },
  texto1:{
    color: "#4EA8DE",
    fontSize: 18,
    fontWeight: "bold"
  },
  texto2:{
    color: "#8284FA",
     fontSize: 18,
    fontWeight: "bold"
  },
  button:{
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 30,
    backgroundColor: "#333333", 

    width: 24,
    height: 24,
  },
  criadas:{
    color: "#FFF",
    fontSize: 14,
  },
  taskDone: {
    textDecorationLine: "line-through",
    
    color: "gray",
  },

  
  botaoFlutuante: {
    position: "absolute",
    top: 640,
    left: 280,
    backgroundColor: "#C10C99",
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    alignItems: "center",
    gap: 8,
    width: "80%",
    backgroundColor: "#27272A",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#333333"
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#71717B"
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#ffff"
  },

  botaoAdicionar: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 5,
  },
  botaoCancelar: {
    backgroundColor: "#ff3b30",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },

  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },


  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    width: 280,
    backgroundColor: "#262626",
    padding: 15,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#333333"
  },

  taskText: {
    fontSize: 16,
    color: "#ffff",
    paddingRight: 60,
  },
});
