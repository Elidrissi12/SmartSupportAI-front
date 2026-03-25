import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import api from "../../services/api";

type Ticket = {
  id: string;
  title: string;
  description?: string;
  status?: number;
  priority?: number;
};

export default function Tickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await api.get("/tickets");
        setTickets(res.data ?? []);
      } catch (e: any) {
        Alert.alert(
          "Erreur",
          e?.response?.data?.message ?? "Impossible de charger les tickets (401 ?)"
        );
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-4">Mes Tickets</Text>

      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={() => {
          setLoading(true);
          api
            .get("/tickets")
            .then((res) => setTickets(res.data ?? []))
            .catch(() => Alert.alert("Erreur", "Impossible de rafraîchir"))
            .finally(() => setLoading(false));
        }}
        renderItem={({ item }) => (
          <View className="p-4 bg-gray-100 rounded-xl mb-3">
            <Text className="font-semibold">{item.title}</Text>
            <Text className="text-sm text-gray-500">
              Statut: {item.status} | Priorité: {item.priority}
            </Text>
          </View>
        )}
      />
    </View>
  );
}