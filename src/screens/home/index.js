import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import postDiarista from "../../components/Diaristas";
import PostDiarista from "../../components/Diaristas";
import { State } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { api } from "../../service/api";
import { User } from "@phosphor-icons/react";

const Home=()=>{
  const[usuarios, setUsuarios] = useState()
  const getUsuarios = async() => {
    await api.get("/getcadastro").then(User => {
      setUsuarios(User.data) 
      console.log(User.status)
    })
  }
  const DeletarDiarista = async(id) => {
    await api.delete(`/deletecadastro/${id}`).then(deletediarista =>{

      console.log(deletediarista.status)
      getUsuarios()

    }) 
  }
  useEffect(() => {
    getUsuarios()
  }, [])
  return(
<SafeAreaView style={styles.container}>
  <Text style={{
  fontSize:22,
  fontWeight:'bold',
  color:'white',
  display:'flex',
  justifyContent:'flex-start',
  marginTop:15,
  marginBottom:10}}>Contribuidores</Text>
  <View style ={{backgroundColor:'#053F5C', display:"flex", gap:"0.5rem", width:"100%", justifyContent:"center", alignItems:"center"}}>
  {usuarios && usuarios.map(usuario => {
  return <PostDiarista 
  deletarDiarista={() => DeletarDiarista(usuario.id)} 
  id={usuario.id}
  nome={usuario.nome}
  email={usuario.email}
  telefone={usuario.telefone}
  formacao={usuario.formacao}
  getUsers={() => getUsuarios()}
  /> 
 })}
  </View>
</SafeAreaView>
  );
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:'#053F5C',
    height:"100vh"

  }})
export default Home;