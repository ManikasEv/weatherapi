import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles/styles';
import colors from '../../../assets/colors';

const Main = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const colorPalette = colors()


  const handleLoginPress = () => {
     console.log(`${username}`)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning German is FUN!!!</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter Username" 
        placeholderTextColor={colorPalette.black}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter Password" 
        secureTextEntry
        placeholderTextColor={colorPalette.black} 
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity 
        style={styles.btn}
        onPress={handleLoginPress}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Main;
