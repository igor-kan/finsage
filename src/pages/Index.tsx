
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, DollarSign, PiggyBank, Target, MessageCircle, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { NetWorthChart } from "@/components/NetWorthChart";
import { SpendingChart } from "@/components/SpendingChart";
import { AIChat } from "@/components/AIChat";
import { AccountCard } from "@/components/AccountCard";
import { GoalCard } from "@/components/GoalCard";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  // Sample data - in real app, this would come from financial APIs
  const netWorth = 45750;
  const monthlyChange = 2340;
  const changePercentage = 5.4;
  
  const accounts = [
    { name: "Chase Checking", balance: 5240, type: "checking", change: 120 },
    { name: "Ally Savings", balance: 15600, type: "savings", change: 340 },
    { name: "401(k)", balance: 23400, type: "investment", change: 1850 },
    { name: "Roth IRA", balance: 8900, type: "investment", change: 180 },
    { name: "Credit Card", balance: -2390, type: "credit", change: -50 }
  ];

  const goals = [
    { name: "Emergency Fund", current: 15600, target: 20000, category: "Safety" },
    { name: "Down Payment", current: 8900, target: 50000, category: "Home" },
    { name: "Vacation", current: 2400, target: 5000, category: "Lifestyle" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                FinSage
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowChat(!showChat)}
                className="flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>AI Advisor</span>
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600">
                <Plus className="w-4 h-4 mr-2" />
                Connect Account
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Net Worth Overview */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Total Net Worth</CardTitle>
              <CardDescription className="text-blue-100">
                Your complete financial picture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold mb-2">
                    ${netWorth.toLocaleString()}
                  </div>
                  <div className="flex items-center space-x-2">
                    {changePercentage > 0 ? (
                      <ArrowUpRight className="w-5 h-5 text-green-200" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-red-200" />
                    )}
                    <span className="text-lg">
                      ${Math.abs(monthlyChange).toLocaleString()} ({changePercentage}%)
                    </span>
                    <span className="text-blue-200">this month</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="bg-white/20 text-white mb-2">
                    On Track
                  </Badge>
                  <div className="text-sm text-blue-100">
                    Financial Health Score: 85/100
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Charts */}
            <Tabs defaultValue="networth" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="networth">Net Worth</TabsTrigger>
                <TabsTrigger value="spending">Spending</TabsTrigger>
                <TabsTrigger value="investments">Investments</TabsTrigger>
              </TabsList>
              
              <TabsContent value="networth">
                <Card>
                  <CardHeader>
                    <CardTitle>Net Worth Trend</CardTitle>
                    <CardDescription>
                      Track your wealth growth over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <NetWorthChart />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="spending">
                <Card>
                  <CardHeader>
                    <CardTitle>Spending Analysis</CardTitle>
                    <CardDescription>
                      Where your money goes each month
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SpendingChart />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="investments">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Portfolio</CardTitle>
                    <CardDescription>
                      Asset allocation and performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">+8.2%</div>
                          <div className="text-sm text-gray-600">YTD Return</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">$32,300</div>
                          <div className="text-sm text-gray-600">Total Value</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>US Stocks (60%)</span>
                          <Progress value={60} className="w-24" />
                        </div>
                        <div className="flex justify-between items-center">
                          <span>International (20%)</span>
                          <Progress value={20} className="w-24" />
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Bonds (15%)</span>
                          <Progress value={15} className="w-24" />
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Cash (5%)</span>
                          <Progress value={5} className="w-24" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Accounts Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Accounts</CardTitle>
                <CardDescription>
                  All your financial accounts in one place
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accounts.map((account, index) => (
                    <AccountCard key={index} account={account} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-green-600 rounded-full"></div>
                  <span>AI Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="font-medium text-blue-900">Investment Opportunity</div>
                  <div className="text-sm text-blue-700 mt-1">
                    Consider increasing your 401(k) contribution by 2% to maximize employer matching.
                  </div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="font-medium text-green-900">Tax Optimization</div>
                  <div className="text-sm text-green-700 mt-1">
                    You're on track to hit the next tax bracket. Consider Roth IRA contributions.
                  </div>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                  <div className="font-medium text-amber-900">Spending Alert</div>
                  <div className="text-sm text-amber-700 mt-1">
                    Dining out spending is 20% above your monthly budget.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Financial Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {goals.map((goal, index) => (
                  <GoalCard key={index} goal={goal} />
                ))}
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Goal
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <PiggyBank className="w-4 h-4 mr-2" />
                  Set Savings Goal
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Investment Analysis
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Tax Planning
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* AI Chat */}
      {showChat && (
        <AIChat onClose={() => setShowChat(false)} />
      )}
    </div>
  );
};

export default Index;
