import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

interface StocksListProps {
  stocks: Stock[];
  theme: 'light' | 'dark';
}

export default function StocksList({ stocks, theme }: StocksListProps) {
  return (
    <>
      <div className="flex flex-row items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Your Stocks</h2>
          <p className={theme === 'dark' ? 'text-gray-400 text-sm' : 'text-gray-500 text-sm'}>
            Current holdings and performance
          </p>
        </div>
      </div>

      <div className={`rounded-md border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className={`grid grid-cols-6 gap-2 p-3 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} rounded-t-md`}>
          <div className="col-span-2 font-medium">Symbol</div>
          <div className="font-medium">Price</div>
          <div className="font-medium">Change</div>
          <div className="font-medium">% Change</div>
          <div className="font-medium text-right">Actions</div>
        </div>
        {stocks.map((stock, index) => (
          <div
            key={index}
            className={`grid grid-cols-6 gap-2 p-3 ${
              index !== stocks.length - 1 ? `border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}` : ''
            } hover:${theme === 'dark' ? 'bg-gray-750' : 'bg-gray-50'} transition-colors`}
          >
            <div className="col-span-2">
              <div className="font-medium">{stock.symbol}</div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{stock.name}</div>
            </div>
            <div className="font-mono">${stock.price.toFixed(2)}</div>
            <div className={stock.change >= 0 ? 'text-green-500' : 'text-red-500'}>
              {stock.change >= 0 ? '+' : ''}
              {stock.change.toFixed(2)}
            </div>
            <div className={stock.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}>
              {stock.changePercent >= 0 ? '+' : ''}
              {stock.changePercent.toFixed(2)}%
            </div>
            <div className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>Actions</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}>
                  <DropdownMenuItem>Buy More</DropdownMenuItem>
                  <DropdownMenuItem>Sell</DropdownMenuItem>
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
