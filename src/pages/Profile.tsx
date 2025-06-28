
import { useState } from "react";
import { User, Trophy, BookOpen, Clock, Target, Edit, Star, Award, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  const [user] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    joinDate: "March 2023",
    level: 8,
    xp: 2450,
    nextLevelXP: 3000,
    streak: 12,
    coursesCompleted: 7,
    totalStudyTime: 142,
    rank: 256
  });

  const achievements = [
    { name: "First Course", icon: "🎯", description: "Complete your first course", unlocked: true, date: "Mar 15, 2023" },
    { name: "Week Warrior", icon: "🔥", description: "Study for 7 days straight", unlocked: true, date: "Apr 2, 2023" },
    { name: "Quiz Master", icon: "🧠", description: "Score 100% on 5 quizzes", unlocked: true, date: "May 10, 2023" },
    { name: "Helper", icon: "🤝", description: "Help 10 students in discussions", unlocked: false, date: null },
    { name: "Expert", icon: "⭐", description: "Reach level 10", unlocked: false, date: null },
    { name: "Speedster", icon: "⚡", description: "Complete a course in under 5 days", unlocked: true, date: "Jun 8, 2023" },
    { name: "Scholar", icon: "📚", description: "Complete 10 courses", unlocked: false, date: null },
    { name: "Perfectionist", icon: "💯", description: "Get perfect scores on all lessons in a course", unlocked: true, date: "Jul 22, 2023" }
  ];

  const completedCourses = [
    {
      title: "JavaScript Fundamentals",
      instructor: "John Doe",
      completedDate: "June 2023",
      score: 95,
      certificateId: "JS001",
      thumbnail: "📜"
    },
    {
      title: "React Basics",
      instructor: "Sarah Chen",
      completedDate: "July 2023",
      score: 88,
      certificateId: "REACT001",
      thumbnail: "⚛️"
    },
    {
      title: "CSS Mastery",
      instructor: "Mike Taylor",
      completedDate: "August 2023",
      score: 92,
      certificateId: "CSS001",
      thumbnail: "🎨"
    }
  ];

  const currentGoals = [
    { goal: "Complete AI/ML course", progress: 34, total: 100 },
    { goal: "Maintain 30-day streak", progress: 12, total: 30 },
    { goal: "Earn 5 certificates", progress: 3, total: 5 },
    { goal: "Reach level 10", progress: 8, total: 10 }
  ];

  const studyStats = [
    { label: "This Week", value: "8.5", unit: "hours", icon: Clock, color: "from-blue-500 to-cyan-500" },
    { label: "This Month", value: "34", unit: "hours", icon: Calendar, color: "from-green-500 to-emerald-500" },
    { label: "Average Score", value: "92", unit: "%", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
    { label: "Global Rank", value: "#256", unit: "", icon: Trophy, color: "from-yellow-500 to-orange-500" }
  ];

  const xpProgress = (user.xp / user.nextLevelXP) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Your Profile 👤
          </h1>
          <p className="text-xl text-blue-200">
            Track your learning journey and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="space-y-6">
            {/* User Card */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="relative">
                    <Avatar className="h-24 w-24 mx-auto border-4 border-gradient-to-r from-purple-500 to-pink-500">
                      <AvatarFallback className="text-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      LVL {user.level}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                    <p className="text-blue-200">{user.email}</p>
                    <p className="text-sm text-blue-300">Member since {user.joinDate}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-white text-sm">
                      <span>Level Progress</span>
                      <span>{user.xp}/{user.nextLevelXP} XP</span>
                    </div>
                    <Progress value={xpProgress} className="h-3" />
                    <p className="text-xs text-blue-300">{user.nextLevelXP - user.xp} XP to next level</p>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Study Stats */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Study Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {studyStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-r ${stat.color} rounded-lg`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-white text-sm">{stat.label}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold">{stat.value}</div>
                        <div className="text-blue-200 text-xs">{stat.unit}</div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Goals */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Current Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentGoals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-white">
                      <span>{goal.goal}</span>
                      <span className="text-blue-200">{goal.progress}/{goal.total}</span>
                    </div>
                    <Progress value={(goal.progress / goal.total) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Achievements ({achievements.filter(a => a.unlocked).length}/{achievements.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg text-center transition-all cursor-pointer ${
                        achievement.unlocked
                          ? 'bg-gradient-to-br from-yellow-400 to-orange-500 hover:scale-105'
                          : 'bg-white/5 opacity-50'
                      }`}
                    >
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <div className="text-sm font-medium text-white mb-1">{achievement.name}</div>
                      <div className="text-xs text-white/80">{achievement.description}</div>
                      {achievement.unlocked && achievement.date && (
                        <div className="text-xs text-white/60 mt-2">{achievement.date}</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Completed Courses */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Completed Courses & Certificates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {completedCourses.map((course, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{course.thumbnail}</div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{course.title}</h3>
                        <p className="text-blue-200 text-sm">by {course.instructor}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge className="bg-green-500">Completed</Badge>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="h-4 w-4" />
                            <span className="text-white text-sm">{course.score}%</span>
                          </div>
                          <span className="text-blue-300 text-sm">{course.completedDate}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" size="sm">
                        View Certificate
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
