import { useState } from 'react';
import { LayoutDashboard, Users } from 'lucide-react';
import KPICard from './components/KPICard';
import CompetencyHeatmap from './components/CompetencyHeatmap';
import SpiderChart from './components/SpiderChart';
import DepartmentTable from './components/DepartmentTable';
import BranchPerformance from './components/BranchPerformance';
import SimulationAnalytics from './components/SimulationAnalytics';
import InsightBox from './components/InsightBox';
import ParticipantsByRole from './components/ParticipantsByRole';
import TopPerformers from './components/TopPerformers';
import OperationalMetrics from './components/OperationalMetrics';
import DashboardFilters from './components/DashboardFilters';
import {
  executiveKPIs,
  competencyData,
  trainingEfficiency,
  departmentPerformance,
  simulationAnalytics,
  branchPerformance,
  participantsByRole,
  topPerformers,
  operationalMetrics
} from './data/mockData';

type ViewMode = 'executive' | 'operational';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('executive');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#000CAD] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">L&D Dashboard</h1>
              <p className="text-white text-opacity-90">
                Transforming Learning into Business Impact
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setViewMode('executive')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'executive'
                    ? 'bg-white text-[#000CAD] shadow-lg'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                <LayoutDashboard className="w-5 h-5" />
                Executive View
              </button>
              <button
                onClick={() => setViewMode('operational')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'operational'
                    ? 'bg-white text-[#000CAD] shadow-lg'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                <Users className="w-5 h-5" />
                Operational View
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {viewMode === 'executive' ? (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Executive Snapshot</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {executiveKPIs.map((kpi) => (
                  <KPICard key={kpi.id} {...kpi} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Operational Insights</h2>
              <div className="space-y-6">
                <InsightBox {...trainingEfficiency} />
              </div>
            </section>

            <section>
              <SimulationAnalytics data={simulationAnalytics} />
            </section>

            <section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SpiderChart data={competencyData.map(c => ({ name: c.name, current: c.current, target: c.target }))} />
                <BranchPerformance data={branchPerformance} avgScore={trainingEfficiency.tascoAvg} />
              </div>
            </section>


          </div>
        ) : (
          <div className="space-y-8">
            <DashboardFilters />

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Metrics</h2>
              <OperationalMetrics data={operationalMetrics} />
            </section>

            <section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ParticipantsByRole data={participantsByRole} />
                <TopPerformers data={topPerformers} />
              </div>
            </section>

            <section>
              <CompetencyHeatmap data={competencyData} />
            </section>
            
            <section>
              <SimulationAnalytics data={simulationAnalytics} />
            </section>


             <section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SpiderChart data={competencyData.map(c => ({ name: c.name, current: c.current, target: c.target }))} />
                <BranchPerformance data={branchPerformance} avgScore={trainingEfficiency.tascoAvg} />
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-[1600px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>
              L&D Analytics Platform
            </div>
            <div>
              Powered by Edtronaut
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
