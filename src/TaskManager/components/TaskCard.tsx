import React from "react";
import { View, Text, Button, TouchableOpacity, Platform, Alert } from "react-native";
import type { Task, TaskCardProps } from "../types";
import { styles } from "../../styles";



export default function TaskCard({ task, onToggle, onEdit, onDelete }: TaskCardProps) {
  const confirmDelete = () => {
    // Alert.alert on web is limited; the buttons array is ignored, and sometimes nothing shows depending on the bundler. Use a web fallback.
    if (Platform.OS === "web") {
      if (window.confirm("Delete task?\nThis cannot be undone.")) {
        onDelete();
      }
      return;
    }
 
    // For IOS and Android
    Alert.alert("Delete task", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: onDelete },
    ]);
  }
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onToggle} style={{ flex: 1 }}>
        <Text style={[styles.text, task.done && styles.done]}>{task.text}</Text>
        <Text style={styles.meta}>{task.done ? "✅ Completed" : "⏳ Incomplete"}</Text>
      </TouchableOpacity>

      <View style={styles.actions}>
        <Button title="Edit" onPress={onEdit} />
        <View style={{ width: 8 }} />
        <Button title="Delete" color="#cc3344" onPress={confirmDelete} />
      </View>
    </View>
  );
}
