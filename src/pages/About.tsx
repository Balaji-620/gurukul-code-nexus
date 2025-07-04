
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Sparkles, Users, Target, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Purpose-Driven Growth",
      description: "We believe career development should align with personal values and contribute to meaningful impact in the world."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ethical AI",
      description: "Our AI systems are built with transparency, fairness, and human agency at their core."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community-Centered",
      description: "Learning and growth happen best in supportive communities where knowledge and experiences are shared."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Continuous Innovation",
      description: "We stay at the forefront of AI and educational technology to provide the most effective learning experiences."
    }
  ];

  const stats = [
    { number: "50K+", label: "Learners Empowered" },
    { number: "500+", label: "Partner Organizations" },
    { number: "95%", label: "Career Advancement Rate" },
    { number: "24/7", label: "AI Assistant Availability" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former Head of AI at Microsoft, PhD in Computer Science from Stanford"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      bio: "Ex-Google Senior Engineer, specializing in large-scale AI systems"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Learning Sciences",
      bio: "Educational psychologist with 15+ years in adaptive learning systems"
    }
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
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in">
              Reimagining <span className="gradient-text">Work, Learning & Purpose</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              We're building the future of AI-powered career intelligence to help every individual thrive in the evolving world of work
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="bg-brand-blue hover:bg-brand-cyan text-white px-8 py-3 font-montserrat font-medium hover-scale">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Gurukul Code exists to democratize access to intelligent career guidance and domain expertise. We believe that every learner, professional, and institution deserves context-aware, adaptable, and continuously intelligent systems to grow meaningfully, ethically, and sustainably.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our platform combines the wisdom of traditional mentorship (the "Gurukul" model) with cutting-edge AI technology to create personalized learning experiences that adapt to each individual's unique journey.
                </p>
                <div className="space-y-4">
                  {['Personalized career intelligence', 'Ethical AI-powered guidance', 'Community-driven learning', 'Sustainable professional growth'].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-brand-cyan mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl md:text-3xl font-montserrat font-bold text-brand-blue mb-2">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to community building
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-blue text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries building the future of AI-powered career intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="text-center bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white font-montserrat font-bold text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-blue font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-cyan">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              Ready to Shape the Future of Work?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join us in creating an AI-powered ecosystem where everyone can thrive, grow, and make meaningful impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-blue hover:bg-gray-100 font-montserrat font-medium px-8 py-3 hover-scale">
                Start Your Journey
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-montserrat font-medium px-8 py-3">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
