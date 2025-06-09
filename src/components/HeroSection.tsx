
import { ArrowRight, Code, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-tech-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-tech-green/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-white">KAGAN</span>
                <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent glow-text">
                  TECH
                </span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground space-y-2">
                <p className="font-medium text-tech-blue">Narrative Specialist</p>
                <p className="font-medium text-tech-green">Passionate Educator</p>
                <p className="font-medium text-tech-purple">Real-Estate Mogul</p>
                <p className="text-lg">Warrior for knowledge and impact.</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Sharing my life experiences with tech. Empowering minds through education, 
              innovation, and storytelling in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="tech-button group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
                Get In Touch
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-tech-blue/20 rounded-lg mb-2 mx-auto">
                  <Code className="h-6 w-6 text-tech-blue" />
                </div>
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-tech-green/20 rounded-lg mb-2 mx-auto">
                  <Users className="h-6 w-6 text-tech-green" />
                </div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-muted-foreground">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-tech-purple/20 rounded-lg mb-2 mx-auto">
                  <Zap className="h-6 w-6 text-tech-purple" />
                </div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-tech-blue/30 animate-pulse-glow">
                <img 
                  src="/lovable-uploads/ec2464cf-7938-4e63-b2c1-65a5857b4e92.png" 
                  alt="KaganTech Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-tech-green rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-tech-orange rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-tech-purple rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
