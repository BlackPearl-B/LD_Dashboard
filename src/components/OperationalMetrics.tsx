import { Users, Clock, CheckCircle, Activity } from 'lucide-react';

interface MetricsData {
  totalParticipants: number;
  totalHours: number;
  completionRate: number;
  activeSimulations: number;
}

interface OperationalMetricsProps {
  data: MetricsData;
}

export default function OperationalMetrics({ data }: OperationalMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-[#000CAD] bg-opacity-10 p-3 rounded-lg">
            <Users className="w-6 h-6 text-[#000CAD]" />
          </div>
        </div>
        <div className="text-3xl font-bold text-gray-800 mb-1">
          {data.totalParticipants.toLocaleString()}
        </div>
        <div className="text-sm text-gray-600">Total Participants</div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-[#12EDA6] bg-opacity-10 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-[#12EDA6]" />
          </div>
        </div>
        <div className="text-3xl font-bold text-gray-800 mb-1">
          {data.totalHours.toLocaleString()}
        </div>
        <div className="text-sm text-gray-600">Training Hours</div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div className="text-3xl font-bold text-gray-800 mb-1">{data.completionRate}%</div>
        <div className="text-sm text-gray-600">Completion Rate</div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Activity className="w-6 h-6 text-purple-600" />
          </div>
        </div>
        <div className="text-3xl font-bold text-gray-800 mb-1">{data.activeSimulations}</div>
        <div className="text-sm text-gray-600">Active Simulations</div>
      </div>
    </div>
  );
}
