import { View, Text, Image, TouchableOpacity,Modal } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
return(
<View style={{flex:1, 
backgroundColor:'#a0a0a0a0'}}>
     <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 10,
            marginTop: 18,
            marginLeft: 15,
            border: "2px solid black",
          }}
        ></Image>
<Text  style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "black",
            marginTop: 20,
            marginLeft: 15,
          }}>Diarista </Text>
        
    
        <DrawerContentScrollView {...props}  style={{backgroundColor:'#a0a0a0'}}>
          <DrawerItemList {...props}/>
        </DrawerContentScrollView>

      






</View>
);



}
export default CustomDrawer;