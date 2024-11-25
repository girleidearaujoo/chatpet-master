import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker"; // Biblioteca para selecionar imagens
import { useRouter } from "expo-router"; // Para navegação

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#fde6de",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ff8247",
    padding: 15,
    borderRadius: 50,
    width: 200,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  chooseImageButton: {
    backgroundColor: "#ff8247",
    padding: 10,
    borderRadius: 50,
    marginBottom: 15,
    alignItems: "center",
  },
  chooseImageText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sla: {
    alignItems: 'center',
  }
});

const AddPost = () => {
  const [image, setImage] = useState(null); // Estado para armazenar a imagem selecionada
  const [caption, setCaption] = useState(""); // Estado para armazenar a legenda
  const router = useRouter();

  // Função para selecionar imagem
  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Atualiza o estado com o URI da imagem
    }
  };

  // Função para publicar
  const handlePublish = () => {
    if (!image || !caption.trim()) {
      alert("Por favor, adicione uma foto e uma legenda antes de publicar.");
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou armazená-los
    console.log("Imagem:", image);
    console.log("Legenda:", caption);

    alert("Publicação realizada com sucesso!");
    router.push("/telaInicial"); // Volta para a tela inicial
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Foto</Text>
        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.imagePreview} />
          ) : (
            <Text>Nenhuma imagem selecionada</Text>
          )}
          <TouchableOpacity style={styles.chooseImageButton} onPress={handlePickImage}>
            <Text style={styles.chooseImageText}>Escolher Imagem</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Legenda</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua legenda aqui..."
          value={caption}
          onChangeText={setCaption}
        />
      </View>
        <View style={styles.sla}>
      <TouchableOpacity style={styles.button} onPress={handlePublish}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>
        </View>
    </View>
  );
};

export default AddPost;
