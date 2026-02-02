import { Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigtor from "./src/navigation/rootNavigator";

function App() {
  return (
<NavigationContainer>

  <RootNavigtor />
</NavigationContainer>
  
    
  );
}

export default App;