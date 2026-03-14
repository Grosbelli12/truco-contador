import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);

  const aumentar = () => setContador(contador + 1);
  const diminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/logouni.png")} style={styles.image} />
        <Text style={styles.titulo}>Marcador </Text>
        <Text style={styles.resultado}>{contador}</Text>
      </View>

      <View style={styles.centro}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.botao, { backgroundColor: "#df0000" }]}
            onPress={aumentar}
          >
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botao, { backgroundColor: "#2ecc71" }]}
            onPress={diminuir}
          >
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 100,
  },
  header: {
    alignItems: "center",
  },
  image: {
    height: 70,
    width: 220,
    marginBottom: 50,
  },
  titulo: {
    fontSize: 40,
    marginBottom: 30,
  },
  resultado: {
    fontSize: 30,
  },
  centro: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 270,
  },
  botao: {
    width: 95,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  textoBotao: {
    color: "#ffff",
    fontSize: 25,
    fontWeight: 600,
  },
});
