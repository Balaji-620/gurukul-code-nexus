
import React from 'react';
import { GraduationCap, TrendingUp, Megaphone, Building2, ArrowRight, Brain, Users, Zap } from 'lucide-react';

const PlatformOverview = () => {
  const platforms = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Career Development Platform",
      subtitle: "Your All-in-One AI Career Operating System",
      description: "7 integrated modules from self-discovery to portfolio validation, powered by AI mentorship and skill acceleration.",
      features: ["AI Career Assistant", "Skill Accelerator", "Job-Ready Toolkit", "Portfolio Builder"],
      color: "from-blue-500 to-cyan-400",
      delay: "delay-0"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "FinCode",
      subtitle: "Finance Intelligence Vertical",
      description: "AI-powered finance learning, research, and execution tools for students, professionals, and institutions.",
      features: ["AlphaSage AI Research", "FinModel Factory", "CFO-as-a-Service", "Robo-Advisory"],
      color: "from-emerald-500 to-teal-400",
      delay: "delay-200"
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Let's Advance",
      subtitle: "Content & Culture Arm",
      description: "Career truth, real voices, and raw insights. Bridging knowledge and wisdom through authentic storytelling.",
      features: ["Career Confessions", "Knowledge Hub", "AI News Feed", "Community Stories"],
      color: "from-purple-500 to-pink-400",
      delay: "delay-400"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Enterprise Platform",
      subtitle: "Scale AI-Driven Transformation",
      description: "White-labeled solutions for universities and organizations to implement AI-powered talent development.",
      features: ["Campus Solutions", "L&D Integration", "Internal Mobility", "Custom Reporting"],
      color: "from-orange-500 to-red-400",
      delay: "delay-600"
    }
  ];

  return (
    <section id="platform" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Multi-Vertical AI Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four integrated platforms designed to transform how individuals grow and organizations nurture talent
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div 
              key={platform.title}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale animate-fade-in ${platform.delay} border border-gray-100`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${platform.color} text-white`}>
                  {platform.icon}
                </div>
                <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-2">
                  {platform.title}
                </h3>
                <p className="text-brand-blue font-medium mb-4">
                  {platform.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {platform.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {platform.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${platform.color} mr-3`}></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`h-1 bg-gradient-to-r ${platform.color} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center">
          <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-8">
            In the Pipeline
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border-2 border-dashed border-gray-300 hover:border-brand-cyan transition-colors">
              <Brain className="h-8 w-8 text-brand-blue mx-auto mb-4" />
              <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Marketing Intelligence</h4>
              <p className="text-gray-600 text-sm">AI agents for content, campaigns, and growth optimization</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-dashed border-gray-300 hover:border-brand-orange transition-colors">
              <Zap className="h-8 w-8 text-brand-orange mx-auto mb-4" />
              <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Design Intelligence</h4>
              <p className="text-gray-600 text-sm">UX teardowns, portfolio builders, and design mentorship</p>
            </div>
          </div>
          <button className="mt-8 bg-gradient-to-r from-brand-cyan to-brand-blue text-white px-8 py-3 rounded-full font-montserrat font-medium hover-scale">
            Join Early Access Beta List
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
