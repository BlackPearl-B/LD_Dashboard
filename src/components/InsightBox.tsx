import { Lightbulb } from 'lucide-react';

interface InsightBoxProps {
  speedVsBenchmark: number;
  costSavings: number;
  aiReduction: {
    from: number;
    to: number;
  };
}

export default function InsightBox({ speedVsBenchmark, costSavings, aiReduction }: InsightBoxProps) {
  return (
    <div className="bg-[#000CAD] rounded-lg p-6 text-white shadow-lg">
      <div className="flex items-start gap-4">
        <div className="bg-white bg-opacity-20 rounded-lg p-3">
          <Lightbulb className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-3">Key Insight</h3>
          <p className="text-white text-opacity-95 leading-relaxed">
            Tasco is training employees{' '}
            <span className="font-bold text-[#12EDA6]">{speedVsBenchmark}% faster</span> than industry
            benchmark while spending{' '}
            <span className="font-bold text-[#12EDA6]">{costSavings}% less</span> per head. AI
            simulations reduced external trainer dependency from{' '}
            <span className="font-bold">{aiReduction.from}%</span> to{' '}
            <span className="font-bold text-[#12EDA6]">{aiReduction.to}%</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
