import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./TaskManager/types";
import AddEditTaskScreen from "./TaskManager/Screens/TaskAddEdit/TaskAddEdit";
import TaskListScreen from "./TaskManager/Screens/TasksList/TasksList";



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RNavigator(){
  return(  <Stack.Navigator>
        <Stack.Screen name="List" component={TaskListScreen}></Stack.Screen>
        <Stack.Screen name="AddEdit" component={AddEditTaskScreen}></Stack.Screen>
    </Stack.Navigator>
    )
}