import React from "react";
import { View, Button, FlatList, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types";
import { useTasks } from "../../TasksContext";
import { styles } from "../../../styles"
import TaskCard from "../../components/TaskCard";


type Props = NativeStackScreenProps<RootStackParamList, "List">;

export default function TaskListScreen({ navigation }: Props) {
    const { tasks, toggle, remove } = useTasks();

    return (
        <View style={styles.container}>
            <Button title="Add Task" onPress={() => navigation.navigate("AddEdit")} />
            <FlatList data={tasks} keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingVertical: 12 }}
                renderItem={((({ item }) => (<Text>
                    <TaskCard
                        task={item}
                        onToggle={() => toggle(item.id)}
                        onEdit={() => navigation.navigate("AddEdit", { id: item.id })}
                        onDelete={() => remove(item.id)}
                    />
                </Text>)))}
                ListEmptyComponent={
                    <Text style={{ textAlign: "center", marginTop: 24, color: "#666" }}>
                        No tasks added yet!
                    </Text>
                }
            />
        </View>
    )
}