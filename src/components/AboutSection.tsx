
import { BookOpen, Building, MessageSquare, Trophy } from "lucide-react";

const AboutSection = () => {
  const roles = [
    {
      icon: MessageSquare,
      title: "Narrative Specialist",
      description: "Crafting compelling stories that connect technology with human experiences.",
      color: "text-tech-blue"
    },
    {
      icon: BookOpen,
      title: "Passionate Educator",
      description: "Empowering the next generation through innovative teaching methods and tech education.",
      color: "text-tech-green"
    },
    {
      icon: Building,
      title: "Real-Estate Mogul",
      description: "Building wealth and communities through strategic real estate investments.",
      color: "text-tech-purple"
    },
    {
      icon: Trophy,
      title: "Knowledge Warrior",
      description: "Fighting for equal access to education and digital literacy for all.",
      color: "text-tech-orange"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">KaganTech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A multi-faceted professional bridging the gap between technology, education, and entrepreneurship. 
            My mission is to democratize knowledge and empower individuals through the transformative power of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="tech-card group hover:scale-105 transition-all duration-300">
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r from-${role.color.split('-')[1]}-500/20 to-${role.color.split('-')[1]}-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <role.icon className={`h-8 w-8 ${role.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{role.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 tech-card">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  From humble beginnings to becoming a recognized voice in the tech community, 
                  my journey has been driven by an insatiable curiosity and a desire to share knowledge.
                </p>
                <p>
                  Through my content on YouTube, Instagram, and TikTok, I've built a community of 
                  learners who are passionate about technology and personal growth.
                </p>
                <p>
                  Today, I continue to evolve, embracing new technologies while staying true to my 
                  core mission: making complex concepts accessible to everyone.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-tech-blue rounded-full"></div>
                <span className="text-white">5+ Years in Tech Education</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-tech-green rounded-full"></div>
                <span className="text-white">Multi-Platform Content Creator</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-tech-purple rounded-full"></div>
                <span className="text-white">Real Estate Investor</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-tech-orange rounded-full"></div>
                <span className="text-white">Community Builder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
