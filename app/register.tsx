import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { registerUser } from "../services/authService";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);
      await registerUser(email, password);

      Alert.alert("Succès", "Compte créé !");
      router.replace("/login");
    } catch (error) {
      Alert.alert("Erreur", "Impossible de créer le compte");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-3xl font-bold mb-8 text-center">
        Inscription
      </Text>

      <TextInput
        placeholder="Email"
        className="border p-4 mb-4 rounded-lg"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        className="border p-4 mb-6 rounded-lg"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="bg-green-500 p-4 rounded-lg"
        onPress={handleRegister}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-center font-bold">
            S'inscrire
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        className="mt-4"
        onPress={() => router.push("/login")}
      >
        <Text className="text-center text-blue-500">
          Déjà un compte ? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}