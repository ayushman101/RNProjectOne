import { useContext } from 'react';
import {StyleSheet,View,TextInput,Button} from 'react-native';
import AppContext from '../context';

const GoalInput=()=>{

    const {setInputText,setList}=useContext(AppContext)

    return (
        <View style={styles.inputContainer}>

        <TextInput placeholder='Your goal name' style={styles.textInputStyle} onChangeText={setInputText}/>          
      
        <View style={{backgroundColor:'#007AFF', borderRadius: 10, marginTop:8}}>
          <Button title='Add Goal' color='white' onPress={setList}/>
        </View>  
      
      </View>

    )
}

const styles= StyleSheet.create({
    inputContainer:{
        paddingTop:10,
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-evenly',
        borderBottomWidth:1,
        // borderWidth: 2,
        borderColor: 'grey',
      },

      textInputStyle:{
        width:'60%',
        height:'30%', 
        marginTop:10, 
        paddingLeft:10
    },  
    
    
})

export default GoalInput