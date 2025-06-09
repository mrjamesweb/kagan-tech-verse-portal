
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, ExternalLink, Twitter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ContentSection = () => {
  const youtubeContent = [
    {
      id: 1,
      title: "AI Revolution: How to Build Your First ChatGPT Clone",
      description: "Complete tutorial on building AI applications from scratch using modern frameworks and APIs.",
      link: "https://www.youtube.com/watch?v=example1&list=PLJm12wueC77vgmZEXS5W-RnsUZwDBbSCX",
      views: "45K",
      category: "AI Development"
    },
    {
      id: 2,
      title: "React & TypeScript Mastery: Enterprise Level Code",
      description: "Deep dive into advanced React patterns and TypeScript implementation for scalable applications.",
      link: "https://www.youtube.com/watch?v=example2&list=PLJm12wueC77vgmZEXS5W-RnsUZwDBbSCX",
      views: "32K",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Building SaaS from Zero to $10K MRR",
      description: "Complete journey of building and scaling a successful SaaS product with real metrics.",
      link: "https://www.youtube.com/watch?v=example3&list=PLJm12wueC77vgmZEXS5W-RnsUZwDBbSCX",
      views: "67K",
      category: "Entrepreneurship"
    },
    {
      id: 4,
      title: "Next.js 14 Full Stack App with Authentication",
      description: "Build a complete full-stack application with user authentication and database integration.",
      link: "https://www.youtube.com/watch?v=example4&list=PLJm12wueC77vgmZEXS5W-RnsUZwDBbSCX",
      views: "28K",
      category: "Full Stack"
    },
    {
      id: 5,
      title: "Docker & Kubernetes for Developers",
      description: "Learn containerization and orchestration for modern application deployment.",
      link: "https://www.youtube.com/watch?v=example5&list=PLJm12wueC77vgmZEXS5W-RnsUZwDBbSCX",
      views: "41K",
      category: "DevOps"
    },
    {
      id: 6,
      title: "API Design Best Practices & GraphQL",
      description: "Master API development with REST and GraphQL for scalable backend systems.",
      link: "https://www.youtube.com/watch?v=example6&list=PLJm12wueC77vgmZEXS5W-RnsUZwDBbSCX",
      views: "35K",
      category: "Backend"
    },
    {
      id: 7,
      title: "Machine Learning for Web Developers",
      description: "Integrate ML models into web applications using TensorFlow.js and Python APIs.",
      link: "https://www.youtube.com/watch?v=example7&list=PLJm12wueC77vgmZEXS5W-RnsUZwDBbSCX",
      views: "52K",
      category: "AI/ML"
    }
  ];

  const tiktokContent = [
    {
      id: 1,
      title: "5 VS Code Extensions That Will Blow Your Mind",
      description: "Quick productivity hacks every developer needs to know for faster coding.",
      link: "https://www.tiktok.com/@kagantech/video/example1",
      likes: "125K",
      category: "Dev Tips"
    },
    {
      id: 2,
      title: "React Hooks Explained in 60 Seconds",
      description: "useState, useEffect, and custom hooks made simple for beginners.",
      link: "https://www.tiktok.com/@kagantech/video/example2",
      likes: "89K",
      category: "React"
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use What",
      description: "Visual guide to choosing the right layout method for your projects.",
      link: "https://www.tiktok.com/@kagantech/video/example3",
      likes: "76K",
      category: "CSS"
    },
    {
      id: 4,
      title: "JavaScript Array Methods That Save Time",
      description: "Map, filter, reduce and more - functional programming made easy.",
      link: "https://www.tiktok.com/@kagantech/video/example4",
      likes: "143K",
      category: "JavaScript"
    },
    {
      id: 5,
      title: "Git Commands Every Developer Should Know",
      description: "Essential Git workflows for professional development teams.",
      link: "https://www.tiktok.com/@kagantech/video/example5",
      likes: "92K",
      category: "Git"
    },
    {
      id: 6,
      title: "API Testing Made Simple with Postman",
      description: "Quick tutorial on testing REST APIs and debugging requests.",
      link: "https://www.tiktok.com/@kagantech/video/example6",
      likes: "67K",
      category: "API"
    },
    {
      id: 7,
      title: "Database Design Principles in 90 Seconds",
      description: "Normalization, indexing, and performance optimization basics.",
      link: "https://www.tiktok.com/@kagantech/video/example7",
      likes: "84K",
      category: "Database"
    },
    {
      id: 8,
      title: "AI Prompt Engineering Secrets",
      description: "How to get better results from ChatGPT and other AI tools.",
      link: "https://www.tiktok.com/@kagantech/video/example8",
      likes: "156K",
      category: "AI"
    }
  ];

  const instagramContent = [
    {
      id: 1,
      title: "Tech Setup Tour 2024",
      description: "Behind the scenes look at my development workspace and favorite tools.",
      link: "https://www.instagram.com/p/example1/",
      likes: "3.2K",
      category: "Lifestyle"
    },
    {
      id: 2,
      title: "Code Review Best Practices",
      description: "How to give and receive effective code reviews in development teams.",
      link: "https://www.instagram.com/p/example2/",
      likes: "2.8K",
      category: "Development"
    },
    {
      id: 3,
      title: "Startup Journey: Month 6 Update",
      description: "Real insights into building a tech startup - challenges and wins.",
      link: "https://www.instagram.com/p/example3/",
      likes: "4.1K",
      category: "Entrepreneurship"
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      description: "Visual guide to creating beautiful and functional user interfaces.",
      link: "https://www.instagram.com/p/example4/",
      likes: "2.5K",
      category: "Design"
    },
    {
      id: 5,
      title: "Tech Career Roadmap 2024",
      description: "Step-by-step guide to breaking into the tech industry.",
      link: "https://www.instagram.com/p/example5/",
      likes: "5.7K",
      category: "Career"
    },
    {
      id: 6,
      title: "Open Source Contribution Guide",
      description: "How to start contributing to open source projects as a beginner.",
      link: "https://www.instagram.com/p/example6/",
      likes: "3.9K",
      category: "Open Source"
    },
    {
      id: 7,
      title: "DevOps Culture and Practices",
      description: "Building a culture of collaboration between development and operations.",
      link: "https://www.instagram.com/p/example7/",
      likes: "2.3K",
      category: "DevOps"
    }
  ];

  const twitterContent = [
    {
      id: 1,
      title: "Thread: Building in Public",
      description: "Why sharing your journey as a developer/entrepreneur is crucial for growth.",
      link: "https://x.com/KaganTech/status/example1",
      retweets: "89",
      category: "Thread"
    },
    {
      id: 2,
      title: "Hot Take: AI Won't Replace Developers",
      description: "AI will augment developers, not replace them. Here's why critical thinking matters.",
      link: "https://x.com/KaganTech/status/example2",
      retweets: "156",
      category: "Opinion"
    },
    {
      id: 3,
      title: "Quick Tip: TypeScript Generics",
      description: "One-liner that shows the power of TypeScript generics in action.",
      link: "https://x.com/KaganTech/status/example3",
      retweets: "67",
      category: "Tip"
    },
    {
      id: 4,
      title: "Conference Highlights: React Summit",
      description: "Key takeaways from React Summit 2024 - what's next for React ecosystem.",
      link: "https://x.com/KaganTech/status/example4",
      retweets: "234",
      category: "Conference"
    },
    {
      id: 5,
      title: "Startup Milestone: 1000 Users",
      description: "Celebrating our first 1000 users - lessons learned and what's next.",
      link: "https://x.com/KaganTech/status/example5",
      retweets: "445",
      category: "Milestone"
    },
    {
      id: 6,
      title: "Open Source Update",
      description: "New release of our React component library with improved accessibility.",
      link: "https://x.com/KaganTech/status/example6",
      retweets: "123",
      category: "Release"
    }
  ];

  const handleContentClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
            KaganTech Content Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest content across YouTube, TikTok, Instagram, and Twitter. 
            Deep dives into tech, development tutorials, and entrepreneurship insights.
          </p>
        </div>

        {/* YouTube Content */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Youtube className="w-8 h-8 text-red-500" />
            <h3 className="text-3xl font-bold text-white">YouTube Tutorials</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeContent.map((video) => (
              <Card key={video.id} className="tech-card hover:scale-105 transition-all duration-300 cursor-pointer group" onClick={() => handleContentClick(video.link)}>
                <CardHeader className="p-4">
                  <div className="aspect-video bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg mb-3 flex items-center justify-center group-hover:from-red-500/30 group-hover:to-red-600/30 transition-colors">
                    <Youtube className="w-12 h-12 text-red-500" />
                  </div>
                  <Badge variant="secondary" className="w-fit">{video.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-tech-blue transition-colors">{video.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="mb-3 line-clamp-2">
                    {video.description}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>KaganTech</span>
                    <span>{video.views} views</span>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Watch Now
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
            <h3 className="text-3xl font-bold text-white">TikTok Quick Tips</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiktokContent.map((video) => (
              <Card key={video.id} className="tech-card hover:scale-105 transition-all duration-300 cursor-pointer group" onClick={() => handleContentClick(video.link)}>
                <CardHeader className="p-4">
                  <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-lg mb-3 flex items-center justify-center group-hover:from-pink-500/30 group-hover:to-violet-500/30 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">TT</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">{video.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-tech-blue transition-colors">{video.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="mb-3 line-clamp-2">
                    {video.description}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>@kagantech</span>
                    <span>{video.likes} likes</span>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View TikTok
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instagram Content */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Instagram className="w-8 h-8 text-pink-500" />
            <h3 className="text-3xl font-bold text-white">Instagram Stories</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramContent.map((post) => (
              <Card key={post.id} className="tech-card hover:scale-105 transition-all duration-300 cursor-pointer group" onClick={() => handleContentClick(post.link)}>
                <CardHeader className="p-4">
                  <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg mb-3 flex items-center justify-center group-hover:from-pink-500/30 group-hover:to-orange-500/30 transition-colors">
                    <Instagram className="w-12 h-12 text-pink-500" />
                  </div>
                  <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-tech-blue transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="mb-3 line-clamp-2">
                    {post.description}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>@kagantech</span>
                    <span>{post.likes} likes</span>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Post
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Twitter Content */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Twitter className="w-8 h-8 text-blue-400" />
            <h3 className="text-3xl font-bold text-white">Twitter Insights</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {twitterContent.map((tweet) => (
              <Card key={tweet.id} className="tech-card hover:scale-105 transition-all duration-300 cursor-pointer group" onClick={() => handleContentClick(tweet.link)}>
                <CardHeader className="p-4">
                  <div className="aspect-video bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-lg mb-3 flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-blue-500/30 transition-colors">
                    <Twitter className="w-12 h-12 text-blue-400" />
                  </div>
                  <Badge variant="secondary" className="w-fit">{tweet.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-tech-blue transition-colors">{tweet.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="mb-3 line-clamp-2">
                    {tweet.description}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>@KaganTech</span>
                    <span>{tweet.retweets} retweets</span>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Tweet
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
