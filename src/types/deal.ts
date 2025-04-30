import { MarketComp } from './marketComp';

export interface FounderAssessment {
  experience: number;
  domain: number;
  execution: number;
  vision: number;
  leadership: number;
}

export interface CompanyMetrics {
  revenue: {
    current: number;
    growth: number;
    projection: number;
  };
  traction: {
    users: number;
    growth: number;
    engagement: number;
  };
  competitors: Array<{
    name: string;
    strength: number;
    differentiator: string;
  }>;
  marketComps: MarketComp[];
  founderAssessment: FounderAssessment;
}

export interface Deal {
  id: string;
  company: string;
  contactName: string;
  email: string;
  description: string;
  industry: string;
  stage: string;
  raiseAmount: string;
  receivedDate: string;
  status: 'Intake' | 'Coffee Chats' | 'Due Diligence' | 'Investment Committee' | 'Portfolio';
  priority: 'low' | 'medium' | 'high';
  documents: {
    type: 'email' | 'pdf' | 'docsend';
    link?: string;
    name: string;
    status: 'Intake' | 'Coffee Chats' | 'Due Diligence' | 'Investment Committee' | 'Portfolio';
  }[];
  metrics?: CompanyMetrics;
}