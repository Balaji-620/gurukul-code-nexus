
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Target, Award, ArrowRight, CheckCircle } from 'lucide-react';

const CareerDevelopment = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Personalized Learning Paths",
      description: "AI-curated courses tailored to your career goals and skill gaps"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Industry Mentorship",
      description: "Connect with experienced professionals in your field"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Skill Assessment",
      description: "Regular evaluations to track your progress and identify areas for improvement"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certification Programs",
      description: "Industry-recognized certifications to boost your career prospects"
    }
  ];

  const benefits = [
    "Accelerate your career growth with AI-powered insights",
    "Access to exclusive job opportunities through our network",
    "Continuous skill development aligned with market demands",
    "Personal branding and portfolio development support",
    "Interview preparation and salary negotiation guidance"
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
              Accelerate Your <span className="gradient-text">Career Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              AI-powered career development platform that adapts to your goals and industry trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-cyan text-white px-8 py-3 font-montserrat font-medium hover-scale">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white px-8 py-3 font-montserrat font-medium">
                View Success Stories
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
              Transform Your Career with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines artificial intelligence with human expertise to create personalized career development experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-blue text-white mb-6">
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
                Why Choose Our Career Development Platform?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="h-6 w-6 text-brand-cyan flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-blue to-brand-cyan p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-montserrat font-bold mb-6">Ready to Transform Your Career?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Join thousands of professionals who have accelerated their careers with our AI-powered platform.
                </p>
                <Button className="bg-white text-brand-blue hover:bg-gray-100 font-montserrat font-medium px-6 py-3 hover-scale">
                  Get Started Today
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
