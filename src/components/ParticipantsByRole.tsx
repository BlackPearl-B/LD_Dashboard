import { useEffect, useRef } from 'react';

interface RoleData {
  role: string;
  count: number;
  percentage: number;
  color: string;
}

interface ParticipantsByRoleProps {
  data: RoleData[];
}

export default function ParticipantsByRole({ data }: ParticipantsByRoleProps) {
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
    const radius = Math.min(width, height) / 2 - 40;

    ctx.clearRect(0, 0, width, height);

    let currentAngle = -Math.PI / 2;

    data.forEach((item) => {
      const sliceAngle = (item.percentage / 100) * Math.PI * 2;

      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.stroke();

      const labelAngle = currentAngle + sliceAngle / 2;
      const labelRadius = radius * 0.7;
      const labelX = centerX + labelRadius * Math.cos(labelAngle);
      const labelY = centerY + labelRadius * Math.sin(labelAngle);

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${item.percentage}%`, labelX, labelY);

      currentAngle += sliceAngle;
    });
  }, [data]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Participants by Role</h2>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <canvas ref={canvasRef} width={300} height={300} />
        </div>
        <div className="flex-1 space-y-3 w-full">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="font-medium text-gray-800">{item.role}</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-800">{item.count}</div>
                <div className="text-sm text-gray-500">{item.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
