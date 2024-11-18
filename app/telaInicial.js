import React from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { BottomNavigation, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { useRouter } from 'expo-router'; // Para navegação com Expo Router

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  userContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 10,
  },
  usernameText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 30,
    alignSelf: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-around',
    width: '100%',
  },
  icon: {
    marginHorizontal: 10,
  },
  fixedButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 50,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

// Dados do post
const posts = [
  { legenda: 'Gatinhos para a doação, os dois bem cuidados, interessados entrar em contato, o número está na bio.', img: require("../assets/gatinhos.jpg"), user: 'analele', avatar: require( "../assets/analele.png") },
  { legenda: 'Meu fofinho de peruca kkkkkk', img: require("../assets/gato-de-peruca.jpg"), user: 'vitinho', avatar: require("../assets/vitinho.png")},
  { legenda: 'É emo ele oia kakakak', img: require("../assets/gato-emo.jpg"), user: 'ellen', avatar: require("../assets/ellen.png") },
  { legenda: 'Beiçola na sua tela kkkkk', img: require("../assets/images.jpeg"), user: 'gigi', avatar: require("../assets/gigi.png") },
  { legenda: 'Meus denguinhossss', img: require("../assets/periquito.jpg"), user: 'darline', avatar: require("../assets/darline.png")},
];

// Funções de Navegação
const MusicRoute = () => <Text>Favorites</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

const TimeLine = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);
  
  const router = useRouter(); // Usa o hook do Expo Router
  
  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  const Itens = ({ avatar, img, legenda, user }) => (
    <View style={styles.postContainer}>
      <View style={styles.userContainer}>
        <Avatar.Image size={50} source={avatar} />
        <Text style={styles.usernameText}>{user}</Text>
      </View>

      <Image source={img} style={styles.image} />
      <Text>{legenda}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Itens {...item} />}
        keyExtractor={item => item.user}
      />

      {/* Botão fixo */}
      <TouchableOpacity 
        style={styles.fixedButton} 
        onPress={() => router.push('/list')} // Rota configurada no Expo Router
      >
        <Text style={styles.buttonText}>Serviços</Text>
      </TouchableOpacity>

      {/* Navegação inferior */}
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

export default TimeLine;
