import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import { ButtonProps } from "./components/Buttons";

export default function App() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  const aumentar = (time) => {
    if (contador < 12 && time === "Nós") {
      setContador(contador + 1);
    } else if (contador2 < 12 && time === "Eles") {
      setContador2(contador2 + 1);
    }
  };

  const diminuir = (time) => {
    if (contador > 0 && time === "Nós") {
      setContador(contador - 1);
    } else if (contador2 > 0 && time === "Eles") {
      setContador2(contador2 - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/logouni.png")} style={styles.image} />
      </View>

      <View style={styles.centro}>
        <View style={styles.buttonContainer}>
          <ButtonProps
            placar={contador}
            titulo={"Nós"}
            funcao={() => aumentar("Nós")}
            funcao2={() => diminuir("Nós")}
            temas={styles}
          />

          <ButtonProps
            placar={contador2}
            titulo={"Eles"}
            funcao={() => aumentar("Eles")}
            funcao2={() => diminuir("Eles")}
            temas={styles}
          />
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
    marginTop: 100,
  },
  image: {
    height: 70,
    width: 220,
  },
  centro: {
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
  },
  estiloContainer: {
    alignItems: "center",
  },
  estiloTexto: {
    fontSize: 24,
    color: "#000000",
    marginBottom: 20,
    marginTop: 70,
  },
  containerBotao: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  botao: { 
    width: 75,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  estiloBotao: { 
    width: 75,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 25,
  },
});
