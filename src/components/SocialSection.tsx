
import { Youtube, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  const socialLinks = [
    {
      icon: Youtube,
      name: "YouTube",
      handle: "@KaganTech",
      description: "Tech tutorials, life experiences, and educational content",
      url: "https://www.youtube.com/playlist?list=PLJm12wueC77vgmZEXS5W-RnsUZwDBbSCX",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/20"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@kagantech",
      description: "Behind the scenes, daily insights, and tech lifestyle",
      url: "https://www.instagram.com/kagantech/",
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-500/20"
    },
    {
      icon: Twitter,
      name: "Twitter/X",
      handle: "@KaganTech",
      description: "Tech thoughts, industry insights, and real-time updates",
      url: "https://x.com/KaganTech",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/20"
    }
  ];

  const tiktokIcon = () => (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.39a4.85 4.85 0 0 1-1.04 0z"/>
    </svg>
  );

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Connect With <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow my journey across platforms and join a community of learners, creators, and innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {socialLinks.map((social, index) => (
            <div key={index} className="tech-card group hover:scale-105 transition-all duration-300">
              <div className={`w-16 h-16 rounded-lg ${social.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <social.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{social.name}</h3>
              <p className="text-tech-blue font-medium mb-3">{social.handle}</p>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{social.description}</p>
              <Button 
                variant="outline" 
                className={`w-full bg-gradient-to-r ${social.color} text-white border-0 hover:scale-105 transition-transform`}
                onClick={() => window.open(social.url, '_blank')}
              >
                Follow
              </Button>
            </div>
          ))}

          {/* TikTok */}
          <div className="tech-card group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-lg bg-black/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {tiktokIcon()}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">TikTok</h3>
            <p className="text-tech-blue font-medium mb-3">@kagantech</p>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Quick tech tips, trends, and bite-sized educational content
            </p>
            <Button 
              variant="outline" 
              className="w-full bg-gradient-to-r from-gray-800 to-black text-white border-0 hover:scale-105 transition-transform"
              onClick={() => window.open('https://www.tiktok.com/@kagantech', '_blank')}
            >
              Follow
            </Button>
          </div>
        </div>

        {/* Call to action */}
        <div className="tech-card text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Ready to Connect?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to collaborate, learn, or just say hello, I'd love to hear from you. 
            Let's build something amazing together.
          </p>
          <Button className="tech-button text-lg px-8 py-4">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
