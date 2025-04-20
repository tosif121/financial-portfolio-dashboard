import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface SummaryCardProps {
  title: string;
  value: string | number;
  period: string;
  theme: 'dark' | 'light';
  isPositive?: boolean;
  change: string | number;
}

export default function SummaryCard({ title, value, period, theme, change, isPositive = true }: SummaryCardProps) {
  return (
    <Card
      className={`${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
      } transition-all duration-200 hover:shadow-md`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center mt-1">
          {isPositive ? (
            <ArrowUpRight className="text-green-500 mr-1 h-4 w-4" />
          ) : (
            <ArrowDownRight className="text-red-500 mr-1 h-4 w-4" />
          )}
          <span className={isPositive ? 'text-green-500 text-sm' : 'text-red-500 text-sm'}>{change}</span>
          <span className={`text-xs ml-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{period}</span>
        </div>
      </CardContent>
    </Card>
  );
}
