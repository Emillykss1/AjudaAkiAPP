import { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";

const Perfil = () => {
  return (
    <SafeAreaView
      style={{
        MarginTop:20,
        flex: 1,
        display: "flex",
        backgroundColor: "#a0a0a0",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor:'#053F5C'
      }}
    >
      <View
        style={{
        
          backgroundColor: "#fff",
          shadowRadius: 4,
          shadowColor: "rgba(0,0,0,0.6)",
          shadowOffset: { width: 2, height: 2 },
          elevation: 6,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          width:'100%',
          height:200
        }}
      >
        <Image
          style={{
            width: 95,
            height: 95,
            borderRadius: 8,
            marginTop: 3,
            marginLeft: 18,
            border: "2px solid black",
            marginTop:5
          }}
        ></Image>
        <Text
          style={{
            paddingLeft: 15,
            fontSize: 15,
            fontWeight: "bold",
            paddingTop: 6,

          }}
        >
          Diarista
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Perfil;
