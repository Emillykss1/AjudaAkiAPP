
import { createDrawerNavigator} from '@react-navigation/drawer';
import {createAppNavigator} from  '@react-navigation/native';


import CustomDrawer from './src/components/customDrawer';

import Home from '/src/screens/home';
import Cadastrar from './src/screens/cadastre-se';


const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {


  return (

<Drawer.Navigator
 drawerContent={(props) => <CustomDrawer {...props} />} 
 screenOptions={{
          drawerType: "slide",
          drawerPosition:'right',
          headerTintColor:'#112A4A',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: "white",
            alignItems: "center",
            headerTitle:{
              fontSize:20
             },drawerStyle: {
              width: 250,
              backgroundColor:'#112A4A',
            },drawerItemStyle: {
              alignItems: "center",
              letterSpacing: 1,
              fontSize: 16,
              fontFamily: "bold",
              marginTop:20
            }, 
            drawerActiveTintColor: "#fff",
            drawerInactiveBackgroundColor: "#112A4A",
            drawerActiveBackgroundColor: "#112A4A",
            drawerInactiveTintColor: "#000",
           
            
            
            
          }}}initialRouteName="Home">
      <Drawer.Screen name="Cadastre-se" component={Cadastrar} />
      <Drawer.Screen name="Home" component={Home} />
      
    </Drawer.Navigator>

  );
}