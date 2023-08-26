
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface UserRegistrationRequest {
  username: string;
  password: string;
  email: string;
  role: string;
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export async function registerUser(request: UserRegistrationRequest): Promise<UserRegistrationResponse> {
  try {
    const response = await axios.post<UserRegistrationResponse>(`${BASE_URL}/register`, request);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register user');
  }
}