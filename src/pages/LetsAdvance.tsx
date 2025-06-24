
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Rocket, Users, Lightbulb, Target, ArrowRight, CheckCircle } from 'lucide-react';

const LetsAdvance = () => {
  const programs = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Innovation Labs",
      description: "Hands-on experience with cutting-edge technologies and methodologies"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Projects",
      description: "Work with diverse teams on real-world challenges and solutions"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Idea Incubation",
      description: "Transform your innovative ideas into viable business solutions"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal Achievement",
      description: "Structured approach to reaching your personal and professional milestones"
    }
  ];

  const outcomes = [
    "Accelerate your professional growth with advanced skill development",
    "Build a network of like-minded innovators and industry leaders",
    "Gain hands-on experience with emerging technologies",
    "Develop leadership skills through collaborative projects",
    "Access exclusive opportunities and resources for advancement"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(86,199,223,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(245,126,32,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in">
              Let's <span className="gradient-text">Advance Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Collaborative platform for innovation, growth, and breakthrough achievements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="bg-gradient-to-r from-brand-cyan to-brand-orange text-white px-8 py-3 font-montserrat font-medium hover-scale">
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white px-8 py-3 font-montserrat font-medium">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Advancement Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover programs designed to accelerate your growth and unlock your potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div 
                key={program.title}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-brand-blue to-brand-orange text-white mb-6">
                  {program.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-dark mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-8">
                  What You'll Achieve
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
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-montserrat font-bold text-brand-dark mb-6">
                  Ready to Advance Your Journey?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join a community of forward-thinkers and innovators committed to making breakthrough achievements.
                </p>
                <Button className="bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-montserrat font-medium px-6 py-3 hover-scale w-full">
                  Start Your Advancement
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

export default LetsAdvance;
