import { Award, AlertTriangle, TrendingUp, Activity } from 'lucide-react';

interface SimulationData {
  mostCompleted: {
    name: string;
    attempts: number;
  };
  highestFailure: {
    name: string;
    failRate: number;
    scenario: string;
  };
  fastestImprovers: {
    department: string;
    improvement: number;
    period: string;
  };
  averagePassRate: number;
  averageScore: number;
  totalSimulations: number;
}

interface SimulationAnalyticsProps {
  data: SimulationData;
}

export default function SimulationAnalytics({ data }: SimulationAnalyticsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Simulation Performance Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-[#000CAD] to-[#0066FF] rounded-lg p-5 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-6 h-6" />
            <h3 className="text-sm font-medium opacity-90">Most Completed</h3>
          </div>
          <div className="text-2xl font-bold mb-1">{data.mostCompleted.name}</div>
          <div className="text-sm opacity-80">{data.mostCompleted.attempts.toLocaleString()} attempts</div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-5 text-white">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-6 h-6" />
            <h3 className="text-sm font-medium opacity-90">Highest Failure Rate</h3>
          </div>
          <div className="text-2xl font-bold mb-1">{data.highestFailure.name}</div>
          <div className="text-sm opacity-80">
            {data.highestFailure.failRate}% fail rate ({data.highestFailure.scenario})
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#12EDA6] to-[#00CFA1] rounded-lg p-5 text-white">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-6 h-6" />
            <h3 className="text-sm font-medium opacity-90">Fastest Improvers</h3>
          </div>
          <div className="text-2xl font-bold mb-1">{data.fastestImprovers.department}</div>
          <div className="text-sm opacity-80">
            +{data.fastestImprovers.improvement}% in {data.fastestImprovers.period}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-5 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="w-6 h-6" />
            <h3 className="text-sm font-medium opacity-90">Overall Performance</h3>
          </div>
          <div className="text-2xl font-bold mb-1">{data.averageScore}% Avg Score</div>
          <div className="text-sm opacity-80">{data.averagePassRate}% pass rate</div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-3">
          <Activity className="w-5 h-5 text-[#000CAD] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Total Simulations Completed</h4>
            <p className="text-sm text-gray-600">
              <span className="text-2xl font-bold text-[#000CAD]">{data.totalSimulations.toLocaleString()}</span> simulations
              completed across all departments and branches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
