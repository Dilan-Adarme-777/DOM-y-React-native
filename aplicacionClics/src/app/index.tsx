import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function Index() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<{ n: number; hora: string }[]>([]);

  const sumar = () => {
    const n = contador + 1;
    setContador(n);
    setRegistros([{ n, hora: new Date().toLocaleTimeString('es-ES') }, ...registros]);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.titulo}>Contador de clics</Text>
      <Text style={styles.contador}>{contador}</Text>

      <TouchableOpacity style={styles.boton} onPress={sumar}>
        <Text style={styles.botonTexto}>¡Haz Clic Aquí!</Text>
      </TouchableOpacity>

      <ScrollView style={{ width: '100%' }}>
        {registros.map((r) => (
          <View key={r.n} style={styles.fila}>
            <Text style={styles.celda}>{r.n}</Text>
            <Text style={styles.celda}>{r.hora}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, backgroundColor: '#f4f7f9', alignItems: 'center', padding: 30, paddingTop: 80 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  contador: { fontSize: 56, fontWeight: 'bold', color: '#3498db', marginVertical: 15 },
  boton: { backgroundColor: '#2ecc71', padding: 14, borderRadius: 8, marginBottom: 20 },
  botonTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  fila: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  celda: { flex: 1, textAlign: 'center' },
});