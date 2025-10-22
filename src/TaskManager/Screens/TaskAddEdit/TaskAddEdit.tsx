import React from "react";
import { View, Text, TextInput, Button, Alert, Platform } from "react-native";
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
    const [description, setDescription] = React.useState(existing?.description ?? "");


    const onSave = () => {
        const textValue = text.trim();
        const descriptionValue = description.trim();

        if (!textValue || !descriptionValue) {

            if (Platform.OS === "web") {
                window.alert("Please fill in the task and task description properly")
                return
            }
            Alert.alert("Please fill in the task and task description properly");
            return;
        }
        if (id && existing) update(id, textValue, descriptionValue);
        else add(textValue, descriptionValue);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{id ? "Edit Task" : "Add Task"}</Text>
            <TextInput
                placeholder="Task"
                value={text}
                onChangeText={setText}
                style={styles.input}
            />
            <TextInput
                placeholder="Task description"
                value={description}
                onChangeText={setDescription}
                style={styles.input}
                multiline
            />
            <Button title="Save" onPress={onSave} />
        </View>
    );
}
