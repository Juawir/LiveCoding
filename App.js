import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
