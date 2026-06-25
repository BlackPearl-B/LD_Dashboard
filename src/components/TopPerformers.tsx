import { Award, Trophy } from 'lucide-react';

interface Performer {
  name: string;
  role: string;
  avgScore: number;
  simulations: number;
}

interface TopPerformersProps {
  data: Performer[];
}

export default function TopPerformers({ data }: TopPerformersProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-6 h-6 text-[#000CAD]" />
        <h2 className="text-xl font-bold text-gray-800">Top Performers</h2>
      </div>
      <div className="space-y-4">
        {data.map((performer, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
              index === 0
                ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-300'
                : 'bg-gray-50 border-gray-200 hover:border-[#000CAD]'
            }`}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-white ${
                index === 0
                  ? 'bg-gradient-to-br from-yellow-400 to-amber-500'
                  : index === 1
                  ? 'bg-gradient-to-br from-gray-300 to-gray-400'
                  : index === 2
                  ? 'bg-gradient-to-br from-orange-400 to-orange-500'
                  : 'bg-[#000CAD]'
              }`}
            >
              {index === 0 ? <Trophy className="w-5 h-5" /> : index + 1}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{performer.name}</div>
              <div className="text-sm text-gray-600">{performer.role}</div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#12EDA6]" />
                <span className="font-bold text-lg text-[#000CAD]">{performer.avgScore}%</span>
              </div>
              <div className="text-xs text-gray-500">{performer.simulations} simulations</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-[#000CAD]">Pro Tip:</span> Promote top performers to
          trainer roles to share expertise
        </p>
      </div>
    </div>
  );
}
