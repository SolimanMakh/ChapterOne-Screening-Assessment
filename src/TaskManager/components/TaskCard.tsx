import React from "react";
import { View, Text, Button, TouchableOpacity, Alert } from "react-native";
import type { Task, TaskCardProps } from "../types";
import { styles } from "../../styles";



export default function TaskCard({ task, onToggle, onEdit, onDelete }: TaskCardProps) {
  const confirmDelete = () =>
    Alert.alert("Delete task", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: onDelete },
    ]);
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
