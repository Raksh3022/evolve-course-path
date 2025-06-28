
import { useState } from "react";
import { BookOpen, Trophy, Users, MessageCircle, Target, Calendar, TrendingUp, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const [streak, setStreak] = useState(12);
  const [totalXP, setTotalXP] = useState(2450);
  const [level, setLevel] = useState(8);

  const currentCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Chen",
      progress: 68,
      nextLesson: "Custom Hooks Deep Dive",
      timeLeft: "2h 15m",
      thumbnail: "🚀"
    },
    {
      id: 2,
      title: "AI & Machine Learning Fundamentals",
      instructor: "Dr. Alex Kumar",
      progress: 34,
      nextLesson: "Neural Networks Basics",
      timeLeft: "4h 30m",
      thumbnail: "🤖"
    },
    {
      id: 3,
      title: "UX Design Masterclass",
      instructor: "Maya Rodriguez",
      progress: 89,
      nextLesson: "Usability Testing Methods",
      timeLeft: "1h 45m",
      thumbnail: "🎨"
    }
  ];

  const achievements = [
    { name: "First Course", icon: "🎯", unlocked: true },
    { name: "Week Streak", icon: "🔥", unlocked: true },
    { name: "Quiz Master", icon: "🧠", unlocked: true },
    { name: "Helper", icon: "🤝", unlocked: false },
    { name: "Expert", icon: "⭐", unlocked: false }
  ];

  const todayGoals = [
    { task: "Complete 2 lessons", progress: 50, total: 2 },
    { task: "Take practice quiz", progress: 0, total: 1 },
    { task: "Post in discussion", progress: 100, total: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-xl text-blue-200">
            Ready to continue your learning journey?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-bold">{streak}</div>
              <div className="text-sm text-blue-200">Day Streak</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-bold">{totalXP.toLocaleString()}</div>
              <div className="text-sm text-blue-200">Total XP</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold">Level {level}</div>
              <div className="text-sm text-blue-200">Learning Level</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-blue-200">Active Courses</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Continue Learning */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Continue Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentCourses.map((course) => (
                  <div key={course.id} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{course.thumbnail}</div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{course.title}</h3>
                        <p className="text-blue-200 text-sm">by {course.instructor}</p>
                        <div className="mt-2">
                          <div className="flex justify-between text-sm text-blue-200 mb-1">
                            <span>Progress: {course.progress}%</span>
                            <span>{course.timeLeft} left</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <p className="text-xs text-blue-300 mt-2">Next: {course.nextLesson}</p>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        Continue
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Today's Goals */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Today's Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {todayGoals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-white">
                      <span>{goal.task}</span>
                      <span className="text-blue-200">{goal.progress}/{goal.total}</span>
                    </div>
                    <Progress value={(goal.progress / goal.total) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`text-center p-3 rounded-lg ${
                        achievement.unlocked
                          ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                          : 'bg-white/5 opacity-50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <div className="text-xs text-white font-medium">{achievement.name}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Ask AI Tutor
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Join Discussion
                </Button>
              </CardContent>
            </Card>

            {/* Study Calendar */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Mon</span>
                    <Badge className="bg-green-500">✓</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Tue</span>
                    <Badge className="bg-green-500">✓</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Wed</span>
                    <Badge className="bg-blue-500">Today</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Thu</span>
                    <span className="text-blue-300">-</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Fri</span>
                    <span className="text-blue-300">-</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
