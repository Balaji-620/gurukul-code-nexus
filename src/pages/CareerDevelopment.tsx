
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Brain, Bot, BookOpen, Briefcase, Award, Users, Heart, 
  ArrowRight, CheckCircle, Star, Target, Zap, Shield,
  TrendingUp, MessageCircle, Lightbulb
} from 'lucide-react';

const CareerDevelopment = () => {
  const modules = [
    {
      id: "discovery",
      icon: <Brain className="h-8 w-8" />,
      title: "Self-Discovery Engine",
      subtitle: "Understand yourself to lead your future",
      description: "Your gateway to lifelong career intelligence. Blends neuroscience, psychometrics, and behavioral analytics into a holistic profile.",
      features: [
        "Personality & Cognitive Profiling",
        "Values & Motivation Elicitation", 
        "Burnout & Energy Baseline",
        "Career Fit Score™",
        "Role Profiling"
      ],
      color: "from-brand-blue to-brand-cyan"
    },
    {
      id: "assistant",
      icon: <Bot className="h-8 w-8" />,
      title: "AI Career Assistant",
      subtitle: "Your conversational partner for growth decisions",
      description: "GPT-4 Turbo-powered agent built on RAG pipeline with memory, reflection, and role awareness.",
      features: [
        "Real-time Dialogue",
        "Next Best Step Engine",
        "Dynamic Role Simulation",
        "Opportunity Radar"
      ],
      color: "from-brand-cyan to-brand-blue"
    },
    {
      id: "accelerator",
      icon: <BookOpen className="h-8 w-8" />,
      title: "Skill Accelerator",
      subtitle: "Learn what matters, when it matters, with who matters",
      description: "Adaptive, modular skill-building engine that unites content, community, and competency.",
      features: [
        "Adaptive Learning Paths",
        "Mentor-Led Studios",
        "Micro-Certifications",
        "Live Capstone Hackathons"
      ],
      color: "from-brand-blue to-brand-cyan"
    },
    {
      id: "toolkit",
      icon: <Briefcase className="h-8 w-8" />,
      title: "Job-Ready Toolkit",
      subtitle: "Show up smarter, sharper, and confidently job-ready",
      description: "Convert skills and aspirations into career outcomes with comprehensive preparation tools.",
      features: [
        "AI Resume Builder",
        "LinkedIn Optimizer",
        "Mock Interview Simulator",
        "FitScore™ Role Matching",
        "Negotiation Playbooks"
      ],
      color: "from-brand-cyan to-brand-blue"
    },
    {
      id: "portfolio",
      icon: <Award className="h-8 w-8" />,
      title: "Portfolio & Validation Hub",
      subtitle: "Proof-of-work becomes your personal brand",
      description: "Credible, digital-first platform for showcasing verified outputs, not just inputs.",
      features: [
        "Auto-Generated Portfolio Sites",
        "Blockchain-Authenticated Ledger",
        "Peer Review & Community Upvotes"
      ],
      color: "from-brand-blue to-brand-cyan"
    },
    {
      id: "mentorship",
      icon: <Users className="h-8 w-8" />,
      title: "Coaching & Mentorship Network",
      subtitle: "Grow with those who've walked the path before you",
      description: "Structured mentorship and scalable coaching programs embedded within your journey.",
      features: [
        "AI-Matched Mentors",
        "Leadership Pods",
        "Communication & Conflict Clinics",
        "Emotional Intelligence Workouts",
        "Nudging & Habit Formation"
      ],
      color: "from-brand-cyan to-brand-blue"
    },
    {
      id: "wellness",
      icon: <Heart className="h-8 w-8" />,
      title: "Career Health & Life Design",  
      subtitle: "Sustainability is not just environmental — it's professional",
      description: "Beyond skills and salaries to design purposeful, regenerative careers.",
      features: [
        "Burnout Early Warning System",
        "Quarterly Impact Dashboard",
        "Work-Life-Purpose Integration",
        "Long-Term Reflection Journal"
      ],
      color: "from-brand-blue to-brand-cyan"
    }
  ];

  const ctaButtons = [
    { text: "Start Your Free Career Assessment", primary: true },
    { text: "Try the AI Career Assistant", primary: false },
    { text: "Build Your Resume in 10 Minutes", primary: false },
    { text: "Book a Demo", primary: false }
  ];

  const benefits = [
    { icon: <Target className="h-6 w-6" />, text: "Personalized career intelligence based on your unique profile" },
    { icon: <Zap className="h-6 w-6" />, text: "AI-powered insights that adapt to market trends" },
    { icon: <Shield className="h-6 w-6" />, text: "Ethical AI that puts your agency and privacy first" },
    { icon: <TrendingUp className="h-6 w-6" />, text: "Proven track record of 95% career advancement success" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(86,199,223,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(3,109,155,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-6">
              🔄 Reimagining Work, Learning & Purpose for the AI Era
            </div>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in">
              Your All-in-One <span className="gradient-text">AI Career Operating System</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: '200ms' }}>
              A deeply integrated platform that guides you across the entire arc of career growth — from self-discovery to lifelong upskilling and real-world impact
            </p>
            
            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-left">
                  <div className="text-brand-cyan mb-2">{benefit.icon}</div>
                  <p className="text-white text-sm">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Button className="bg-brand-blue hover:bg-brand-cyan text-white px-8 py-3 font-montserrat font-medium hover-scale text-lg">
                Start Your Career Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              7 Intelligent Modules for Complete Career Mastery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each module is designed to work seamlessly together, creating a comprehensive ecosystem for your professional growth
            </p>
          </div>

          <div className="space-y-12">
            {modules.map((module, index) => (
              <div 
                key={module.id}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${module.color} text-white mb-6`}>
                    {module.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-brand-dark mb-3">
                    Module {index + 1}: {module.title}
                  </h3>
                  <p className="text-brand-blue font-semibold text-lg mb-4 italic">
                    "{module.subtitle}"
                  </p>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-montserrat font-semibold text-brand-dark mb-3">Key Features:</h4>
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand-cyan mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className={`bg-gradient-to-br ${module.color} p-8 rounded-2xl text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <div className="text-6xl opacity-20 mb-4">{module.icon}</div>
                      <h4 className="text-xl font-montserrat font-bold mb-4">Experience {module.title}</h4>
                      <p className="opacity-90 mb-6">
                        See how this module transforms your career journey with intelligent, personalized guidance.
                      </p>
                      <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-medium">
                        Try Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Ready to Begin Your AI-Powered Career Transformation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of professionals who have accelerated their careers with our comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {ctaButtons.map((button, index) => (
              <Button
                key={button.text}
                className={`w-full py-4 px-6 font-montserrat font-medium transition-all duration-300 hover-scale ${
                  button.primary
                    ? 'bg-brand-blue hover:bg-brand-cyan text-white'
                    : 'border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
                }`}
                variant={button.primary ? 'default' : 'outline'}
              >
                {button.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              ✨ From personalized growth blueprints to domain-specific agentic tools, Gurukul Code is where tradition meets transformation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerDevelopment;
