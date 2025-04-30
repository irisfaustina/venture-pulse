import { Deal } from '../types/deal';

export const mockDeals: Deal[] = [
  {
    id: '1',
    company: 'NeuralSync',
    contactName: 'Sarah Chen',
    email: 'sarah@neuralsync.ai',
    description: 'AI-powered data synchronization platform that reduces integration time by 80% and eliminates manual data reconciliation.',
    industry: 'AI/ML',
    stage: 'Seed',
    raiseAmount: '$3M',
    receivedDate: '2025-05-10T14:30:00',
    status: 'Due Diligence',
    priority: 'high',
    documents: [
      {
        type: 'email',
        name: 'Introduction Email',
        status: 'Intake'
      },
      {
        type: 'pdf',
        name: 'NeuralSync_Deck.pdf',
        status: 'Due Diligence'
      }
    ],
    metrics: {
      revenue: {
        current: 500000,
        growth: 150,
        projection: 2500000
      },
      traction: {
        users: 50000,
        growth: 25,
        engagement: 8.5
      },
      competitors: [
        {
          name: 'DataFlow',
          strength: 7,
          differentiator: 'More established but slower integration process'
        },
        {
          name: 'SyncWise',
          strength: 6,
          differentiator: 'Better UI but limited AI capabilities'
        }
      ],
      marketComps: [
        {
          name: 'Snowflake',
          ticker: 'SNOW',
          marketCap: '$67B',
          revenue: '$2.5B',
          growth: 85,
          multiple: 26.8
        },
        {
          name: 'MongoDB',
          ticker: 'MDB',
          marketCap: '$32B',
          revenue: '$1.2B',
          growth: 47,
          multiple: 26.7
        }
      ],
      founderAssessment: {
        experience: 9,
        domain: 8,
        execution: 9,
        vision: 9,
        leadership: 8
      }
    }
  },
  {
    id: '2',
    company: 'QuantumHealth',
    contactName: 'Michael Williams',
    email: 'michael@quantumhealth.io',
    description: 'Building the next generation of personalized preventative healthcare using quantum computing to analyze biomarkers.',
    industry: 'Healthtech',
    stage: 'Pre-seed',
    raiseAmount: '$1.5M',
    receivedDate: '2025-05-12T09:15:00',
    status: 'Intake',
    priority: 'medium',
    documents: [
      {
        type: 'email',
        name: 'Intro from Alex',
        status: 'Intake'
      },
      {
        type: 'docsend',
        link: 'https://docsend.com/view/quantumhealth-deck',
        name: 'Pitch Deck',
        status: 'Intake'
      }
    ],
    metrics: {
      revenue: {
        current: 100000,
        growth: 200,
        projection: 1000000
      },
      traction: {
        users: 5000,
        growth: 40,
        engagement: 9.2
      },
      competitors: [
        {
          name: 'HealthAI',
          strength: 8,
          differentiator: 'Larger dataset but traditional ML approach'
        },
        {
          name: 'BioMarker',
          strength: 5,
          differentiator: 'Limited to specific biomarkers'
        }
      ],
      marketComps: [
        {
          name: 'Butterfly Network',
          ticker: 'BFLY',
          marketCap: '$2.1B',
          revenue: '$62M',
          growth: 35,
          multiple: 33.9
        },
        {
          name: '23andMe',
          ticker: 'ME',
          marketCap: '$1.8B',
          revenue: '$271M',
          growth: 20,
          multiple: 6.6
        }
      ],
      founderAssessment: {
        experience: 7,
        domain: 9,
        execution: 8,
        vision: 9,
        leadership: 7
      }
    }
  },
  {
    id: '3',
    company: 'GreenLoop',
    contactName: 'Lisa Park',
    email: 'lisa@greenloop.co',
    description: 'Circular economy platform connecting businesses to optimize waste reduction and resource sharing through AI-powered matching.',
    industry: 'Cleantech',
    stage: 'Series A',
    raiseAmount: '$10M',
    receivedDate: '2025-05-08T11:20:00',
    status: 'Investment Committee',
    priority: 'high',
    documents: [
      {
        type: 'pdf',
        name: 'GreenLoop_Series_A.pdf',
        status: 'Investment Committee'
      }
    ],
    metrics: {
      revenue: {
        current: 2500000,
        growth: 180,
        projection: 8000000
      },
      traction: {
        users: 1200,
        growth: 45,
        engagement: 9.1
      },
      competitors: [
        {
          name: 'WasteWise',
          strength: 6,
          differentiator: 'Established but regional focus'
        },
        {
          name: 'CircularTech',
          strength: 7,
          differentiator: 'Strong in Europe but limited AI capabilities'
        }
      ],
      marketComps: [
        {
          name: 'Rubicon',
          ticker: 'RBT',
          marketCap: '$450M',
          revenue: '$675M',
          growth: 35,
          multiple: 0.67
        }
      ],
      founderAssessment: {
        experience: 8,
        domain: 9,
        execution: 8,
        vision: 9,
        leadership: 8
      }
    }
  },
  {
    id: '4',
    company: 'CyberShield',
    contactName: 'Alex Thompson',
    email: 'alex@cybershield.io',
    description: 'Zero-trust security platform using behavioral biometrics and continuous authentication for enterprise security.',
    industry: 'Cybersecurity',
    stage: 'Seed',
    raiseAmount: '$4M',
    receivedDate: '2025-05-09T15:45:00',
    status: 'Due Diligence',
    priority: 'high',
    documents: [
      {
        type: 'docsend',
        link: 'https://docsend.com/view/cybershield-deck',
        name: 'Pitch Deck',
        status: 'Due Diligence'
      }
    ],
    metrics: {
      revenue: {
        current: 800000,
        growth: 220,
        projection: 3500000
      },
      traction: {
        users: 75,
        growth: 50,
        engagement: 9.5
      },
      competitors: [
        {
          name: 'SecureID',
          strength: 8,
          differentiator: 'Market leader but legacy technology'
        },
        {
          name: 'AuthX',
          strength: 6,
          differentiator: 'Good UX but limited enterprise features'
        }
      ],
      marketComps: [
        {
          name: 'CrowdStrike',
          ticker: 'CRWD',
          marketCap: '$45B',
          revenue: '$2.2B',
          growth: 45,
          multiple: 20.5
        },
        {
          name: 'SentinelOne',
          ticker: 'S',
          marketCap: '$4.5B',
          revenue: '$422M',
          growth: 70,
          multiple: 10.7
        }
      ],
      founderAssessment: {
        experience: 9,
        domain: 9,
        execution: 8,
        vision: 9,
        leadership: 8
      }
    }
  },
  {
    id: '5',
    company: 'FoodChain',
    contactName: 'Maria Garcia',
    email: 'maria@foodchain.co',
    description: 'Blockchain-based supply chain platform for food traceability and quality assurance.',
    industry: 'Supply Chain',
    stage: 'Series A',
    raiseAmount: '$8M',
    receivedDate: '2025-05-07T10:30:00',
    status: 'Coffee Chats',
    priority: 'medium',
    documents: [
      {
        type: 'pdf',
        name: 'FoodChain_Overview.pdf',
        status: 'Coffee Chats'
      }
    ],
    metrics: {
      revenue: {
        current: 1800000,
        growth: 150,
        projection: 5000000
      },
      traction: {
        users: 250,
        growth: 30,
        engagement: 8.8
      },
      competitors: [
        {
          name: 'TraceFood',
          strength: 7,
          differentiator: 'Larger customer base but older technology'
        },
        {
          name: 'SupplyTrack',
          strength: 5,
          differentiator: 'Limited to specific food categories'
        }
      ],
      marketComps: [
        {
          name: 'FoodLogiq',
          ticker: 'FLOG',
          marketCap: '$800M',
          revenue: '$45M',
          growth: 40,
          multiple: 17.8
        }
      ],
      founderAssessment: {
        experience: 7,
        domain: 8,
        execution: 8,
        vision: 8,
        leadership: 7
      }
    }
  },
  {
    id: '6',
    company: 'EdTechPro',
    contactName: 'James Wilson',
    email: 'james@edtechpro.com',
    description: 'AI-powered adaptive learning platform for professional skills development.',
    industry: 'EdTech',
    stage: 'Seed',
    raiseAmount: '$2.5M',
    receivedDate: '2025-05-11T13:15:00',
    status: 'Intake',
    priority: 'medium',
    documents: [
      {
        type: 'email',
        name: 'Introduction Email',
        status: 'Intake'
      }
    ],
    metrics: {
      revenue: {
        current: 300000,
        growth: 160,
        projection: 1500000
      },
      traction: {
        users: 15000,
        growth: 35,
        engagement: 8.2
      },
      competitors: [
        {
          name: 'SkillsHub',
          strength: 6,
          differentiator: 'Broader course catalog but less personalization'
        },
        {
          name: 'LearnAI',
          strength: 7,
          differentiator: 'Strong in tech skills but limited scope'
        }
      ],
      marketComps: [
        {
          name: 'Coursera',
          ticker: 'COUR',
          marketCap: '$1.8B',
          revenue: '$523M',
          growth: 25,
          multiple: 3.4
        }
      ],
      founderAssessment: {
        experience: 7,
        domain: 8,
        execution: 7,
        vision: 8,
        leadership: 7
      }
    }
  },
  {
    id: '7',
    company: 'DroneLogistics',
    contactName: 'Ryan Zhang',
    email: 'ryan@dronelogistics.io',
    description: 'Autonomous drone delivery network for urban last-mile logistics.',
    industry: 'Robotics',
    stage: 'Series B',
    raiseAmount: '$25M',
    receivedDate: '2025-05-06T09:45:00',
    status: 'Portfolio',
    priority: 'low',
    documents: [
      {
        type: 'pdf',
        name: 'DroneLogistics_Deck.pdf',
        status: 'Portfolio'
      }
    ],
    metrics: {
      revenue: {
        current: 5000000,
        growth: 120,
        projection: 15000000
      },
      traction: {
        users: 50,
        growth: 25,
        engagement: 9.0
      },
      competitors: [
        {
          name: 'AirDelivery',
          strength: 8,
          differentiator: 'Larger fleet but higher operating costs'
        },
        {
          name: 'DroneX',
          strength: 6,
          differentiator: 'Better hardware but limited coverage'
        }
      ],
      marketComps: [
        {
          name: 'Joby Aviation',
          ticker: 'JOBY',
          marketCap: '$5.2B',
          revenue: '$982M',
          growth: 85,
          multiple: 5.3
        }
      ],
      founderAssessment: {
        experience: 8,
        domain: 9,
        execution: 7,
        vision: 9,
        leadership: 8
      }
    }
  },
  {
    id: '8',
    company: 'FinanceAI',
    contactName: 'Sophie Anderson',
    email: 'sophie@financeai.co',
    description: 'AI-powered financial planning and wealth management platform for millennials.',
    industry: 'Fintech',
    stage: 'Seed',
    raiseAmount: '$3.5M',
    receivedDate: '2025-05-13T14:20:00',
    status: 'Intake',
    priority: 'high',
    documents: [
      {
        type: 'docsend',
        link: 'https://docsend.com/view/financeai-deck',
        name: 'Pitch Deck',
        status: 'Intake'
      }
    ],
    metrics: {
      revenue: {
        current: 400000,
        growth: 180,
        projection: 2000000
      },
      traction: {
        users: 25000,
        growth: 40,
        engagement: 8.7
      },
      competitors: [
        {
          name: 'WealthFront',
          strength: 9,
          differentiator: 'Market leader but higher fees'
        },
        {
          name: 'RoboAdvise',
          strength: 7,
          differentiator: 'Good UX but limited AI capabilities'
        }
      ],
      marketComps: [
        {
          name: 'SoFi',
          ticker: 'SOFI',
          marketCap: '$8.5B',
          revenue: '$1.5B',
          growth: 50,
          multiple: 5.7
        }
      ],
      founderAssessment: {
        experience: 8,
        domain: 8,
        execution: 8,
        vision: 9,
        leadership: 8
      }
    }
  },
  {
    id: '9',
    company: 'MetaVerse',
    contactName: 'Daniel Lee',
    email: 'daniel@metaverse.world',
    description: 'Enterprise metaverse platform for virtual collaboration and training.',
    industry: 'AR/VR',
    stage: 'Series A',
    raiseAmount: '$12M',
    receivedDate: '2025-05-05T16:30:00',
    status: 'Investment Committee',
    priority: 'high',
    documents: [
      {
        type: 'pdf',
        name: 'MetaVerse_Series_A.pdf',
        status: 'Investment Committee'
      }
    ],
    metrics: {
      revenue: {
        current: 3000000,
        growth: 200,
        projection: 10000000
      },
      traction: {
        users: 100000,
        growth: 60,
        engagement: 8.9
      },
      competitors: [
        {
          name: 'VirtualSpace',
          strength: 8,
          differentiator: 'Better graphics but higher hardware requirements'
        },
        {
          name: 'MetaWork',
          strength: 7,
          differentiator: 'Focus on specific industries'
        }
      ],
      marketComps: [
        {
          name: 'Unity',
          ticker: 'U',
          marketCap: '$12B',
          revenue: '$1.3B',
          growth: 40,
          multiple: 9.2
        }
      ],
      founderAssessment: {
        experience: 9,
        domain: 9,
        execution: 8,
        vision: 9,
        leadership: 9
      }
    }
  },
  {
    id: '10',
    company: 'BioEnergy',
    contactName: 'Emma Roberts',
    email: 'emma@bioenergy.tech',
    description: 'Sustainable biofuel production using engineered microorganisms.',
    industry: 'Cleantech',
    stage: 'Series B',
    raiseAmount: '$30M',
    receivedDate: '2025-05-04T11:45:00',
    status: 'Portfolio',
    priority: 'medium',
    documents: [
      {
        type: 'pdf',
        name: 'BioEnergy_Overview.pdf',
        status: 'Portfolio'
      }
    ],
    metrics: {
      revenue: {
        current: 8000000,
        growth: 150,
        projection: 25000000
      },
      traction: {
        users: 15,
        growth: 20,
        engagement: 9.3
      },
      competitors: [
        {
          name: 'GreenFuel',
          strength: 8,
          differentiator: 'Larger scale but lower efficiency'
        },
        {
          name: 'BioTech',
          strength: 7,
          differentiator: 'Different biological approach'
        }
      ],
      marketComps: [
        {
          name: 'Ginkgo Bioworks',
          ticker: 'DNA',
          marketCap: '$3.2B',
          revenue: '$478M',
          growth: 55,
          multiple: 6.7
        }
      ],
      founderAssessment: {
        experience: 9,
        domain: 9,
        execution: 8,
        vision: 8,
        leadership: 8
      }
    }
  }
];