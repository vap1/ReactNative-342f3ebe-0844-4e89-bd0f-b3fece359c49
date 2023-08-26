
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

export interface EmployeeDetails {
  // Define the fields for employee details here
}

export interface LeadDetails {
  // Define the fields for lead details here
}

export interface OpportunityDetails {
  // Define the fields for opportunity details here
}

export interface TaskDetails {
  // Define the fields for task details here
}