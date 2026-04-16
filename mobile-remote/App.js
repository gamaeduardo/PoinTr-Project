import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { io } from 'socket.io-client';

const SERVER_URL = 'https://pointr-socket-server.onrender.com';

const socket = io(SERVER_URL, {
  transports: ['websocket'],
});

const App = () => {
  useEffect(() => {

    socket.on('connect', () => {
      console.log('Conectando ao Servidor Socket.IO!');
    });

    socket.on('disconnect', () => {
      console.log('Desconectando do Servidor!');
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  const sendAction = (type, employeeId = 'BCF', employeeName = 'Teste') => {
    const data = {
      type: type,
      employeeId: employeeId,
      employeeName: employeeName,
      time: new Date().toLocaleTimeString('pt-BR')
    };

    socket.emit('mobile_action', data);
    Alert.alert("Sucesso", `Ação ${type} enviada!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle Remoto - BETA</Text>

      <View style={styles.buttonGroup}>
        <Button
          title="BATER PONTO (NORMAL)"
          onPress={() => sendAction('PONTO_NORMAL')}
          color='#10B981'
        />
        <View style={styles.spacer} />

        <Button
          title="CHEGADA ATRASADA"
          onPress={() => sendAction('CHEGADA ATRASADA')}
          color='#F59E0B'
        />
        <View style={styles.spacer} />

        <Button
          title="INICIAR HORA EXTRA"
          onPress={() => sendAction('INICIAR_HE')}
          color='#3B82F6'
        />
        <View style={styles.spacer} />

        <Button
          title="SOLICITAR FÉRIAS"
          onPress={() => sendAction('SOLICITACAO_FERIAS')}
          color='#8B5CF6'
        />
        <View style={styles.spacer} />

        <Button
          title="CAIO AMA PHP"
          onPress={() => sendAction('BRÁS CUBAS É TOP')}
          color='#eeeee4'
        />
        <View style={styles.spacer} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#1f2937',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#F9FAFB',
    textAlign: 'center'
  },
  buttonGroup: {
      gap: 15,
  },
  spacer: {
      height: 15,
  }
});

export default App;
