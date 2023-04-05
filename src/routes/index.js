import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import Wishlist from "../pages/wishlist"
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel:false,
            tabBarActiveTintColor: "black",
            tabBarStyle:{
                backgroundColor:"#fff",
                borderTopWidth:0,

            }
        }}>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon:({ color, size, focused })=>{
                        if(focused){
                            return <Ionicons name="home" color="#000" size={size}/>
                        }

                        return <Ionicons name="home-outline" color={color} size={size}/>
                    }

                }} 
            />
            <Tab.Screen 
                name="Wishlist" 
                component={Wishlist}
                options={{
                    tabBarIcon:({ color, size, focused })=>{
                        if(focused){
                            return <Ionicons name="heart" color="#FF4141"  size={size}/>
                        }

                        return <Ionicons name="heart-outline" color="#000" size={size}/>
                    }

                }}
            />
        </Tab.Navigator>
    )
}