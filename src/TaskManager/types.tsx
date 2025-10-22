export type Task = { id: string; text: string; description: string; done: boolean };

export type RootStackParamList = {
    List: undefined;
    AddEdit: { id?: string } | undefined;
}

export type TasksState = { tasks: Task[] };

export type Action =
    { type: "ADD"; text: string; description: string }
    | { type: "UPDATE"; id: string; text: string, description: string }
    | { type: "TOGGLE"; id: string }
    | { type: "DELETE"; id: string };


export type TasksContextValue = {
    tasks: Task[];
    add(text: string, description: string): void;
    update(id: string, text: string, description: string): void;
    toggle(id: string): void;
    remove(id: string): void;


}

export type TaskCardProps = {
    task: Task;
    onToggle(): void;
    onEdit(): void;
    onDelete(): void;
};