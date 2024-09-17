import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <View style={{ flex: 1, backgroundColor: "#78C7C7" }}>
      <StatusBar style="auto" />

      <View style={{ flex: 1, backgroundColor: "#78C7C7" }}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../assets/image/Group 1.png")}
        />
      </View>
      <Text style={{ textAlign: "center", fontSize: 12, color: "white" }}>
        Bergabunglah dengan kami rasakan liburan dengan promo yang super{" "}
        <Text style={{ fontWeight: "bold" }}>MURAH</Text>
        !!!
      </Text>
      <View
        style={{
          flex: 2,
          backgroundColor: "white",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <View
          style={{
            padding: 16,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 12 }}>
            Login
          </Text>
          <View style={{ width: "90%", marginTop: 50 }}>
            <Text style={{ textAlign: "center" }}>Email</Text>
            <TextInput
              placeholder="Masukkan Email Anda"
              style={{
                height: 50,
                backgroundColor: "#ddd",
                padding: 8,
              }}
            />
          </View>
          <View style={{ width: "90%" }}>
            <Text style={{ textAlign: "center" }}>Password</Text>
            <TextInput
              placeholder="Masukkan Email Anda"
              style={{
                height: 50,
                backgroundColor: "#ddd",
                padding: 8,
              }}
            />
            <TouchableOpacity style={{ marginBottom: 50 }}>
              <Text style={{ textAlign: "right", color: "blue" }}>
                {" "}
                Forget Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom: 80 }}>
              <View
                style={{
                  height: 50,
                  backgroundColor: "rgba(120,199,199,0.5)",
                  justifyContent: "center",
                }}
              >
                <Text style={{ textAlign: "center" }}>Login</Text>
              </View>
            </TouchableOpacity>
            <Text style={{fontSize:15, justifyContent:"center", fontWeight:'600', fontStyle:'italic'}}>“Terhubung dengan dunia dalam genggamanmu”</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
