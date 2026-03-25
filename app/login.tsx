import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { loginUser } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const data = await loginUser(email, password);

      console.log("TOKEN:", data.token);

      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("Erreur", "Email ou mot de passe incorrect");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-3xl font-bold mb-8 text-center">
        Smart Support AI
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
        className="bg-blue-500 p-4 rounded-lg"
        onPress={handleLogin}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-center font-bold">
            Se connecter
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        className="mt-4"
        onPress={() => router.push("/register")}
      >
        <Text className="text-center text-blue-500">
          Cree un compte
        </Text>
      </TouchableOpacity>
    </View>
  );
}