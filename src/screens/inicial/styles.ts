import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27272A",
    paddingTop: 100,
    alignItems: "center",
  },
  titulo: {
    fontSize: 40,
    color: "#FFFFFF",
    paddingBottom: 24,
  },
  subTitulo:{
    fontSize: 28,
    color: "#71717B",
    paddingTop: 40,
    paddingRight: 280,
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
  deleteButton: {
    marginLeft: 85, 
    padding: 5,
    justifyContent:"space-between"
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
    width: 340,
    backgroundColor: "#262626",
    padding: 15,
    justifyContent:"space-between",

    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#333333"
  },

  taskText: {
    fontSize: 16,
    color: "#ffff",
    paddingRight: 50,
    flex: 1,
    flexShrink:1,
    maxWidth:"100%",
  },
});
