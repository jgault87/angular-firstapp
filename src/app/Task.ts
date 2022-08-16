export interface Task {
    // optional id
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}