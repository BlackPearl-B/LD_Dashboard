import { AlertCircle, Users } from 'lucide-react';

interface Branch {
  name: string;
  score: number;
  staff: number;
  rank: number;
  needsSupport?: boolean;
}

interface BranchPerformanceProps {
  data: Branch[];
  avgScore: number;
}

export default function BranchPerformance({ data, avgScore }: BranchPerformanceProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Branch Performance Ranking</h2>
        <div className="text-sm text-gray-600">
          Tasco Avg: <span className="font-bold text-[#000CAD]">{avgScore}%</span>
        </div>
      </div>
      <div className="space-y-3">
        {data.slice(0, 10).map((branch, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-lg border ${
              branch.needsSupport
                ? 'bg-red-50 border-red-200'
                : 'bg-gray-50 border-gray-200 hover:border-[#000CAD]'
            } transition-all duration-200`}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#000CAD] text-white font-bold text-sm">
              {branch.rank}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-800">{branch.name}</span>
                {branch.needsSupport && (
                  <div className="flex items-center gap-1 text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-xs">Needs Support</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>{branch.staff} staff</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-48 bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${
                    branch.score >= avgScore ? 'bg-[#12EDA6]' : 'bg-[#000CAD]'
                  }`}
                  style={{ width: `${(branch.score / 100) * 100}%` }}
                ></div>
              </div>
              <span className="font-bold text-lg text-gray-800 w-12 text-right">{branch.score}%</span>
            </div>
          </div>
        ))}
      </div>
      {data.length > 10 && (
        <div className="mt-4 text-center">
          <button className="text-sm text-[#000CAD] hover:underline font-medium">
            View all {data.length} branches
          </button>
        </div>
      )}
    </div>
  );
}
