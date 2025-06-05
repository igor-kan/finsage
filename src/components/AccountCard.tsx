
import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Account {
  name: string;
  balance: number;
  type: string;
  change: number;
}

interface AccountCardProps {
  account: Account;
}

export const AccountCard = ({ account }: AccountCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'checking':
        return 'bg-blue-100 text-blue-800';
      case 'savings':
        return 'bg-green-100 text-green-800';
      case 'investment':
        return 'bg-purple-100 text-purple-800';
      case 'credit':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatBalance = (balance: number) => {
    const absBalance = Math.abs(balance);
    const formatted = absBalance.toLocaleString();
    return balance < 0 ? `-$${formatted}` : `$${formatted}`;
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-medium text-gray-900">{account.name}</h3>
            <Badge variant="outline" className={getTypeColor(account.type)}>
              {account.type}
            </Badge>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatBalance(account.balance)}
          </div>
        </div>
      </div>
      
      <div className="text-right">
        <div className={`flex items-center space-x-1 ${
          account.change > 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {account.change > 0 ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="font-medium">
            {account.change > 0 ? '+' : ''}${account.change}
          </span>
        </div>
        <div className="text-sm text-gray-500">this month</div>
      </div>
    </div>
  );
};
