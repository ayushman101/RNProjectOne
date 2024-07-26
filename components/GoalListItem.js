import { useContext } from "react"
import { StyleSheet, View, Text, Pressable } from "react-native"
import AppContext from "../context"

const GoalListItem=(props)=>{

    const {setGoalsList}=useContext(AppContext)

    function deleteGoalItem(id){
        setGoalsList(oldGoals=> {
            return oldGoals.filter((goal)=> goal.id!==id )
        })
      }
    

    return (
        <Pressable onPress={deleteGoalItem.bind(this, props.id)}>
            <View style={styles.listItemContainer} key={props.index}>
                <Text style={{color:'white'}}>{props.item}</Text>
            </View>
        </Pressable>
    )
}

const styles=StyleSheet.create({
        
    listItemContainer:{
        padding:15,
        margin:20,
        backgroundColor: '#007AFF',
        borderRadius: 15,
      }
    
})


export default GoalListItem