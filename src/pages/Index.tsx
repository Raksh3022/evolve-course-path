
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Trophy, Sparkles, Star, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "10,000+ Courses",
      description: "Expert-led courses in technology, business, design, and more"
    },
    {
      icon: Users,
      title: "AI-Powered Learning",
      description: "Personalized learning paths with intelligent tutoring support"
    },
    {
      icon: Trophy,
      title: "Gamified Experience",
      description: "Earn XP, unlock achievements, and compete with friends"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Developer",
      content: "EduSpark transformed my career! The AI tutor helped me land my dream job.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "UX Designer",
      content: "The gamification keeps me motivated. I've completed 8 courses this year!",
      rating: 5
    },
    {
      name: "Lisa Johnson",
      role: "Data Scientist",
      content: "Best learning platform I've ever used. The community is amazing too!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 text-white border border-white/20">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm">🎉 Welcome to the Future of Learning</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Learn Anything,
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Achieve Everything
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Join millions of learners on EduSpark - the AI-powered education platform that adapts to your learning style and helps you master new skills faster than ever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/courses">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6 rounded-xl">
                <Play className="h-5 w-5 mr-2" />
                Start Learning Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/ai-tutor">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                Try AI Tutor Free
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold">2M+</div>
              <div className="text-sm">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-blue-200">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Students Say</h2>
          <p className="text-xl text-blue-200">Join thousands of successful learners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-200 text-sm">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-none">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join EduSpark today and experience the future of education with AI-powered personalization, gamification, and expert instruction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl font-semibold">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/ai-tutor">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
