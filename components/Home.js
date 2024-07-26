import { useContext } from "react";
import { StyleSheet,View,Text,Button, FlatList,TextInput } from "react-native";
import AppContext from "../context";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";

export const Home=()=>{


    return(
    <View style={styles.container}>
        <GoalInput/>
        <GoalList/>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
      paddingTop:50,
      paddingHorizontal:20,
      flex:1,
      borderColor:"blue",
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
  });
  