import { TasksProvider } from './TaskManager/TasksContext';
import { NavigationContainer } from "@react-navigation/native";
import RNavigator from './RNavigator';


export default function App() {
  return (
  <TasksProvider>
    <NavigationContainer>
      <RNavigator />
    </NavigationContainer>
  </TasksProvider>
  );
}

