import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTasks } from "../../TasksContext";
import { styles } from "../../../styles";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "AddEdit">;

export default function AddEditTaskScreen({ route, navigation }: Props) {

  // Grabbing the id from the route params to find out if it exist, if not then we are creating a new task
  
  const { id } = route.params || {};
  const { tasks, add, update } = useTasks();

  const existing = id ? tasks.find((t) => t.id === id) : undefined;
  const [text, setText] = React.useState(existing?.text ?? "");

  const onSave = () => {
    const value = text.trim();
    if (!value) {
      Alert.alert("Please enter a task description");
      return;
    }
    if (id && existing) update(id, value);
    else add(value);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{id ? "Edit Task" : "Add Task"}</Text>
      <TextInput
        placeholder="Task description"
        value={text}
        onChangeText={setText}
        style={styles.input}
        multiline
      />
      <Button title="Save" onPress={onSave} />
    </View>
  );
}
