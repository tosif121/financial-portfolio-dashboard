import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart as LineChartIcon, BarChart3 } from 'lucide-react';

interface StockPerformanceChartProps {
  data: Array<{ name: string; AAPL: number; MSFT: number; GOOGL: number }>;
  theme: 'light' | 'dark';
}

export default function StockPerformanceChart({ data, theme }: StockPerformanceChartProps) {
  return (
    <Tabs defaultValue="line">
      <TabsList className="mb-4">
        <TabsTrigger value="line">
          <LineChartIcon className="h-4 w-4 mr-2" />
          Line
        </TabsTrigger>
        <TabsTrigger value="area">
          <BarChart3 className="h-4 w-4 mr-2" />
          Area
        </TabsTrigger>
        <TabsTrigger value="bar">
          <BarChart3 className="h-4 w-4 mr-2" />
          Bar
        </TabsTrigger>
      </TabsList>

      <TabsContent value="line">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="name" stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
                  borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                  color: theme === 'dark' ? '#fff' : '#000',
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="AAPL" stroke="#0088FE" strokeWidth={2} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="MSFT" stroke="#00C49F" strokeWidth={2} />
              <Line type="monotone" dataKey="GOOGL" stroke="#FFBB28" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>

      <TabsContent value="area">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="name" stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
                  borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                  color: theme === 'dark' ? '#fff' : '#000',
                }}
              />
              <Legend />
              <Area type="monotone" dataKey="AAPL" stackId="1" stroke="#0088FE" fill="#0088FE" fillOpacity={0.6} />
              <Area type="monotone" dataKey="MSFT" stackId="1" stroke="#00C49F" fill="#00C49F" fillOpacity={0.6} />
              <Area type="monotone" dataKey="GOOGL" stackId="1" stroke="#FFBB28" fill="#FFBB28" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>

      <TabsContent value="bar">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="name" stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
                  borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                  color: theme === 'dark' ? '#fff' : '#000',
                }}
              />
              <Legend />
              <Bar dataKey="AAPL" fill="#0088FE" />
              <Bar dataKey="MSFT" fill="#00C49F" />
              <Bar dataKey="GOOGL" fill="#FFBB28" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>
    </Tabs>
  );
}
