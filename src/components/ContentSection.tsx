
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ContentSection = () => {
  const youtubeContent = [
    {
      id: 1,
      title: "AI and Machine Learning Fundamentals",
      description: "Complete guide to understanding AI concepts and practical applications in modern technology.",
      thumbnail: "https://img.youtube.com/vi/aircAruvnKk/maxresdefault.jpg",
      channel: "3Blue1Brown",
      views: "2.1M",
      category: "Education"
    },
    {
      id: 2,
      title: "Full Stack Web Development Tutorial",
      description: "Learn React, Node.js, and database integration in this comprehensive tutorial series.",
      thumbnail: "https://img.youtube.com/vi/nu_pCVPKzTk/maxresdefault.jpg",
      channel: "FreeCodeCamp",
      views: "1.8M",
      category: "Programming"
    },
    {
      id: 3,
      title: "Digital Marketing Strategies 2024",
      description: "Latest trends and techniques for effective digital marketing campaigns.",
      thumbnail: "https://img.youtube.com/vi/nU-IIXBWlS4/maxresdefault.jpg",
      channel: "Neil Patel",
      views: "950K",
      category: "Marketing"
    },
    {
      id: 4,
      title: "Entrepreneurship Mindset",
      description: "Building successful startups and developing an entrepreneurial mindset.",
      thumbnail: "https://img.youtube.com/vi/ZoqgAy3h4OM/maxresdefault.jpg",
      channel: "Gary Vaynerchuk",
      views: "1.2M",
      category: "Business"
    },
    {
      id: 5,
      title: "Real Estate Investment Guide",
      description: "Comprehensive guide to real estate investing for beginners and professionals.",
      thumbnail: "https://img.youtube.com/vi/ILeMnuJTQ3s/maxresdefault.jpg",
      channel: "BiggerPockets",
      views: "800K",
      category: "Finance"
    },
    {
      id: 6,
      title: "Advanced JavaScript Concepts",
      description: "Deep dive into JavaScript closures, promises, and async programming.",
      thumbnail: "https://img.youtube.com/vi/8aGhZQkoFbQ/maxresdefault.jpg",
      channel: "Traversy Media",
      views: "1.5M",
      category: "Programming"
    },
    {
      id: 7,
      title: "Leadership in Tech Industry",
      description: "How to lead teams effectively in fast-paced technology environments.",
      thumbnail: "https://img.youtube.com/vi/fW2Lmh6fGfE/maxresdefault.jpg",
      channel: "TED",
      views: "2.3M",
      category: "Leadership"
    },
    {
      id: 8,
      title: "Data Science with Python",
      description: "Learn data analysis, visualization, and machine learning with Python.",
      thumbnail: "https://img.youtube.com/vi/LHBE6Q9XlzI/maxresdefault.jpg",
      channel: "Corey Schafer",
      views: "1.1M",
      category: "Data Science"
    }
  ];

  const tiktokContent = [
    {
      id: 1,
      title: "Tech Tips in 60 Seconds",
      description: "Quick productivity hacks for developers and tech professionals.",
      creator: "@techguru_official",
      likes: "2.1M",
      category: "Tech Tips"
    },
    {
      id: 2,
      title: "Marketing Psychology Tricks",
      description: "Understanding consumer behavior through psychological principles.",
      creator: "@marketingmindset",
      likes: "1.8M",
      category: "Marketing"
    },
    {
      id: 3,
      title: "Real Estate Market Insights",
      description: "Daily market updates and investment opportunities analysis.",
      creator: "@realestate_pro",
      likes: "950K",
      category: "Real Estate"
    },
    {
      id: 4,
      title: "Coding Challenge Solutions",
      description: "Solving popular coding interview questions step by step.",
      creator: "@code_with_me",
      likes: "1.3M",
      category: "Programming"
    },
    {
      id: 5,
      title: "Business Strategy Breakdown",
      description: "Analyzing successful business models and strategies.",
      creator: "@biz_strategies",
      likes: "870K",
      category: "Business"
    },
    {
      id: 6,
      title: "AI Tools for Productivity",
      description: "Latest AI tools that can revolutionize your workflow.",
      creator: "@ai_productivity",
      likes: "1.5M",
      category: "AI/Tech"
    },
    {
      id: 7,
      title: "Investment Portfolio Tips",
      description: "Building a diversified investment portfolio for long-term growth.",
      creator: "@invest_smart",
      likes: "1.1M",
      category: "Finance"
    },
    {
      id: 8,
      title: "Startup Success Stories",
      description: "Lessons learned from successful startup founders.",
      creator: "@startup_stories",
      likes: "920K",
      category: "Entrepreneurship"
    }
  ];

  const instagramContent = [
    {
      id: 1,
      title: "Tech Industry Insights",
      description: "Behind-the-scenes look at major tech companies and their innovations.",
      account: "@tech_insider",
      followers: "2.5M",
      category: "Technology"
    },
    {
      id: 2,
      title: "Educational Content Hub",
      description: "Visual learning materials for various subjects and skills.",
      account: "@learn_visually",
      followers: "1.9M",
      category: "Education"
    },
    {
      id: 3,
      title: "Real Estate Showcase",
      description: "Luxury properties and market trends from around the world.",
      account: "@luxury_realestate",
      followers: "3.2M",
      category: "Real Estate"
    },
    {
      id: 4,
      title: "Business Motivation",
      description: "Daily inspiration and success stories from entrepreneurs.",
      account: "@business_motivation",
      followers: "1.7M",
      category: "Business"
    },
    {
      id: 5,
      title: "Coding Tutorials",
      description: "Step-by-step programming tutorials and code snippets.",
      account: "@code_tutorials",
      followers: "1.4M",
      category: "Programming"
    },
    {
      id: 6,
      title: "Financial Literacy",
      description: "Investment tips and financial planning strategies.",
      account: "@finance_guru",
      followers: "2.1M",
      category: "Finance"
    },
    {
      id: 7,
      title: "Innovation Spotlight",
      description: "Latest innovations and breakthrough technologies.",
      account: "@innovation_daily",
      followers: "1.8M",
      category: "Innovation"
    },
    {
      id: 8,
      title: "Leadership Development",
      description: "Leadership tips and team management strategies.",
      account: "@leadership_tips",
      followers: "1.3M",
      category: "Leadership"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
            Curated Content Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover handpicked content from top creators across YouTube, TikTok, and Instagram. 
            Stay updated with the latest trends in technology, business, and education.
          </p>
        </div>

        {/* YouTube Content */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Youtube className="w-8 h-8 text-tech-red" />
            <h3 className="text-3xl font-bold text-white">YouTube Highlights</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {youtubeContent.map((video) => (
              <Card key={video.id} className="tech-card hover:scale-105 transition-transform duration-300">
                <CardHeader className="p-4">
                  <div className="aspect-video bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 rounded-lg mb-3 flex items-center justify-center">
                    <Youtube className="w-12 h-12 text-tech-red" />
                  </div>
                  <Badge variant="secondary" className="w-fit">{video.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="mb-3 line-clamp-2">
                    {video.description}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>{video.channel}</span>
                    <span>{video.views} views</span>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* TikTok Content */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TT</span>
            </div>
            <h3 className="text-3xl font-bold text-white">TikTok Trending</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiktokContent.map((video) => (
              <Card key={video.id} className="tech-card hover:scale-105 transition-transform duration-300">
                <CardHeader className="p-4">
                  <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">TT</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">{video.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="mb-3 line-clamp-2">
                    {video.description}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>{video.creator}</span>
                    <span>{video.likes} likes</span>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Content
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instagram Content */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Instagram className="w-8 h-8 text-pink-500" />
            <h3 className="text-3xl font-bold text-white">Instagram Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramContent.map((post) => (
              <Card key={post.id} className="tech-card hover:scale-105 transition-transform duration-300">
                <CardHeader className="p-4">
                  <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg mb-3 flex items-center justify-center">
                    <Instagram className="w-12 h-12 text-pink-500" />
                  </div>
                  <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="mb-3 line-clamp-2">
                    {post.description}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>{post.account}</span>
                    <span>{post.followers} followers</span>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
