import { useEffect, useRef } from 'react';

interface Competency {
  name: string;
  current: number;
  target: number;
}

interface SpiderChartProps {
  data: Competency[];
}

export default function SpiderChart({ data }: SpiderChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 60;
    const levels = 5;

    ctx.clearRect(0, 0, width, height);

    const drawWeb = () => {
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 1;

      for (let i = levels; i > 0; i--) {
        ctx.beginPath();
        const r = (radius / levels) * i;
        for (let j = 0; j <= data.length; j++) {
          const angle = (Math.PI * 2 * j) / data.length - Math.PI / 2;
          const x = centerX + r * Math.cos(angle);
          const y = centerY + r * Math.sin(angle);
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.stroke();
      }

      for (let i = 0; i < data.length; i++) {
        const angle = (Math.PI * 2 * i) / data.length - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    };

    const drawData = (values: number[], color: string, fillOpacity: number) => {
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.globalAlpha = fillOpacity;
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let i = 0; i <= data.length; i++) {
        const angle = (Math.PI * 2 * i) / data.length - Math.PI / 2;
        const value = values[i % data.length];
        const r = (radius * value) / 100;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.stroke();

      ctx.fillStyle = color;
      values.forEach((value, i) => {
        const angle = (Math.PI * 2 * i) / data.length - Math.PI / 2;
        const r = (radius * value) / 100;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawLabels = () => {
      ctx.fillStyle = '#374151';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      data.forEach((item, i) => {
        const angle = (Math.PI * 2 * i) / data.length - Math.PI / 2;
        const labelRadius = radius + 40;
        const x = centerX + labelRadius * Math.cos(angle);
        const y = centerY + labelRadius * Math.sin(angle);

        const words = item.name.split(' ');
        const lineHeight = 14;
        const startY = y - ((words.length - 1) * lineHeight) / 2;

        words.forEach((word, j) => {
          ctx.fillText(word, x, startY + j * lineHeight);
        });
      });
    };

    drawWeb();
    drawData(data.map(d => d.target), '#12EDA6', 0.15);
    drawData(data.map(d => d.current), '#000CAD', 0.3);
    drawLabels();
  }, [data]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Competency Mapping</h2>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#000CAD] rounded"></div>
            <span className="text-gray-600">Current</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#12EDA6] rounded"></div>
            <span className="text-gray-600">Target</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <canvas ref={canvasRef} width={600} height={600} className="max-w-full" />
      </div>
    </div>
  );
}
