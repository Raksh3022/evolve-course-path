
import { useState } from "react";
import { Send, Bot, User, BookOpen, Lightbulb, HelpCircle, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const AITutor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI Learning Assistant 🤖 I'm here to help you with any questions about your courses, provide explanations, generate practice problems, and support your learning journey. What would you like to learn about today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    "Explain React hooks with examples",
    "Create a practice quiz on JavaScript",
    "Help me understand machine learning basics",
    "Give me a coding challenge",
    "Summarize my progress this week",
    "What should I learn next?"
  ];

  const studyTopics = [
    { subject: "JavaScript", progress: 85, color: "from-yellow-400 to-orange-500" },
    { subject: "React", progress: 72, color: "from-blue-400 to-cyan-500" },
    { subject: "Python", progress: 56, color: "from-green-400 to-emerald-500" },
    { subject: "Machine Learning", progress: 34, color: "from-purple-400 to-pink-500" }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string) => {
    const responses = [
      "Great question! Let me break this down for you step by step. 📚\n\n1. First, let's understand the core concept...\n2. Here's a practical example...\n3. Try this exercise to practice...",
      "I can help you with that! 🎯 Based on your current progress, here's what I recommend:\n\n✅ Focus on the fundamentals first\n✅ Practice with real examples\n✅ Build a small project to apply what you learn",
      "Excellent topic to explore! 💡 Let me provide you with a comprehensive explanation:\n\n• Key concepts you need to know\n• Common mistakes to avoid\n• Best practices from industry experts",
      "Perfect timing for this question! 🚀 Here's a personalized learning path:\n\n1. Review the basics (15 min)\n2. Watch the tutorial video (30 min)\n3. Complete hands-on exercises (45 min)"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputMessage(prompt);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            AI Learning Assistant 🤖
          </h1>
          <p className="text-xl text-blue-200">
            Get instant help, explanations, and personalized learning guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Study Progress */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Study Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {studyTopics.map((topic, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-white text-sm">
                      <span>{topic.subject}</span>
                      <span>{topic.progress}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${topic.color} rounded-full transition-all duration-500`}
                        style={{ width: `${topic.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600" size="sm">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Get Study Tips
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" size="sm">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Practice Quiz
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Explain Concept
                </Button>
              </CardContent>
            </Card>

            {/* AI Capabilities */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">What I Can Do</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-blue-200">
                  <div>✅ Answer questions</div>
                  <div>✅ Explain concepts</div>
                  <div>✅ Create quizzes</div>
                  <div>✅ Review code</div>
                  <div>✅ Suggest resources</div>
                  <div>✅ Track progress</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-3">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 h-[700px] flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">AI Tutor Assistant</CardTitle>
                    <p className="text-blue-200 text-sm">Online • Ready to help</p>
                  </div>
                  <Badge className="ml-auto bg-green-500">Active</Badge>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full p-6">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.type === 'ai' && (
                          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-8 w-8 flex items-center justify-center">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <div className={`max-w-[80%] p-4 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
                            : 'bg-white/20 text-white'
                        }`}>
                          <div className="whitespace-pre-wrap">{message.content}</div>
                          <div className="text-xs opacity-70 mt-2">
                            {message.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                        {message.type === 'user' && (
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full h-8 w-8 flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex gap-3 justify-start">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-8 w-8 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-white/20 text-white p-4 rounded-lg">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Quick Prompts */}
              <div className="p-4 border-t border-white/20">
                <div className="mb-4">
                  <p className="text-white text-sm mb-2">Quick prompts:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickPrompts.slice(0, 3).map((prompt, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="border-white/30 text-white hover:bg-white/10 text-xs"
                        onClick={() => handleQuickPrompt(prompt)}
                      >
                        {prompt}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about your courses..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutor;
