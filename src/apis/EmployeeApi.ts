
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Employee {
  employeeId: string;
  name: string;
  contactInfo: string;
  role: string;
  permissions: string;
}

export interface EmployeeDetails {
  // Define the fields for employee details here
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export async function addEmployee(employeeDetails: EmployeeDetails): Promise<UserRegistrationResponse> {
  try {
    const response = await axios.post<UserRegistrationResponse>(`${BASE_URL}/employees`, employeeDetails);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add employee');
  }
}

export async function editEmployee(employeeId: string, employeeDetails: EmployeeDetails): Promise<UserRegistrationResponse> {
  try {
    const response = await axios.put<UserRegistrationResponse>(`${BASE_URL}/employees/${employeeId}`, employeeDetails);
    return response.data;
  } catch (error) {
    throw new Error('Failed to edit employee');
  }
}

export async function removeEmployee(employeeId: string): Promise<UserRegistrationResponse> {
  try {
    const response = await axios.delete<UserRegistrationResponse>(`${BASE_URL}/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to remove employee');
  }
}