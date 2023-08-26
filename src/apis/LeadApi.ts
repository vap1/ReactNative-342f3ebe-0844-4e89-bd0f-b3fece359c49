
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Lead {
  leadId: string;
  contactDetails: string;
  relevantInfo: string;
  assignedTo: string;
  status: string;
}

export interface LeadDetails {
  // Define the fields for lead details here
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export class LeadApi {
  static async addLead(leadDetails: LeadDetails): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.post(`${BASE_URL}/leads`, leadDetails);
      return response.data;
    } catch (error) {
      console.error('Error adding lead:', error);
      throw error;
    }
  }

  static async updateLead(leadId: string, leadDetails: LeadDetails): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.put(`${BASE_URL}/leads/${leadId}`, leadDetails);
      return response.data;
    } catch (error) {
      console.error('Error updating lead:', error);
      throw error;
    }
  }
}