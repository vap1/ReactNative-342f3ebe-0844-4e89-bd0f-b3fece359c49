
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Task {
  taskId: string;
  assignedTo: string;
  status: string;
  comments: string;
}

export interface CreateTaskRequest {
  assignedTo: string;
  status: string;
  comments: string;
}

export interface UpdateTaskRequest {
  status: string;
  comments: string;
}

export async function createTask(task: CreateTaskRequest): Promise<Task> {
  try {
    const response = await axios.post<Task>(`${BASE_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create task');
  }
}

export async function updateTask(taskId: string, task: UpdateTaskRequest): Promise<Task> {
  try {
    const response = await axios.put<Task>(`${BASE_URL}/tasks/${taskId}`, task);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update task');
  }
}