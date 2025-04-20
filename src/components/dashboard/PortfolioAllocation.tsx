import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

interface DataItem {
  name: string;
  value: number;
}

interface PortfolioAllocationProps {
  data: DataItem[];
  theme: 'dark' | 'light';
}

export default function PortfolioAllocation({ data, theme }: PortfolioAllocationProps) {
  return (
    <>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie 
              data={data} 
              innerRadius={60} 
              outerRadius={80} 
              paddingAngle={5} 
              dataKey="value"
              animationDuration={500}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
                borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                color: theme === 'dark' ? '#fff' : '#000',
              }}
              formatter={(value) => [`${value}%`, 'Allocation']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="text-sm">
              {item.name}: {item.value}%
            </span>
          </div>
        ))}
      </div>
    </>
  );
}