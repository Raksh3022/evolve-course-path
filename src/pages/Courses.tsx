
import { useState } from "react";
import { Search, Filter, Star, Clock, Users, BookOpen, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Programming", "Design", "Business", "AI/ML", "Languages"];

  const courses = [
    {
      id: 1,
      title: "Complete React & Next.js Bootcamp",
      instructor: "Sarah Chen",
      category: "Programming",
      rating: 4.8,
      students: 15420,
      duration: "42 hours",
      level: "Intermediate",
      price: 89.99,
      originalPrice: 199.99,
      thumbnail: "🚀",
      featured: true,
      skills: ["React", "Next.js", "JavaScript", "TypeScript"]
    },
    {
      id: 2,
      title: "AI & Machine Learning Masterclass",
      instructor: "Dr. Alex Kumar",
      category: "AI/ML",
      rating: 4.9,
      students: 8930,
      duration: "38 hours",
      level: "Advanced",
      price: 129.99,
      originalPrice: 249.99,
      thumbnail: "🤖",
      featured: true,
      skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"]
    },
    {
      id: 3,
      title: "UX/UI Design Complete Course",
      instructor: "Maya Rodriguez",
      category: "Design",
      rating: 4.7,
      students: 12150,
      duration: "35 hours",
      level: "Beginner",
      price: 69.99,
      originalPrice: 149.99,
      thumbnail: "🎨",
      featured: false,
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    {
      id: 4,
      title: "Digital Marketing Strategy 2024",
      instructor: "James Wilson",
      category: "Business",
      rating: 4.6,
      students: 9876,
      duration: "28 hours",
      level: "Intermediate",
      price: 79.99,
      originalPrice: 179.99,
      thumbnail: "📈",
      featured: false,
      skills: ["SEO", "Social Media", "Analytics", "Content Marketing"]
    },
    {
      id: 5,
      title: "Full Stack Web Development",
      instructor: "David Park",
      category: "Programming",
      rating: 4.8,
      students: 18750,
      duration: "65 hours",
      level: "Beginner",
      price: 99.99,
      originalPrice: 229.99,
      thumbnail: "💻",
      featured: true,
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"]
    },
    {
      id: 6,
      title: "Spanish Fluency in 90 Days",
      instructor: "Carmen Sophia",
      category: "Languages",
      rating: 4.7,
      students: 7643,
      duration: "25 hours",
      level: "Beginner",
      price: 59.99,
      originalPrice: 119.99,
      thumbnail: "🇪🇸",
      featured: false,
      skills: ["Conversation", "Grammar", "Vocabulary", "Pronunciation"]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredCourses = courses.filter(course => course.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Discover Courses 📚
          </h1>
          <p className="text-xl text-blue-200">
            Level up your skills with expert-led courses
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search courses, instructors, topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500" 
                      : "border-white/30 text-white hover:bg-white/10"
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Courses */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Featured Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer group">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl">{course.thumbnail}</div>
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                        FEATURED
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{course.title}</h3>
                      <p className="text-blue-200 text-sm">by {course.instructor}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-blue-200">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-white/20 text-white">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-white/20 text-white">
                          +{course.skills.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white font-bold text-xl">${course.price}</span>
                        <span className="text-blue-300 text-sm line-through ml-2">${course.originalPrice}</span>
                      </div>
                      <Badge className="bg-blue-500">{course.level}</Badge>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 group-hover:scale-105 transition-transform">
                      <Play className="h-4 w-4 mr-2" />
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Courses */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">
                All Courses ({filteredCourses.length})
              </h2>
            </div>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer group">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl">{course.thumbnail}</div>
                      {course.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">
                          HOT
                        </Badge>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{course.title}</h3>
                      <p className="text-blue-200 text-sm">by {course.instructor}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-blue-200">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-white/20 text-white">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-white/20 text-white">
                          +{course.skills.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white font-bold text-xl">${course.price}</span>
                        <span className="text-blue-300 text-sm line-through ml-2">${course.originalPrice}</span>
                      </div>
                      <Badge className="bg-blue-500">{course.level}</Badge>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 group-hover:scale-105 transition-transform">
                      <Play className="h-4 w-4 mr-2" />
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
