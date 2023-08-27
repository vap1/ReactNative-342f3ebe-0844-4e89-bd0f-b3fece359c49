
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Opportunity {
  opportunityId: string;
  leadId: string;
  assignedTo: string;
  status: string;
  notes: string;
  documents: string;
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export class OpportunityApi {
  static async createOpportunity(opportunity: Opportunity): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.post(`${BASE_URL}/opportunities`, opportunity);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create opportunity');
    }
  }

  static async updateOpportunity(opportunityId: string, updatedOpportunity: Opportunity): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.put(`${BASE_URL}/opportunities/${opportunityId}`, updatedOpportunity);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update opportunity');
    }
  }
}