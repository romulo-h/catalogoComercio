import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {comercios} from '../database/data';

const ComercioComponent = () => {
  const navigation = useNavigation();
  const comercio_1 = comercios[0];

  return (
    <View>
      <TextInput placeholder="Codigo:" value={comercio_1.categoria.codigo.toString()} />
      <TextInput placeholder="Nome:" value={comercio_1.nomeFantasia} />

      <Pressable
        onPress={() => {
          navigation.navigate('Principal' as never);
        }}>
        <Text>Voltar</Text>
      </Pressable>
      
    </View>
  );
};

export default ComercioComponent;