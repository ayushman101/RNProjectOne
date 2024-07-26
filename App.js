// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
// import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { AppContextProvider } from './context';
import { Home } from './components/Home';

export default function App() {
  // const [text, setText]=useState('')
  // const [goalsList, setGoalsList]=useState([])

  return (
    <AppContextProvider>
      <Home/>
    </AppContextProvider>
    );
}

