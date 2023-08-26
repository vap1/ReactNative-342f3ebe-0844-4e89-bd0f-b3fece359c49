
export interface Task {
  taskId: string;
  assignedTo: string;
  status: string;
  comments: string;
}

export interface TaskDetails {
  // Define the fields for task details here
}

export interface TaskResponse {
  success: boolean;
  errorMessage?: string;
}