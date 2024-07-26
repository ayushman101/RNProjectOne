import { useContext } from "react"
import { StyleSheet, View, FlatList, Text } from "react-native"
import AppContext from "../context"
import GoalListItem from "./GoalListItem"

const GoalList=()=>{

    const {goalsList}=useContext(AppContext)

    return (
        <View style={styles.ListContainer}>
        <FlatList data={goalsList} renderItem={(goalItem) => {
           return (
             <GoalListItem index={goalItem.index} item={goalItem.item.title} id={goalItem.item.id}/>
           )
           }}              
         />
       </View>
 
    )
}


const styles= StyleSheet.create({
    ListContainer:{
        flex:6,
      },   

})

export default GoalList;