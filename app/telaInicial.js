import React from "react";
import { FlatList, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, } from "react-native";
import { BottomNavigation, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';  // Para os ícones personalizados

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
    flexDirection: 'row',  // Alinha o avatar e o nome do usuário na horizontal
    alignItems: 'center',
    marginBottom: 10,
  },
  usernameText: {
    marginLeft: 10, // Espaçamento entre o avatar e o nome
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 30,
    alignSelf: 'center', // Centraliza a imagem
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
});




// Dados do post (agora usando as imagens importadas)
const posts = [
  { legenda: 'Gatinhos para a doação, os dois bem cuidados, interessados entrar em contato, o número está na bio.', img: require("../assets/gatinhos.jpg"), user: 'analele', avatar: require( "../assets/analele.png") },
  { legenda: 'Meu fofinho de peruca kkkkkk', img: require("../assets/gato-de-peruca.jpg"), user: 'vitinho', avatar: require("../assets/vitinho.png")},
  { legenda: 'É emo ele oia kakakak', img: require("../assets/gato-emo.jpg"), user: 'ellen', avatar: require("../assets/ellen.png") },
  { legenda: 'Beissola na sua tela kkkkk', img: require("../assets/images.jpeg"), user: 'gigi', avatar: require("../assets/gigi.png") },
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

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  // Estados para Curtir e Salvar
  const [likes, setLikes] = React.useState({});
  const [saved, setSaved] = React.useState({});

  const toggleLike = (user) => {
    setLikes(prev => ({ ...prev, [user]: !prev[user] }));
  };

  const toggleSave = (user) => {
    setSaved(prev => ({ ...prev, [user]: !prev[user] }));
  };

  const Itens = ({ avatar, img, legenda, user }) => (
    <View style={styles.postContainer}>
      {/* Alinha avatar e nome do usuário horizontalmente */}
      <View style={styles.userContainer}>
        <Avatar.Image size={50} source={avatar} />
        <Text style={styles.usernameText}>{user}</Text>
      </View>
  
      {/* Exibição da imagem do post */}
      <Image source={img} style={styles.image} />
      <Text>{legenda}</Text>
      
      {/* Ações abaixo do post */}
      <View style={styles.actionsContainer}>
        {/* Ícone de Curtir */}
        <TouchableOpacity onPress={() => toggleLike(user)}>
          <MaterialCommunityIcons
            name={likes[user] ? 'heart' : 'heart-outline'}
            size={24}
            color="red"
            style={styles.icon}
          />
        </TouchableOpacity>
  
        {/* Ícone de Salvar */}
        <TouchableOpacity onPress={() => toggleSave(user)}>
          <MaterialCommunityIcons
            name={saved[user] ? 'bookmark' : 'bookmark-outline'}
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={posts}
          renderItem={({ item }) => <Itens {...item} />}
          keyExtractor={item => item.user}
        />
      </ScrollView>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

export default TimeLine;

