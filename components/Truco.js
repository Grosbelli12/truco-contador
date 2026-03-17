import { TouchableOpacity, Text, View } from "react-native";

export function Truco({ funcao, estilos }) {
  return (
    <View style={estilos.colunaApostas}>
      <TouchableOpacity
        onPress={() => funcao(3)}
        style={[estilos.botaoAposta, { backgroundColor: "#005a5a" }]}
      >
        <Text style={estilos.textoAposta}>TRUCO</Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={() => funcao(6)}
        style={[estilos.botaoAposta, { backgroundColor: "#002460" }]}
      >
        <Text style={estilos.textoAposta}>SEISSS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => funcao(9)}
        style={[estilos.botaoAposta, { backgroundColor: "#4b006e" }]}
      >
        <Text style={estilos.textoAposta}>NOVEEE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => funcao(12)}
        style={[estilos.botaoAposta, { backgroundColor: "#5a0000" }]}
      >
        <Text style={estilos.textoAposta}>DOZI</Text>
      </TouchableOpacity>
    </View>
  );
}
