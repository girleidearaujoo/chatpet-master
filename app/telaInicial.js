import React from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { BottomNavigation, Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fde6de",
    padding: 16,
  },
  postContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  usernameText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  actionsContainer: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "space-around",
    width: "100%",
  },
  fixedButton: {
    position: "absolute",
    top: 20,
    padding: 10,
    backgroundColor: "#ff8247",
    borderRadius: 50,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonServicos: {
    right: 90, // Ajusta a posição para não sobrepor o botão "Adicionar"
  },
  buttonAdicionar: {
    right: 20, // Posição original do botão fixo à direita
  },
});

// Dados do post
const posts = [
  { legenda: "Gatinhos para a doação, interessados entrar em contato.", img: require("../assets/gatinhos.jpg"), user: "analele", avatar: require("../assets/analele.png") },
  { legenda: "Meu fofinho de peruca kkkkkk", img: require("../assets/gato-de-peruca.jpg"), user: "vitinho", avatar: require("../assets/vitinho.png") },
  { legenda: "É emo ele oia kakakak", img: require("../assets/gato-emo.jpg"), user: "ellen", avatar: require("../assets/ellen.png") },
  { legenda: "Beiçola na sua tela kkkkk", img: require("../assets/images.jpeg"), user: "gigi", avatar: require("../assets/gigi.png") },
  { legenda: "Meus denguinhossss", img: require("../assets/periquito.jpg"), user: "darline", avatar: require("../assets/darline.png") },
];

// Componente de cada item
const Itens = ({ avatar, img, legenda, user }) => {
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  return (
    <View style={styles.postContainer}>
      <View style={styles.userContainer}>
        <Avatar.Image size={50} source={avatar} />
        <Text style={styles.usernameText}>{user}</Text>
      </View>

      <Image source={img} style={styles.image} resizeMode="cover" />
      <Text>{legenda}</Text>

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <MaterialCommunityIcons
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? "red" : "black"}
          />
          <Text>{liked ? "Curtido" : "Curtir"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSaved(!saved)}>
          <MaterialCommunityIcons
            name={saved ? "bookmark" : "bookmark-outline"}
            size={24}
            color={saved ? "#007bff" : "black"}
          />
          <Text>{saved ? "Salvo" : "Salvar"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Funções para navegação inferior
const MusicRoute = () => <Text>Favorites</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

// Componente principal
const TimeLine = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "music", title: "Favorites", focusedIcon: "heart", unfocusedIcon: "heart-outline" },
    { key: "albums", title: "Albums", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
    { key: "notifications", title: "Notifications", focusedIcon: "bell", unfocusedIcon: "bell-outline" },
  ]);

  const router = useRouter();

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Itens {...item} />}
        keyExtractor={(item) => item.user}
      />

      {/* Botões fixos */}
      <TouchableOpacity
        style={[styles.fixedButton, styles.buttonServicos]}
        onPress={() => router.push("/list")}
      >
        <Text style={styles.buttonText}>Serviços</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.fixedButton, styles.buttonAdicionar]}
        onPress={() => router.push("/adicionar")} // Nova rota para "Adicionar"
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

export default TimeLine;
