
export interface Lead {
  leadId: string;
  contactDetails: string;
  relevantInfo: string;
  assignedTo: string;
  status: string;
}

export interface LeadCreationRequest {
  contactDetails: string;
  relevantInfo: string;
}

export interface LeadUpdateRequest {
  leadId: string;
  contactDetails?: string;
  relevantInfo?: string;
  assignedTo?: string;
  status?: string;
}

export interface LeadApiResponse {
  success: boolean;
  errorMessage?: string;
}

export interface LeadListApiResponse {
  leads: Lead[];
}

export interface LeadCreationApiResponse extends LeadApiResponse {
  lead: Lead;
}

export interface LeadUpdateApiResponse extends LeadApiResponse {
  updatedLead: Lead;
}