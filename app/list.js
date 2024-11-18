import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const listData = [
  {
    id: '1',
    image: require('../assets/ele.png'),
    title: 'John Doe',
    description: '6 anos na área de hotelaria para pets, hotel 5 estrelas.',
    email: 'johndoe@gmail.com',
  },
  {
    id: '2',
    image: require('../assets/ela.png'),
    title: 'Jane Smith',
    description: 'Veterinária competente, amo os animais.',
    email: 'janesmith@gmail.com',
  },
  {
    id: '3',
    image: require('../assets/ela.png'),
    title: 'Mayara Viana',
    description: 'Babá de pets, cuido como se fosse meus filhos.',
    email: 'may@gmail.com',
  },
  {
    id: '4',
    image: require('../assets/ele.png'),
    title: 'Felipe Neto',
    description: 'Compre conosco, melhores produtos para pets da região.',
    email: 'felipe@gmail.com',
  },
  {
    id: '5',
    image: require('../assets/ele.png'),
    title: 'Luiz Cardoso',
    description: 'Veterinário formado há seis anos, com o melhor atendimento para seus pets.',
    email: 'luizinho@gmail.com',
  },
  {
    id: '6',
    image: require('../assets/ela.png'),
    title: 'Camila Loures',
    description: 'Hotelaria para pets, melhor hotel do Brasil.',
    email: 'camilahotel@gmail.com',
  },
  {
    id: '7',
    image: require('../assets/ela.png'),
    title: 'Maria Antoniete ',
    description: 'Não tem com quem deixar seu pet? Ligue para Antoniete.',
    email: 'maria@gmail.com',
  },
  {
    id: '8',
    image: require('../assets/ele.png'),
    title: 'Pedro Miguel',
    description: 'Especialista em tosa, melhor pet shop da cidade.',
    email: 'pedro@gmail.com',
  },
];

const ListItem = ({ image, title, description, email }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity onPress={() => alert(`Mande um email para ${email}`)}>
        <Text style={styles.email}>Email {title}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ListaDeEmpreendedores = () => (
  <FlatList
    data={listData}
    renderItem={({ item }) => <ListItem {...item} />}
    keyExtractor={(item) => item.id} // Garante que a key seja usada corretamente
  />
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  email: {
    fontSize: 14,
    color: 'blue',
  },
});

export default ListaDeEmpreendedores;

