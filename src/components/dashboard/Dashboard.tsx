'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import dynamic from 'next/dynamic';

const SummaryCard = dynamic(() => import('@/components/dashboard/SummaryCard'));
const StocksList = dynamic(() => import('@/components/dashboard/StocksList'));
const RecentTransactions = dynamic(() => import('@/components/dashboard/RecentTransactions'));
const PortfolioAllocation = dynamic(() => import('@/components/dashboard/PortfolioAllocation'));
const StockPerformanceChart = dynamic(() => import('@/components/dashboard/StockPerformanceChart'));

// Sample data
const stockPerformanceData = [
  { name: 'Jan', AAPL: 4000, MSFT: 2400, GOOGL: 2400 },
  { name: 'Feb', AAPL: 3000, MSFT: 1398, GOOGL: 2210 },
  { name: 'Mar', AAPL: 2000, MSFT: 9800, GOOGL: 2290 },
  { name: 'Apr', AAPL: 2780, MSFT: 3908, GOOGL: 2000 },
  { name: 'May', AAPL: 1890, MSFT: 4800, GOOGL: 2181 },
  { name: 'Jun', AAPL: 2390, MSFT: 3800, GOOGL: 2500 },
  { name: 'Jul', AAPL: 3490, MSFT: 4300, GOOGL: 2100 },
];

const portfolioData = [
  { name: 'Technology', value: 45 },
  { name: 'Finance', value: 20 },
  { name: 'Healthcare', value: 15 },
  { name: 'Consumer', value: 10 },
  { name: 'Energy', value: 10 },
];

const recentTransactions: {
  id: string;
  stock: string;
  amount: string;
  shares: number;
  date: string;
  status: 'buy' | 'sell';
}[] = [
  { id: '1', stock: 'AAPL', amount: '+$1,200', shares: 2, date: 'Today', status: 'buy' },
  { id: '2', stock: 'MSFT', amount: '-$800', shares: -1, date: 'Yesterday', status: 'sell' },
  { id: '3', stock: 'GOOGL', amount: '+$2,300', shares: 1, date: '2 days ago', status: 'buy' },
  { id: '4', stock: 'TSLA', amount: '-$1,800', shares: -3, date: '3 days ago', status: 'sell' },
];

const stockList = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 182.35, change: 1.23, changePercent: 0.68 },
  { symbol: 'MSFT', name: 'Microsoft Corp', price: 411.72, change: -2.18, changePercent: -0.53 },
  { symbol: 'GOOGL', name: 'Alphabet Inc', price: 175.68, change: 3.45, changePercent: 2.0 },
  { symbol: 'AMZN', name: 'Amazon.com Inc', price: 182.83, change: 1.51, changePercent: 0.83 },
  { symbol: 'TSLA', name: 'Tesla Inc', price: 172.63, change: -4.27, changePercent: -2.41 },
  { symbol: 'META', name: 'Meta Platforms', price: 482.59, change: 7.84, changePercent: 1.65 },
];

export default function Dashboard() {
  const { theme = 'light' } = useTheme();
  // Adding a default value of 'light' ensures theme is never undefined

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Financial Portfolio Dashboard</h1>
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          Overview of your investments and market performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <SummaryCard
          title="Portfolio Total"
          value="$128,420.00"
          change="+2.5% ($3,154)"
          period="Today"
          theme={theme as 'light' | 'dark'}
          isPositive={true}
        />
        <SummaryCard
          title="Daily Change"
          value="+$3,154.00"
          change="+2.5%"
          period="vs Yesterday"
          theme={theme as 'light' | 'dark'}
          isPositive={true}
        />
        <SummaryCard
          title="Monthly Performance"
          value="+$12,840.00"
          change="+11.2%"
          period="This Month"
          theme={theme as 'light' | 'dark'}
          isPositive={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className={`lg:col-span-2 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
          <CardHeader>
            <CardTitle>Stock Performance</CardTitle>
            <CardDescription className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
              Compare your key holdings over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StockPerformanceChart data={stockPerformanceData} theme={theme as 'light' | 'dark'} />
          </CardContent>
        </Card>

        <Card className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}>
          <CardHeader>
            <CardTitle>Portfolio Allocation</CardTitle>
            <CardDescription className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
              Breakdown by sector
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PortfolioAllocation data={portfolioData} theme={theme as 'light' | 'dark'} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className={`lg:col-span-2 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
          <CardContent>
            <StocksList stocks={stockList} theme={theme as 'light' | 'dark'} />
          </CardContent>
        </Card>

        <Card className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
              Your recent activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentTransactions transactions={recentTransactions} theme={theme as 'light' | 'dark'} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
