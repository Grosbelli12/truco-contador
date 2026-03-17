import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import { ButtonProps } from "./components/Buttons";
import { Truco } from "./components/Truco";

export default function App() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [valorRodada, setValorRodada] = useState(1);

  const valorDaRodada = (valor) => {
    setValorRodada(valor);
  };

  const aumentar = (time) => {
    if (time === "Nós") {
      const novoPlacar = contador + valorRodada;
      setContador(novoPlacar > 12 ? 12 : novoPlacar);
    } else {
      const novoPlacar = contador2 + valorRodada;
      setContador2(novoPlacar > 12 ? 12 : novoPlacar);
    }
    setValorRodada(1);
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
          <View style={styles.buttonContainer}>
            <View style={styles.colunaTotal}>
              <ButtonProps
                placar={contador}
                titulo="Nós"
                funcao={() => aumentar("Nós")}
                funcao2={() => diminuir("Nós")}
                temas={styles}
              />
              <Truco funcao={valorDaRodada} time="Nós" estilos={styles} />
            </View>

            <View style={styles.colunaTotal}>
              <ButtonProps
                placar={contador2}
                titulo="Eles"
                funcao={() => aumentar("Eles")}
                funcao2={() => diminuir("Eles")}
                temas={styles}
              />
              <Truco funcao={valorDaRodada} time="Eles" estilos={styles} />
            </View>
          </View>
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
    paddingTop: 100,
  },
  header: {
    marginBottom: 40,
  },
  image: {
    height: 80,
    width: 250,
    resizeMode: "contain",
  },
  centro: {
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  colunaTotal: {
    alignItems: "stretch",
    width: "47%",
  },
  estiloTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#777",
    textTransform: "uppercase",
    alignSelf: "center",
  },
  numeroPlacar: {
    fontSize: 90,
    fontWeight: "bold",
    color: "#333",
    alignSelf: "center",
    marginVertical: 10,
  },
  containerBotao: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    marginVertical: 15,
  },
  botao: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#006437",
  },
  estiloBotao: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#7a0026",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  colunaApostas: {
    width: "100%",
    gap: 10,
  },
  botaoAposta: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  textoAposta: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
