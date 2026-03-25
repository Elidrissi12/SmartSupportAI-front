import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Profile() {
  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-4">
        Mon Profil
      </Text>

      <Text className="mb-2">Email: user@test.com</Text>

      <TouchableOpacity
        className="bg-red-500 p-4 rounded-lg mt-6"
        onPress={() => router.replace("/login")}
      >
        <Text className="text-white text-center font-bold">
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}