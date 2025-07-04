
import React from 'react';
import { ArrowRight, Users, BookOpen, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlatformOverview = () => {
  const platforms = [
    {
      title: "Career Development",
      subtitle: "AI-Powered Career Operating System",
      description: "Transform your career with personalized AI guidance, skill assessments, and intelligent mentorship matching.",
      icon: <Users className="h-8 w-8" />,
      href: "/career-development",
      features: ["Self-Discovery Engine", "AI Career Assistant", "Skill Accelerator", "Job-Ready Toolkit"]
    },
    {
      title: "FinCode",
      subtitle: "Financial Intelligence Platform",
      description: "Master financial concepts and coding skills with AI-driven learning paths tailored for finance professionals.",
      icon: <BookOpen className="h-8 w-8" />,
      href: "/fincode",
      features: ["Financial Modeling", "Risk Analytics", "Trading Algorithms", "RegTech Solutions"]
    },
    {
      title: "Let's Advance",
      subtitle: "Professional Growth Network",
      description: "Connect, collaborate, and advance your career through our intelligent professional networking ecosystem.",
      icon: <Briefcase className="h-8 w-8" />,
      href: "/lets-advance",
      features: ["Smart Networking", "Career Opportunities", "Skill Validation", "Industry Insights"]
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-brand-dark mb-6">
            Comprehensive AI-Driven Career Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Three interconnected platforms designed to accelerate your professional journey through intelligent, personalized experiences
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full text-brand-dark font-medium">
            🚀 Purpose-driven growth powered by ethical AI
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div 
              key={platform.title}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex p-4 rounded-xl bg-brand-blue text-white mb-6 group-hover:bg-brand-cyan transition-colors">
                {platform.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-montserrat font-bold text-brand-dark mb-2">
                {platform.title}
              </h3>
              <p className="text-brand-blue font-medium mb-4">
                {platform.subtitle}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {platform.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-8">
                {platform.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a 
                href={platform.href}
                className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-cyan transition-colors group"
              >
                Explore Platform
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-brand-dark mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your AI-powered journey today and discover personalized pathways to professional success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-blue hover:bg-brand-cyan text-white font-montserrat font-medium px-8 py-3 hover-scale">
              Begin Your Assessment
            </Button>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-montserrat font-medium px-8 py-3">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
