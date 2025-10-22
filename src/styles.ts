import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  card: {
    flexDirection: "row",
    width:"100%",
    alignItems: "center",
    padding: 12,
    marginBottom:8,
    backgroundColor: "#f6f6f8",
    borderRadius: 12,
  },
  text: { fontSize: 16, fontWeight: "600" },
  meta: { fontSize: 12, color: "#666", marginTop: 4 },
  actions: { flexDirection: "row", marginLeft: 12 },
  label: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  done: { textDecorationLine: "line-through", color: "#6b7280" },
});
