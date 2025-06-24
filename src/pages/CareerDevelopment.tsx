import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Target, Briefcase, ArrowRight, CheckCircle, Star, Award, Zap } from 'lucide-react';

const CareerDevelopment = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Self-Discovery Engine",
      description: "AI-powered personality, strengths, and interest assessments to understand your unique profile"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Smart Career Matching",
      description: "Intelligent algorithms match your profile with optimal career paths and opportunities"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Skill Development Pathways",
      description: "Personalized learning journeys with industry-relevant courses and certifications"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Job-Ready Toolkit",
      description: "Resume optimization, interview preparation, and professional networking guidance"
    }
  ];

  const outcomes = [
    "Discover your unique strengths and ideal career direction",
    "Access personalized learning paths tailored to your goals",
    "Build job-ready skills with industry-recognized certifications",
    "Connect with mentors and professionals in your field",
    "Track your progress with intelligent analytics and insights"
  ];

  const tools = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "AI Career Coach",
      description: "24/7 personalized guidance powered by advanced AI"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Skill Assessments",
      description: "Comprehensive evaluations of your current abilities"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Wins",
      description: "Immediate actions to boost your career prospects"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(245,126,32,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(86,199,223,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in">
              Your <span className="gradient-text">AI-Powered Career</span> Operating System
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Transform your career journey with personalized AI guidance, intelligent skill mapping, and expert mentorship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 font-montserrat font-medium hover-scale">
                Discover Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 font-montserrat font-medium">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              AI-Driven Career Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines cutting-edge AI with human expertise to accelerate your professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-brand-orange to-brand-blue text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-brand-orange/5 to-brand-cyan/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Intelligent Career Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access a suite of AI-powered tools designed to accelerate your career growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <div 
                key={tool.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-brand-orange to-brand-cyan text-white mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-dark mb-3">
                  {tool.title}
                </h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-8">
                  Transform Your Career Journey
                </h2>
                <div className="space-y-6">
                  {outcomes.map((outcome, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-orange/10 to-brand-cyan/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-montserrat font-bold text-brand-dark mb-6">
                  Ready to Accelerate Your Career?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of professionals who've transformed their careers with our AI-powered platform.
                </p>
                <Button className="bg-gradient-to-r from-brand-orange to-brand-cyan text-white font-montserrat font-medium px-6 py-3 hover-scale w-full">
                  Start Your Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerDevelopment;
