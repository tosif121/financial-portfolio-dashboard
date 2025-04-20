import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Transaction {
  id: string;
  stock: string;
  date: string;
  status: 'buy' | 'sell';
  amount: string;
  shares: number;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
  theme: 'light' | 'dark';
}

export default function RecentTransactions({ transactions, theme }: RecentTransactionsProps) {
  return (
    <>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`flex items-center justify-between p-3 rounded-lg ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
            } transition-transform hover:scale-[1.02] cursor-pointer`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-full ${
                  transaction.status === 'buy' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}
              >
                {transaction.status === 'buy' ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
              </div>
              <div>
                <div className="font-medium">{transaction.stock}</div>
                <div className="text-xs text-gray-500">{transaction.date}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-medium ${transaction.status === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
                {transaction.amount}
              </div>
              <div className="text-xs text-gray-500">{transaction.shares} shares</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Button variant="outline" className="w-full">
          View All Transactions
        </Button>
      </div>
    </>
  );
}
