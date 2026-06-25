import { Clock, TrendingUp, Target, DollarSign, ArrowDown, ArrowUp } from 'lucide-react';

interface KPICardProps {
  title: string;
  before?: string;
  after?: string;
  metric?: string;
  subtext?: string;
  change?: number;
  unit?: string;
  icon: string;
  trend: string;
  description: string;
}

const iconMap = {
  clock: Clock,
  trendingUp: TrendingUp,
  target: Target,
  dollarSign: DollarSign
};

export default function KPICard({ title, before, after, metric, subtext, change, unit, icon, trend, description }: KPICardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  const isPositive = trend === 'up' || (change !== undefined && change > 0) || trend === 'down';

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
          {metric ? (
            <>
              <div className="text-3xl font-bold text-[#000CAD] mb-1">{metric}</div>
              <p className="text-sm text-gray-500">{subtext}</p>
            </>
          ) : (
            <>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xl text-gray-400 line-through">{before}</span>
                <ArrowUp className="w-4 h-4 text-[#12EDA6]" />
                <span className="text-3xl font-bold text-[#000CAD]">{after}</span>
              </div>
              {change !== undefined && (
                <div className={`flex items-center gap-1 ${isPositive ? 'text-[#12EDA6]' : 'text-red-500'}`}>
                  {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  <span className="text-sm font-semibold">
                    {Math.abs(change)}{unit}
                  </span>
                  <span className="text-xs text-gray-500 ml-1">{description}</span>
                </div>
              )}
            </>
          )}
        </div>
        <div className="bg-gradient-to-br from-[#000CAD] to-[#0066FF] p-3 rounded-lg">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
