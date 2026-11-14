import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<any[]>([]);

  const incrementarContador = () => {
    const nuevo = contador + 1;
    const a = new Date();
    const hora = [a.getHours(), a.getMinutes(), a.getSeconds()]
      .map((n) => String(n).padStart(2, "0")).join(":");
    setContador(nuevo);
    setRegistros([{ id: Date.now(), numero: nuevo, hora }, ...registros]);
  };

  // RETO 1: reiniciar a cero
  const reiniciar = () => {
    setContador(0);
    setRegistros([]);
  };

  return (
    <View style={estilos.body}>
      <View style={estilos.card}>
        <Text style={estilos.title}>Interactividad con React Native</Text>
        <Text style={estilos.counterBox}>{contador}</Text>

        {/* Botón disparador de eventos */}
        <TouchableOpacity style={estilos.btnClick} onPress={incrementarContador}>
          <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
        </TouchableOpacity>

        {/* RETO 1: botón reiniciar */}
        <TouchableOpacity
          style={[estilos.btnClick, { backgroundColor: "#e74c3c" }]}
          onPress={reiniciar}
        >
          <Text style={estilos.btnText}>Reiniciar</Text>
        </TouchableOpacity>

        {/* Tabla de registros */}
        <View style={estilos.tableContainer}>
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>Nº Clic</Text>
            <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
          </View>

          <ScrollView style={estilos.tableBody}>
            {registros.map((item, index) => (
              <View
                key={item.id}
                style={[estilos.tr, index % 2 === 0 ? estilos.trEven : null]}
              >
                <Text style={[estilos.td, estilos.cellNumero]}>{item.numero}</Text>
                <Text style={[estilos.td, estilos.cellHora]}>{item.hora}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: { flex: 1, backgroundColor: "#f4f7f9", justifyContent: "center", padding: 20 },
  card: { backgroundColor: "#fff", borderRadius: 12, padding: 24, elevation: 4 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", color: "#2c3e50" },
  counterBox: { fontSize: 56, fontWeight: "bold", color: "#3498db", textAlign: "center", marginVertical: 15 },
  btnClick: { backgroundColor: "#2ecc71", padding: 14, borderRadius: 8, alignItems: "center", marginBottom: 12 },
  btnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  tableContainer: { borderWidth: 1, borderColor: "#e0e6ed", borderRadius: 8, overflow: "hidden", marginTop: 8 },
  tableHeader: { flexDirection: "row", backgroundColor: "#f8f9fa", borderBottomWidth: 1, borderBottomColor: "#e0e0e0" },
  tableBody: { maxHeight: 170 },
  tr: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#e0e0e0", backgroundColor: "#ffffff" },
  trEven: { backgroundColor: "#fafafa" },
  th: { color: "#7f8c8d", fontWeight: "600", fontSize: 14, padding: 10, textAlign: "center" },
  td: { color: "#333", fontSize: 14, padding: 10, textAlign: "center" },
  cellNumero: { flex: 1 },
  cellHora: { flex: 1.5 },
});