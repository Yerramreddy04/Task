import { Image, Thumbnail } from "native-base";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonWithTxt from "../CommonUtils/ButtonWithTxt";
import BackGroundImg from "../../bitsPilani.jpeg"

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    alert("Signing off byee....");
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={styles.container1}>
      <Text style={styles.textStyle}>Welcome</Text>
      <Text style={styles.textStyle}>Siva Jyothi</Text>
        <Thumbnail source={BackGroundImg} style={{height:300,width:300,marginTop:"20%"}} />
        <Text style={styles.textStyle1}>M-Tech programme 2019-2021</Text>
      <ButtonWithTxt
        text="Logout"
        press={handleLogout}
        containerStyle={styles.loginContainer}
        textUpperCase={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    margin: "10%",
    alignItems: "center",
    flex: 1,
  },
  loginContainer: {
    marginTop: "30%",
    flexDirection: "row",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 40,
  },
  textStyle1: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
