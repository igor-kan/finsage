
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Goal {
  name: string;
  current: number;
  target: number;
  category: string;
}

interface GoalCardProps {
  goal: Goal;
}

export const GoalCard = ({ goal }: GoalCardProps) => {
  const progress = (goal.current / goal.target) * 100;
  const remaining = goal.target - goal.current;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Safety':
        return 'bg-green-100 text-green-800';
      case 'Home':
        return 'bg-blue-100 text-blue-800';
      case 'Lifestyle':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-gray-900">{goal.name}</h4>
        <Badge variant="outline" className={getCategoryColor(goal.category)}>
          {goal.category}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
          </span>
          <span className="font-medium text-gray-900">
            {progress.toFixed(1)}%
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="text-sm text-gray-500">
          ${remaining.toLocaleString()} remaining
        </div>
      </div>
    </div>
  );
};
