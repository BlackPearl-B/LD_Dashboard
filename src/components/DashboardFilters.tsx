import { Filter, Calendar, Building2, Download } from 'lucide-react';

interface DashboardFiltersProps {
  onFilterChange?: (filters: any) => void;
}

export default function DashboardFilters({ onFilterChange }: DashboardFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="font-semibold text-gray-800">Filters:</span>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000CAD]">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-gray-500" />
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000CAD]">
              <option>All Branches</option>
              <option>Hanoi HQ</option>
              <option>HCMC Branch</option>
              <option>Da Nang</option>
              <option>Hai Phong</option>
              <option>Can Tho</option>
            </select>
          </div>

          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000CAD]">
            <option>All Departments</option>
            <option>Claims</option>
            <option>Underwriting</option>
            <option>Sales</option>
            <option>Support</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-2 bg-[#000CAD] text-white rounded-lg hover:bg-[#0008A0] transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
}
