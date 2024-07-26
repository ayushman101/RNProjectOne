import { useState, createContext } from "react";

const AppContext = createContext(undefined);

export const AppContextProvider = ({children})=>{
    const [text, setText]=useState('')
    const [goalsList, setGoalsList]=useState([])

    
  function setInputText(enteredText){
    setText(enteredText)
  }

  function setList(){
    setGoalsList(oldGoals => [...oldGoals, {title:text, id: Math.random().toString()}])
  }

    return(
        <AppContext.Provider value={{text,setText, goalsList, setGoalsList, setList, setInputText}}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContext