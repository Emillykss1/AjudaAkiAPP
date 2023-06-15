import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Home from "../home";

const Login = ({ navigation }) => {
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
        onPress={()=> navigation.navigate('Home')}
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
          Logar
        </Text>
      </TouchableOpacity>
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
export default Login;
