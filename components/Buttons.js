import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export function ButtonProps({
  titulo,
  temas,
  placar,
  funcao,
  funcao2,
  corBotaoMais = "#2ecc71",
  corBotaoMenos = "#df0000",
}) {
  return (
    <View style={temas.estiloContainer}>
      <Text style={temas.estiloTexto}>{titulo}</Text>

      <Text style={temas.estiloTexto}>{placar}</Text>

      <View style={temas.containerBotao}>
        <TouchableOpacity
          style={[temas.botao, { backgroundColor: corBotaoMais }]}
          onPress={funcao}
        >
          <Text style={temas.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[temas.estiloBotao, { backgroundColor: corBotaoMenos }]}
          onPress={funcao2}
        >
          <Text style={temas.textoBotao}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
