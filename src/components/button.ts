import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center", // Centraliza verticalmente
        alignItems: "center", // Centraliza horizontalmente
        padding: 8,  // Ajusta o espaço interno da caixa
        backgroundColor: "#C10C99", // Cor de fundo da caixa
        borderRadius: 24, 
        width: 240,// Bordas arredondadas na caixa
        margin: -206, // Margem fora da caixa (se necessário)
        marginLeft:-10,
        marginRight:80,
        marginBottom:280,
    },
    Button: {
        // backgroundColor: '#3498db', // Cor azul do botão
        paddingVertical: 8, // Altura do botão (diminuído)
        paddingHorizontal: 20, // Largura do botão (diminuído)
        borderRadius: 8, // Bordas arredondadas
        alignItems: 'center', // Centraliza o texto dentro do botão
        justifyContent: 'center',
        shadowColor: '#000', // Sombra para dar efeito 3D
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5, // Sombra no Android
    },
    title: {
        color: "#D4D4D4",
        fontWeight: 700,
        fontSize: 24,
    }
});
