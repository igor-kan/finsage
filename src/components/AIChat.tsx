
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send, Bot, User } from "lucide-react";

interface Message {
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  onClose: () => void;
}

export const AIChat = ({ onClose }: AIChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content: "Hi! I'm your AI financial advisor. I can help you with budgeting, investment advice, tax planning, and more. What would you like to know about your finances today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'ai',
        content: getAIResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInput("");
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('save') || input.includes('saving')) {
      return "Based on your current income and expenses, I recommend saving 20% of your monthly income. You're currently saving $800/month, which is great! Consider automating transfers to your savings account to make it easier.";
    }
    
    if (input.includes('invest') || input.includes('investment')) {
      return "Given your age and risk tolerance, I suggest a diversified portfolio with 70% stocks and 30% bonds. Your current 401(k) is well-balanced, but consider maxing out your employer match if you haven't already.";
    }
    
    if (input.includes('debt') || input.includes('loan')) {
      return "I see you have a credit card balance of $2,390. I recommend paying this off first since credit card interest rates are typically higher than investment returns. Consider the debt avalanche method.";
    }
    
    if (input.includes('tax') || input.includes('taxes')) {
      return "Based on your income, you might benefit from increasing your 401(k) contributions to reduce your taxable income. Also, consider maxing out your Roth IRA contribution of $6,500 for this year.";
    }
    
    return "That's a great question! Based on your financial profile, I'd recommend reviewing your budget and ensuring you have 3-6 months of expenses in your emergency fund. Would you like me to analyze any specific aspect of your finances?";
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col">
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span>AI Financial Advisor</span>
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 ${
                    message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.role === 'user' 
                      ? 'bg-blue-100' 
                      : 'bg-gradient-to-br from-blue-600 to-green-600'
                  }`}>
                    {message.role === 'user' ? (
                      <User className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.role === 'user' ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="flex space-x-2 mt-4">
            <Input
              placeholder="Ask me about your finances..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1"
            />
            <Button onClick={sendMessage} size="sm">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
