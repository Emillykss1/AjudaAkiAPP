import { useState } from "react";
import { SafeAreaView, View, Image, TouchableOpacity, StyleSheet, Text, Modal} from "react-native";

import {Trash, PencilSimpleLine} from '@phosphor-icons/react'
import { ModalEditar } from "./ModalEdiar/ModalEditar";
import { api } from "../service/api";
  
const PostDiarista=({
  id, nome, telefone, email, formacao,  deletarDiarista, getUsers
})=>{
    const[visibleModalEditar,setVisibleModalEditar]= useState(false);

return(
<View style={{display:'flex',
 borderRadius:8,
 backgroundColor:'white',
 display:'flex',
 shadowColor:'rgb(0,0,0,0.5)',
 shadowRadius:4,
 shadowOffset: { width: 2, height: 2 },
 elevation: 6,
width:'90%',
height: 'auto',
flexDirection:'column'}}>

<View style={{flexDirection: 'row'}}>
<TouchableOpacity onPress={()=> setVisibleModalEditar(true)}>
<PencilSimpleLine size={25} color="blue"/>
</TouchableOpacity>
 <TouchableOpacity onPress={deletarDiarista}>
 <Trash size={25}  color="red"/>
 </TouchableOpacity>
</View>
<View style={styles.container}>

    <Image source={{
      uri:"https://direitosbrasil.com/wp-content/uploads/2016/01/quais-sao-os-direitos-das-diaristas.jpg"
    }}
    style={{ border:'2px solid black',
      width:80,
      height:80, 
      borderRadius:8,
      marginLeft:20
      }}>

    </Image>
<View style={{padding:"0.3rem", width:"100%"}}>
<Text style={{
color:'black',
fontSize:14,
fontWeight:'bold', 
paddingTop:2}}>Diarista: {nome}</Text>

<Text style={{
color:'black',
fontSize:14,
fontWeight:'bold', 
paddingTop:2}}>
    Número: {telefone}
</Text>
<Text style={{
color:'black',
fontSize:14,
fontWeight:'bold', 
paddingTop:2}}>
    Email: {email}
</Text>
<Text style={{
color:'black',
fontSize:14,
fontWeight:'bold', 
paddingTop:2, display:'flex', flexWrap:'wrap'}}>
    Formação: {formacao}
</Text>

</View>

</View>
<Modal 
visible={visibleModalEditar} 
transparent={true} 
onRequestClose={ ()=> setVisibleModalEditar(false)} >

<ModalEditar id={id} getUsuario={getUsers}
handleClose={()=>setVisibleModalEditar(false)}/>

  </Modal>
</View>
);}
  
const styles = StyleSheet.create({

    container:{
      
     
      display:'flex',
      justifyContent:'flex-start',
      flexDirection:'column',
      alignItems:"center",
      paddingTop:10,
      gap:8,
      height:208,
      width:"100%",
      
    
      

    }
  })
  export default PostDiarista;