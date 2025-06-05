
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Housing', value: 1800, color: '#3b82f6' },
  { name: 'Food', value: 650, color: '#10b981' },
  { name: 'Transportation', value: 420, color: '#f59e0b' },
  { name: 'Entertainment', value: 320, color: '#ef4444' },
  { name: 'Utilities', value: 280, color: '#8b5cf6' },
  { name: 'Other', value: 430, color: '#6b7280' },
];

export const SpendingChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`$${value}`, 'Amount']}
            contentStyle={{ 
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-gray-600">{item.name}: ${item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
