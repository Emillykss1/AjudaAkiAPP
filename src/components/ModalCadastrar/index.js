import { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  Image,
  StyleSheet,
  Picker,
} from "react-native";
import { api } from "../../service/api";

export function ModalCadastrar({ handleClose }) {
  const[nome, setnome] = useState()
  const[telefone, settelefone] = useState()
  const[email, setemail] = useState()
  const[formacao, setformacao] = useState()

  const cadastroUsuario = async() => {
    await api.post("/createcadastro", {
      nome, telefone, email, formacao
    }).then(cadastro => console.log(cadastro.status))
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "90%",
          height: "60%",
          backgroundColor: "white",
          borderRadius: 8,
          border: "4px solid black",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      ><TouchableOpacity onPress={handleClose}
      style={{fontSize:20,
      
      paddingHorizontal:6,
      paddingVertical:6,
      borderRadius:2,
      marginLeft:230,
      backgroundColor:'#112A4A'}}> <Text style={{fontWeight:'bold',
      color:'white'}}>X</Text></TouchableOpacity>
       
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20}}>
            Informe seus dados a seguir:
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
          Nome:
        </Text>
        <TextInput onChangeText={texto=> setnome(texto)}
         keyboardType="text"
          placeholder="Informe seu nome"
          style={{
            border: "2px solid black",
            width: "90%",
            height: 30,
            borderRadius: 8,
            marginBottom: 20,
            paddingLeft:10,
            fontWeight:'bold',
            fontSize:12
          }}
        ></TextInput>
        <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
          Telefone:
        </Text>
        <TextInput onChangeText={telefone=> settelefone(telefone)}
          placeholder="Informe seu telefone"
          style={{
            border: "2px solid black",
            width: "90%",
            height: 30,
            borderRadius: 8,
            marginBottom: 20,
            paddingLeft:10,
            fontWeight:'bold',
            fontSize:12
          }}
        ></TextInput>
        <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
          Email:
        </Text>
       
        <TextInput onChangeText={email=> setemail(email)}
        keyboardType="email"
          placeholder="Informe seu email"
          style={{
            border: "2px solid black",
            width: "90%",
            height: 30,
            borderRadius: 8,
            marginBottom: 20,
            paddingLeft:10,
            fontWeight:'bold',
            fontSize:12
          }}
        ></TextInput>
        <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
          Formação:
        </Text>
        <TextInput  onChangeText={formacao=> setformacao(formacao)}
          placeholder="Informe sua formação"
          style={{
            border: "2px solid black",
            width: "90%",
            height: 30,
            borderRadius: 8,
            marginBottom: 20,
            paddingLeft:10,
            fontWeight:'bold',
            fontSize:12,
            marginBottom:10
          }}
        ></TextInput>

        <TouchableOpacity onPress={cadastroUsuario}
        style={{width:150,
        height:40,
        backgroundColor:'#112A4A',
        borderRadius:8, 
        alignItems:'center',
        justifyContent:'center'}}>
            <Text style={{color:'white',
        fontWeight:'bold',
        fontSize:14}}>Cadastrar</Text>

        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
