
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Shield, Brain, ArrowRight, CheckCircle } from 'lucide-react';

const FinCode = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Market Analysis",
      description: "AI-powered insights into market trends and investment opportunities"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Portfolio Optimization",
      description: "Smart algorithms to maximize returns while minimizing risk"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Financial Education",
      description: "Learn complex financial concepts through interactive AI tutoring"
    }
  ];

  const stats = [
    { number: "95%", label: "Prediction Accuracy" },
    { number: "2.3x", label: "Average ROI Improvement" },
    { number: "24/7", label: "Market Monitoring" },
    { number: "50+", label: "Financial Instruments" }
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
              Master <span className="gradient-text">Financial Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              AI-driven financial platform that transforms how you understand and manage money
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="bg-gradient-to-r from-brand-orange to-brand-cyan text-white px-8 py-3 font-montserrat font-medium hover-scale">
                Start Trading Smarter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 font-montserrat font-medium">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-montserrat font-bold text-brand-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Revolutionary Financial Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI to make informed financial decisions and maximize your wealth potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              Ready to Revolutionize Your Financial Future?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of investors who trust FinCode for smarter financial decisions
            </p>
            <Button className="bg-white text-brand-blue hover:bg-gray-100 font-montserrat font-medium px-8 py-3 hover-scale">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinCode;
