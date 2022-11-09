import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Comercio } from "../entidades/comercio";
interface ItemLista{
    comercio: Comercio;
}
const Item = ({ comercio }: ItemLista) =>{
    return (
        <View>
            <Text>Nome: {comercio.nomeFantasia}</Text>
            <Text>Endereço: {comercio.endereco}</Text>
            <Text>Telefone: {comercio.telefone}</Text>
            <Text>Categoria: {comercio.categoria.descricao}</Text>

        </View>
    );
}
function  fnRenderItem({item}: any){
    return (
    <View>
    <Item comercio={item}></Item>
        <Text>............</Text>        
    </View>)
}

const Home = () =>{
    const comercio_1 = {
        nomeFantasia: "Tribbu Açaí",
        endereco: "Av. Monteiro Lobato, nº 200, Cidade Nobre",
        telefone: "031 38225000",
        isWhatsApp: false,
        email: "tribbu_acai@gmail.com",
        categoria:{
            codigo: 1,
            descricao: "Alimentos"
        }
    };
    const comercio_2 = {
        nomeFantasia: "Farmacia Indiana",
        endereco: "Av. Monteiro Lobato, nº 202, Cidade Nobre",
        telefone: "031 38211111",
        isWhatsApp: false,
        email: "farmacia_indiana@gmail.com",
        categoria:{
            codigo: 2,
            descricao: "Medicamentos"
        }
    };
    const comercios = [
        comercio_1,
        comercio_2
    ]   
    return (<View>
        <Text style={{textAlign: "center"}}>Lista de Comercios</Text>
        <FlatList data={comercios} renderItem={fnRenderItem}></FlatList>
        </View>
        );
}
export default Home;