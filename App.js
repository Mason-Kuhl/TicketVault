import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import logo from "./assets/concert.png";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {
  const [text, setText] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Ticket Vault</Text>
      <TextInput
        style={styles.ticketInput}
        onChangeText={(newText) => setText(newText)}
        placeholder="Number of tickets"
      />
      <TouchableOpacity
        style={styles.calculateBtn}
        onPress={() => {
          setPrice(text * 99.99);
        }}
      >
        <Text style={styles.calculateTxt}>Find The Cost</Text>
      </TouchableOpacity>
      <Text style={styles.totalPriceTxt}>Ticket Cost: ${price.toFixed(2)}</Text>
      <Image source={logo} style={styles.logo} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 60,
  },
  ticketInput: {
    height: 60,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 35,
    marginTop: 50,
  },
  calculateBtn: {
    backgroundColor: "#f98b88",
    padding: 10,
    marginTop: 50,
  },
  calculateTxt: {
    fontSize: 30,
    color: "#000",
  },
  totalPriceTxt: {
    fontSize: 25,
    marginTop: 70,
  },
  logo: {
    width: 449,
    height: 218,
    marginTop: 70,
  },
});
