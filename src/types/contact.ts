export interface Contact {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  industry: string[];
  experience: string[];
  bio: string;
  email: string;
  linkedin: string;
  avatar: string;
  relatedDeals?: string[]; // IDs of related deals
  pastInteractions?: Array<{
    date: string;
    type: 'meeting' | 'email' | 'call';
    summary: string;
  }>;
}