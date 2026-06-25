export const executiveKPIs = [
  {
    id: 1,
    title: 'Claims Processing Time',
    before: '18 days',
    after: '12 days',
    change: -33,
    unit: '%',
    icon: 'clock',
    trend: 'down',
    description: 'After training implementation'
  },
  {
    id: 2,
    title: 'Sales Conversion Rate',
    before: '15%',
    after: '22%',
    change: 7,
    unit: 'pp',
    icon: 'trendingUp',
    trend: 'up',
    description: 'For trained agents'
  },
  {
    id: 3,
    title: 'Underwriting Accuracy',
    before: '85%',
    after: '92%',
    change: 7,
    unit: 'pp',
    icon: 'target',
    trend: 'up',
    description: 'Post-simulation training'
  },
  {
    id: 4,
    title: 'Training ROI',
    metric: '$2.50',
    subtext: 'returned per $1 spent',
    icon: 'dollarSign',
    trend: 'up',
    description: 'In productivity gains'
  }
];

export const competencyData = [
  {
    name: 'Claims Fraud Detection',
    current: 68,
    target: 80,
    gap: -12,
    status: 'behind',
    simulation: 'Suspected Staged Accident',
    description: 'Identifies staged accidents, false documentation, billing irregularities'
  },
  {
    name: 'Claims Cost Control',
    current: 81,
    target: 85,
    gap: -4,
    status: 'needs-focus',
    simulation: 'Conflicting Garage Estimates',
    description: 'Negotiates garage repair estimates, approves partial settlements'
  },
  {
    name: 'Claims Processing Speed',
    current: 75,
    target: 80,
    gap: -5,
    status: 'needs-focus',
    simulation: 'Incomplete Accident Documentation',
    description: 'Handles incomplete documentation, validates policy terms'
  },
  {
    name: 'Underwriting Risk Assessment',
    current: 79,
    target: 75,
    gap: 4,
    status: 'on-track',
    simulation: 'Fleet Proposal with Partial Loss History',
    description: 'Analyzes loss history, forecasts loss ratios, prices fleet proposals'
  },
  {
    name: 'Underwriting Discipline',
    current: 85,
    target: 85,
    gap: 0,
    status: 'on-track',
    simulation: 'Sales-Driven Aggressive Pricing Request',
    description: 'Resists sales pressure for aggressive pricing'
  },
  {
    name: 'Regulatory Compliance',
    current: 88,
    target: 90,
    gap: -2,
    status: 'needs-focus',
    simulation: '1 Million TNDS Policies',
    description: 'Applies Circular 50/2017, Insurance Law 2022, AML/CFT procedures'
  },
  {
    name: 'Data Integrity & Reporting',
    current: 83,
    target: 85,
    gap: -2,
    status: 'needs-focus',
    simulation: 'Cross-Channel Data Inconsistency',
    description: 'Reconciles cross-system data'
  }
];

export const trainingEfficiency = {
  speedVsBenchmark: 31,
  costSavings: 37,
  aiReduction: { from: 80, to: 20 },
  tascoAvg: 78
};

export const departmentPerformance = [
  {
    department: 'Claims',
    staff: 245,
    avgScore: 75,
    completionRate: 88,
    topSkill: 'Cost Control',
    weakestSkill: 'Fraud Detection',
    trend: 'improving'
  },
  {
    department: 'Underwriting',
    staff: 180,
    avgScore: 82,
    completionRate: 92,
    topSkill: 'Risk Assessment',
    weakestSkill: 'Data Integrity',
    trend: 'improving'
  },
  {
    department: 'Sales',
    staff: 320,
    avgScore: 79,
    completionRate: 85,
    topSkill: 'Customer Empathy',
    weakestSkill: 'Compliance',
    trend: 'stable'
  },
  {
    department: 'Support',
    staff: 155,
    avgScore: 71,
    completionRate: 78,
    topSkill: 'Documentation',
    weakestSkill: 'Processing Speed',
    trend: 'declining'
  }
];

export const simulationAnalytics = {
  mostCompleted: {
    name: 'Claims Fraud Detection',
    attempts: 1200
  },
  highestFailure: {
    name: 'Underwriting Discipline',
    failRate: 55,
    scenario: 'Scenario 2'
  },
  fastestImprovers: {
    department: 'Sales Team',
    improvement: 18,
    period: '3 months'
  },
  averagePassRate: 72,
  averageScore: 78,
  totalSimulations: 4850
};

export const branchPerformance = [
  { name: 'Hanoi HQ', score: 85, staff: 120, rank: 1 },
  { name: 'HCMC Branch', score: 82, staff: 180, rank: 2 },
  { name: 'Da Nang', score: 78, staff: 90, rank: 3 },
  { name: 'Hai Phong', score: 75, staff: 60, rank: 4 },
  { name: 'Can Tho', score: 72, staff: 50, rank: 5, needsSupport: true },
  { name: 'Nha Trang', score: 76, staff: 45, rank: 6 },
  { name: 'Hue', score: 74, staff: 40, rank: 7 },
  { name: 'Vung Tau', score: 77, staff: 55, rank: 8 },
  { name: 'Bien Hoa', score: 73, staff: 48, rank: 9 },
  { name: 'Buon Ma Thuot', score: 70, staff: 35, rank: 10, needsSupport: true }
];

export const participantsByRole = [
  { role: 'Claims Adjusters', count: 360, percentage: 40, color: '#000CAD' },
  { role: 'Underwriters', count: 225, percentage: 25, color: '#12EDA6' },
  { role: 'Sales Agents', count: 180, percentage: 20, color: '#0066FF' },
  { role: 'Support Staff', count: 135, percentage: 15, color: '#66D9EF' }
];

export const topPerformers = [
  { name: 'Joseph Nguyen', role: 'Claims Adjuster', avgScore: 92, simulations: 24 },
  { name: 'Helen Tran', role: 'Underwriter', avgScore: 88, simulations: 20 },
  { name: 'Harry Pham', role: 'Sales Agent', avgScore: 85, simulations: 18 },
  { name: 'Maria Le', role: 'Claims Adjuster', avgScore: 84, simulations: 22 },
  { name: 'David Vo', role: 'Underwriter', avgScore: 83, simulations: 19 }
];

export const costBreakdown = [
  { category: 'External Trainers', amount: 5000, percentage: 39 },
  { category: 'Edtronaut Simulations', amount: 3500, percentage: 27 },
  { category: 'Venue/Materials', amount: 4250, percentage: 33 }
];

export const operationalMetrics = {
  totalParticipants: 900,
  totalHours: 12450,
  completionRate: 86,
  activeSimulations: 15,
  avgTimeToCompletion: 45,
  budgetVariance: -8
};
