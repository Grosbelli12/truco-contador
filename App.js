import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { ButtonProps } from "./components/Buttons";
import { Truco } from "./components/Truco";

export default function App() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [valorRodada, setValorRodada] = useState(1);
  const [vitorias1, setVitorias1] = useState(0);
  const [vitorias2, setVitorias2] = useState(0);

  const valorDaRodada = (valor) => setValorRodada(valor);

  const aumentar = (time) => {
    if (time === "Nós") {
      const novoPlacar = contador + valorRodada;
      setContador(novoPlacar >= 12 ? 12 : novoPlacar);
    } else {
      const novoPlacar = contador2 + valorRodada;
      setContador2(novoPlacar >= 12 ? 12 : novoPlacar);
    }
    setValorRodada(1);
  };

  const diminuir = (time) => {
    if (time === "Nós" && contador > 0) setContador(contador - 1);
    else if (time === "Eles" && contador2 > 0) setContador2(contador2 - 1);
  };

  useEffect(() => {
    if (contador === 12) {
      setVitorias1(vitorias1 + 1);
      setTimeout(restart, 1500);
    }
  }, [contador]);

  useEffect(() => {
    if (contador2 === 12) {
      setVitorias2(vitorias2 + 1);
      setTimeout(restart, 1500);
    }
  }, [contador2]);

  const restart = () => {
    setContador(0);
    setContador2(0);
    setValorRodada(1);
  };

  const novoJogo = () => {
    restart();
    setVitorias1(0);
    setVitorias2(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/logouni.png")} style={styles.image} />
      </View>

      <View style={styles.mainContent}>
        <View style={styles.teamsRow}>
          <View style={styles.colunaTotal}>
            <Text style={styles.nomeTime}>NÓS</Text>
            <Text style={styles.numeroPlacar}>{contador}</Text>
            <Text style={styles.ganhouTexto}>Ganhou {vitorias1}</Text>

            <ButtonProps
              funcao={() => aumentar("Nós")}
              funcao2={() => diminuir("Nós")}
              temas={styles}
            />
            <Truco funcao={valorDaRodada} estilos={styles} />
          </View>

          <View style={styles.colunaTotal}>
            <Text style={styles.nomeTime}>ELES</Text>
            <Text style={styles.numeroPlacar}>{contador2}</Text>
            <Text style={styles.ganhouTexto}>Ganhou {vitorias2}</Text>

            <ButtonProps
              funcao={() => aumentar("Eles")}
              funcao2={() => diminuir("Eles")}
              temas={styles}
            />
            <Truco funcao={valorDaRodada} estilos={styles} />
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.botaoMenu} onPress={restart}>
            <Text style={styles.textoBotaoMenu}>REINICIAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoMenu} onPress={novoJogo}>
            <Text style={styles.textoBotaoMenu}>NOVO JOGO</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  header: {
    marginBottom: 20,
  },
  image: {
    height: 100,
    width: 280,
    resizeMode: "contain",
  },
  mainContent: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  teamsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 10,
  },
  colunaTotal: {
    alignItems: "center",
    width: "45%",
  },
  nomeTime: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#555",
    letterSpacing: 1,
  },
  numeroPlacar: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 5,
  },
  ganhouTexto: {
    fontSize: 18,
    fontWeight: "600",
    color: "#444",
    marginBottom: 20,
  },
  containerBotao: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  botao: {
    width: 70,
    height: 50,
    backgroundColor: "#006437",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  estiloBotao: {
    width: 70,
    height: 50,
    backgroundColor: "#7a0026",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  colunaApostas: {
    width: "100%",
    gap: 8,
  },
  botaoAposta: {
    width: "100%",
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textoAposta: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  botaoMenu: {
    backgroundColor: "#1a1311",
    width: 220,
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotaoMenu: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
