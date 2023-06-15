import  {useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Modal
  } from "react-native";
  import Home from "../home";

  import { ModalCadastrar } from "/src/components/ModalCadastrar";
  
  const Cadastrar = ({ navigation }) => {
    const[visibleModal, setVisibleModal]= useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={{
            width: 150,
            height: 150,
          }}
          source={require("/assets/logo.png")}
        ></Image>
  
        <TouchableOpacity
        onPress={()=> setVisibleModal(true)}

          
          style={{
            width: 200,
            height: 50,
            backgroundColor: "#112A4A",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Cadastre-se
          </Text>
        </TouchableOpacity>


        <Modal 
visible={visibleModal} 
transparent={true} 
onRequestClose={ ()=> setVisibleModal(false)} >
<ModalCadastrar handleClose={()=>setVisibleModal(false)}/>

  </Modal>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#053F5C",
    },
  });
  export default Cadastrar;
  