import { Contact } from '../types/contact';

export const expertContacts: Contact[] = [
  {
    id: '1',
    name: 'Dr. Emily Chen',
    title: 'Former CTO at TechCorp',
    company: 'Independent Advisor',
    expertise: ['Technical Architecture', 'AI/ML', 'Scale Infrastructure', 'Engineering Leadership'],
    industry: ['Enterprise Software', 'AI/ML', 'Cloud Infrastructure'],
    experience: [
      'Led 500+ engineering team at TechCorp',
      'Scaled infrastructure from 1M to 50M users',
      'PhD in Computer Science from Stanford'
    ],
    bio: 'Technical leader with 15+ years of experience scaling enterprise software companies. Expert in AI/ML infrastructure and engineering team building.',
    email: 'emily.chen@example.com',
    linkedin: 'linkedin.com/in/emilychen',
    avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
    relatedDeals: ['1', '4', '8'],
    pastInteractions: [
      {
        date: '2025-05-01',
        type: 'meeting',
        summary: 'Technical due diligence for NeuralSync'
      },
      {
        date: '2025-04-15',
        type: 'call',
        summary: 'Initial discussion about CyberShield architecture'
      }
    ]
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    title: 'VP of Sales, Enterprise',
    company: 'CloudScale Inc',
    expertise: ['Enterprise Sales', 'Go-to-Market Strategy', 'Sales Operations', 'Channel Partnerships'],
    industry: ['SaaS', 'Enterprise Software', 'Security'],
    experience: [
      'Built $100M ARR enterprise sales team',
      'Developed GTM strategy for EMEA expansion',
      '20+ years in enterprise software sales'
    ],
    bio: 'Enterprise sales executive specialized in building and scaling high-performance sales teams for B2B SaaS companies.',
    email: 'marcus.r@example.com',
    linkedin: 'linkedin.com/in/marcusrodriguez',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    relatedDeals: ['2', '3', '5'],
    pastInteractions: [
      {
        date: '2025-05-03',
        type: 'meeting',
        summary: 'Sales strategy review for GreenLoop'
      }
    ]
  },
  {
    id: '3',
    name: 'Sarah Kim',
    title: 'Head of Growth',
    company: 'GrowthLabs',
    expertise: ['Growth Strategy', 'Product Marketing', 'User Acquisition', 'Analytics'],
    industry: ['Consumer Tech', 'Marketplace', 'Mobile Apps'],
    experience: [
      'Scaled user base from 100K to 10M users',
      'Led growth at 3 unicorn startups',
      'Former Product Marketing at Google'
    ],
    bio: 'Growth expert specializing in consumer products and marketplaces. Strong focus on data-driven decision making and rapid experimentation.',
    email: 'sarah.kim@example.com',
    linkedin: 'linkedin.com/in/sarahkim',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    relatedDeals: ['6', '7', '9'],
    pastInteractions: [
      {
        date: '2025-04-28',
        type: 'email',
        summary: 'Growth metrics analysis for EdTechPro'
      },
      {
        date: '2025-04-20',
        type: 'meeting',
        summary: 'User acquisition strategy for MetaVerse'
      }
    ]
  },
  {
    id: '4',
    name: 'David Patel',
    title: 'COO',
    company: 'OperationsX',
    expertise: ['Operations Strategy', 'Supply Chain', 'Process Optimization', 'Team Building'],
    industry: ['E-commerce', 'Logistics', 'Manufacturing'],
    experience: [
      'Scaled operations from $1M to $500M revenue',
      'Led 1000+ person operations team',
      'MBA from Harvard Business School'
    ],
    bio: 'Operations executive with deep expertise in scaling e-commerce and logistics companies. Specialized in building efficient, scalable operations.',
    email: 'david.p@example.com',
    linkedin: 'linkedin.com/in/davidpatel',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    relatedDeals: ['5', '7', '10'],
    pastInteractions: [
      {
        date: '2025-05-02',
        type: 'call',
        summary: 'Operations review for DroneLogistics'
      }
    ]
  },
  {
    id: '5',
    name: 'Rachel Thompson',
    title: 'Product Strategy Lead',
    company: 'Product Advisory Group',
    expertise: ['Product Strategy', 'UX Design', 'Product Management', 'Market Research'],
    industry: ['B2B SaaS', 'FinTech', 'Healthcare Tech'],
    experience: [
      'Led product teams at 2 IPO companies',
      'Launched 5 successful enterprise products',
      'Former PM at Microsoft'
    ],
    bio: 'Product leader with extensive experience in B2B software. Specialized in enterprise product strategy and go-to-market execution.',
    email: 'rachel.t@example.com',
    linkedin: 'linkedin.com/in/rachelthompson',
    avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
    relatedDeals: ['1', '2', '8'],
    pastInteractions: [
      {
        date: '2025-04-25',
        type: 'meeting',
        summary: 'Product roadmap review for FinanceAI'
      },
      {
        date: '2025-04-18',
        type: 'email',
        summary: 'UX feedback for QuantumHealth platform'
      }
    ]
  }
];