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
});
