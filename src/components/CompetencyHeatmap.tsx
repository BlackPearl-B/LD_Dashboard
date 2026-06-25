import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

interface Competency {
  name: string;
  current: number;
  target: number;
  gap: number;
  status: string;
  simulation: string;
  description: string;
}

interface CompetencyHeatmapProps {
  data: Competency[];
}

export default function CompetencyHeatmap({ data }: CompetencyHeatmapProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'on-track':
        return <CheckCircle className="w-5 h-5 text-[#12EDA6]" />;
      case 'needs-focus':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'behind':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'bg-green-50 border-green-200';
      case 'needs-focus':
        return 'bg-yellow-50 border-yellow-200';
      case 'behind':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'On Track';
      case 'needs-focus':
        return 'Needs Focus';
      case 'behind':
        return 'Behind';
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Competency Health Heatmap</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Competency</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Target</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Current</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Gap</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${getStatusColor(item.status)}`}
              >
                <td className="py-4 px-4">
                  <div>
                    <div className="font-medium text-gray-800">{item.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                    <div className="text-xs text-[#000CAD] mt-1">Simulation: {item.simulation}</div>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-sm font-semibold text-gray-700">{item.target}%</span>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#000CAD] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.current}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{item.current}%</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <span className={`text-sm font-semibold ${item.gap >= 0 ? 'text-[#12EDA6]' : 'text-red-500'}`}>
                    {item.gap > 0 ? '+' : ''}{item.gap}%
                  </span>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    {getStatusIcon(item.status)}
                    <span className="text-sm font-medium">{getStatusText(item.status)}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
