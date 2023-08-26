
export interface Employee {
  employeeId: string;
  name: string;
  contactInfo: string;
  role: string;
  permissions: string;
}

export interface EmployeeRequest {
  name: string;
  contactInfo: string;
  role: string;
  permissions: string;
}

export interface EmployeeResponse {
  success: boolean;
  errorMessage?: string;
}