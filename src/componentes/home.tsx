import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { comercios } from "../database/data";
import { Comercio } from "../entidades/comercio";
import { Linking } from 'react-native';
import { FaWhatsapp } from 'react-icons/fa';
interface ItemLista {
  comercio: Comercio;
}
const Item = ({ comercio }: ItemLista) => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: "white", padding: 10, margin: 10, borderRadius: 5, shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    }}>
      <Text style={{ color: "black" }}>Nome: {comercio.nomeFantasia}</Text>
      <Text>Contatos:
      <Text onPress={() => Linking.openURL('https://whatsa.me/' + comercio.telefone)} >      
      {comercio.telefone} 
      </Text>
      </Text>
      
      <Text>{comercio.email}</Text>
      <Text>Endereço: {comercio.endereco}</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Comercio' as never);
        }}>
        <Text style={{ textAlign: "center" }}>Editar</Text>
      </Pressable>
    </View>
  );
};
function fnRenderItem({ item }: any) {
  return (
    <View style={{ backgroundColor: "#26734d" }}>
      <Item comercio={item}></Item>
    </View>)
}

const Home = () => {

  return (<View style={{ backgroundColor: "#26734d", flex: 1 }}>
    <Text style={{
      textAlign: "center", fontWeight: "800", fontSize: 25, paddingTop: 10,
      backgroundColor: "white", color: "black"
    }}>Lista de Comercios</Text>
    <FlatList data={comercios} renderItem={fnRenderItem}></FlatList>
  </View>
  );
}
export default Home;