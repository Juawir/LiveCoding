import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const data = [
    {
      id: 1,
      wisata: "Bromo",
      tempat: "Pasuruan",
      harga: "Rp.500.000",
      tipe: "FamilyTour",
      star: "9/10",
      gambar: require("../assets/image/pemandangan.jpg"),
    },
    {
      id: 2,
      wisata: "Pantai",
      tempat: "Malang",
      harga: "Rp.500.000",
      tipe: "FamilyTour",
      star: "9/10",
      gambar: require("../assets/image/pemandangan.jpg"),
    },
    {
      id: 3,
      wisata: "Bromo",
      tempat: "Pasuruan",
      harga: "Rp.500.000",
      tipe: "FamilyTour",
      star: "9/10",
      gambar: require("../assets/image/pemandangan.jpg"),
    },
    {
      id: 4,
      wisata: "Pantai",
      tempat: "Malang",
      harga: "Rp.500.000",
      tipe: "FamilyTour",
      star: "9/10",
      gambar: require("../assets/image/pemandangan.jpg"),
    },
    {
      id: 5,
      wisata: "Bromo",
      tempat: "Pasuruan",
      harga: "Rp.500.000",
      tipe: "FamilyTour",
      star: "9/10",
      gambar: require("../assets/image/pemandangan.jpg"),
    },
    {
      id: 6,
      wisata: "Pantai",
      tempat: "Malang",
      harga: "Rp.500.000",
      tipe: "FamilyTour",
      star: "9/10",
      gambar: require("../assets/image/pemandangan.jpg"),
    },
    {
      id: 7,
      wisata: "Bromo",
      tempat: "Pasuruan",
      harga: "Rp.500.000",
      tipe: "FamilyTour",
      star: "9/10",
      gambar: require("../assets/image/pemandangan.jpg"),
    },
    {
      id: 8,
      wisata: "Pantai",
      tempat: "Malang",
      harga: "Rp.500.000",
      tipe: "FamilyTour",
      star: "9/10",
      gambar: require("../assets/image/pemandangan.jpg"),
    },
    {
      id: 9,
      wisata: "Bromo",
      tempat: "Pasuruan",
      harga: "Rp.500.000",
      tipe: "FamilyTour",
      star: "9/10",
      gambar: require("../assets/image/pemandangan.jpg"),
    },
    {
      id: 10,
      wisata: "Pantai",
      tempat: "Malang",
      harga: "Rp.500.000",
      tipe: "FamilyTour",
      star: "9/10",
      gambar: require("../assets/image/pemandangan.jpg"),
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <StatusBar style="auto" backgroundColor="white" />
      <View
        style={{
          height: "30%",
          width: "100%",
          backgroundColor: "#78C7C7",
          borderBottomRightRadius: 90,
          borderBottomLeftRadius: 90,
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: 70,
            width: "90%",
            borderRadius: 100,
            marginTop: 40,
          }}
        >
          <TouchableOpacity
            style={{ marginTop: 20, marginLeft: 20, flexDirection: "row" }}
          >
            <FontAwesome5 name="search" size={30} color="grey" />
            <Text style={{ marginTop: 7, marginLeft: 15 }}>
              Cari Destinasi Wisatamu Sekarang !!
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            height: "50%",
            position: "absolute",
            bottom: -30,
            borderRadius: 30,
            elevation: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "center", marginBottom: 12 }}>
            Unggulan Kami
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "blue",
                width: "40%",
                height: "100%",
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="wifi" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "purple",
                width: "40%",
                height: "100%",
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="hotel" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 60, flex: 1, width: "90%" }}>
        <Text style={{ textAlign: "left" }}>Pilihan Wisata terbaik</Text>
        <View style={{ flexDirection: "row" }}>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 180,
                  height: 240,
                  backgroundColor: "white",
                  margin: 5,
                  elevation: 10,
                }}
              >
                <ImageBackground
                  source={item.gambar}
                  style={{ width: 180, height: 170, backgroundColor: "black" }}
                >
                  <Text style={{ color: "white" }}>{item.tempat}</Text>
                </ImageBackground>
                <Text>{item.wisata}</Text>
                <Text>{item.star}</Text>

                <Text>
                  {item.harga}
                  <Text>{item.tipe}</Text>
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View
        style={{
          borderColor: "white",
          width: "100%",
          height: 20,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <TouchableOpacity>
          <FontAwesome5
            name="wifi"
            size={25}
            color="black"
            style={{ marginHorizontal: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5
            name="wifi"
            size={25}
            color="black"
            style={{ marginHorizontal: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5
            name="wifi"
            size={25}
            color="black"
            style={{ marginHorizontal: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
