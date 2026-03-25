import { View, Text } from "react-native";

export default function Dashboard() {
  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-4">
        Dashboard
      </Text>

      <View className="bg-blue-100 p-4 rounded-xl mb-4">
        <Text className="text-lg font-semibold">
          Tickets ouverts
        </Text>
        <Text className="text-3xl font-bold mt-2">
          5
        </Text>
      </View>

      <View className="bg-green-100 p-4 rounded-xl mb-4">
        <Text className="text-lg font-semibold">
          Tickets résolus
        </Text>
        <Text className="text-3xl font-bold mt-2">
          12
        </Text>
      </View>
    </View>
  );
}