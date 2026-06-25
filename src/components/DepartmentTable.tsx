import { useState } from 'react';
import { ArrowUp, ArrowDown, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface Department {
  department: string;
  staff: number;
  avgScore: number;
  completionRate: number;
  topSkill: string;
  weakestSkill: string;
  trend: string;
}

interface DepartmentTableProps {
  data: Department[];
}

type SortKey = keyof Department;
type SortDirection = 'asc' | 'desc';

export default function DepartmentTable({ data }: DepartmentTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('avgScore');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('desc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  });

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving':
        return <TrendingUp className="w-4 h-4 text-[#12EDA6]" />;
      case 'declining':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      case 'stable':
        return <Minus className="w-4 h-4 text-gray-400" />;
      default:
        return null;
    }
  };

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) {
      return <div className="w-4 h-4" />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUp className="w-4 h-4" />
    ) : (
      <ArrowDown className="w-4 h-4" />
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Department Performance</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th
                className="text-left py-3 px-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('department')}
              >
                <div className="flex items-center gap-2">
                  Department
                  <SortIcon columnKey="department" />
                </div>
              </th>
              <th
                className="text-center py-3 px-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('staff')}
              >
                <div className="flex items-center justify-center gap-2">
                  Staff
                  <SortIcon columnKey="staff" />
                </div>
              </th>
              <th
                className="text-center py-3 px-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('avgScore')}
              >
                <div className="flex items-center justify-center gap-2">
                  Avg Score
                  <SortIcon columnKey="avgScore" />
                </div>
              </th>
              <th
                className="text-center py-3 px-4 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('completionRate')}
              >
                <div className="flex items-center justify-center gap-2">
                  Completion Rate
                  <SortIcon columnKey="completionRate" />
                </div>
              </th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">
                Top Skill
              </th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">
                Weakest Skill
              </th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">
                Trend
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((dept, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-4">
                  <span className="font-medium text-gray-800">{dept.department}</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-sm text-gray-700">{dept.staff}</span>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#000CAD] h-2 rounded-full"
                        style={{ width: `${dept.avgScore}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{dept.avgScore}%</span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-sm font-semibold text-gray-800">{dept.completionRate}%</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-xs px-2 py-1 bg-[#12EDA6] bg-opacity-20 text-[#000CAD] rounded-full">
                    {dept.topSkill}
                  </span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
                    {dept.weakestSkill}
                  </span>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex items-center justify-center gap-1">
                    {getTrendIcon(dept.trend)}
                    <span className="text-xs text-gray-600 capitalize">{dept.trend}</span>
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
