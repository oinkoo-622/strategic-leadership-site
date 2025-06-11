'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedChallenge, setSelectedChallenge] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleIndustrySelect = (industry:string) => {
    setSelectedIndustry(industry);
    if (selectedChallenge) {
      setShowResult(true);
    }
  };

  const handleChallengeSelect = (challenge:string) => {
    setSelectedChallenge(challenge);
    if (selectedIndustry) {
      setShowResult(true);
    }
  };

  const getPersonalizedResult = () => {
    const results = {
      'technology-growth': 'Our proven technology growth strategies have helped clients achieve 40%+ revenue increases through strategic market expansion and product innovation.',
      'technology-digital': 'We specialize in technology digital transformations, having led $2B+ in technology modernization initiatives with 60% faster implementation timelines.',
      'healthcare-operations': 'Our healthcare operational excellence programs have delivered 25% efficiency improvements while maintaining the highest quality standards.',
      'financial-market': 'We have successfully guided financial services firms into 15+ new markets, achieving market leadership positions within 24 months.',
      'default': `Perfect! With our deep expertise in ${selectedIndustry} and proven methodologies for ${selectedChallenge} initiatives, we can help you achieve breakthrough results.`
    };
    
    const key = `${selectedIndustry}-${selectedChallenge}`;
    return results[key] || results['default'];
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 100) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav id="navbar" className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-800">Strategic Leadership</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">Home</a>
              <a href="#expertise" className="text-gray-700 hover:text-blue-800 transition-colors">Expertise</a>
              <a href="#impact" className="text-gray-700 hover:text-blue-800 transition-colors">Impact</a>
              <a href="#insights" className="text-gray-700 hover:text-blue-800 transition-colors">Insights</a>
              <a href="#journey" className="text-gray-700 hover:text-blue-800 transition-colors">Journey</a>
              <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'}}>
        <div className="max-w-4xl mx-auto text-center text-white py-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Big challenges. Bold solutions. Real impact.
          </h1>
          <p className="text-2xl mb-6 opacity-90">
            Bold thinking. Proven impact. Your next breakthrough starts here.
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
            Transform complex challenges into breakthrough results through strategic thinking, proven methodologies, and deep industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#impact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1">
              Explore My Work
            </a>
            <a href="#contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-4 px-8 rounded-lg transition-colors">
              Let's Connect
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Expertise Finder */}
      <section id="expertise" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Find Your Solution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tell us about your challenge, and we'll show you how our expertise can drive breakthrough results.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            {/* Industry Selection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">What's your industry?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Technology', 'Healthcare', 'Financial Services', 'Retail & Consumer', 'Manufacturing', 'Energy & Utilities'].map((industry) => (
                  <button
                    key={industry}
                    onClick={() => handleIndustrySelect(industry.toLowerCase().replace(/[^a-z]/g, ''))}
                    className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                      selectedIndustry === industry.toLowerCase().replace(/[^a-z]/g, '')
                        ? 'border-blue-500 bg-blue-50 text-blue-800'
                        : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-800'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            {/* Challenge Selection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">What's your challenge?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Growth Strategy', 'Digital Transformation', 'Operational Excellence', 'Market Entry', 'Leadership Development', 'Innovation Strategy'].map((challenge) => (
                  <button
                    key={challenge}
                    onClick={() => handleChallengeSelect(challenge.toLowerCase().replace(/[^a-z]/g, ''))}
                    className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                      selectedChallenge === challenge.toLowerCase().replace(/[^a-z]/g, '')
                        ? 'border-blue-500 bg-blue-50 text-blue-800'
                        : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-800'
                    }`}
                  >
                    {challenge}
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            {showResult && (
              <div className="bg-blue-800 text-white p-6 rounded-lg animate-fade-in">
                <h3 className="text-xl font-bold mb-3">Perfect Match!</h3>
                <p className="mb-4">{getPersonalizedResult()}</p>
                <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block">
                  Discuss Your Challenge
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Showcase */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Proven Impact</h2>
            <p className="text-lg text-gray-600">Measurable results that speak for themselves</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '$2.5B+', label: 'Value Created' },
              { number: '150+', label: 'Projects Delivered' },
              { number: '40+', label: 'Industries Served' },
              { number: '95%', label: 'Client Satisfaction' }
            ].map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl text-center transform hover:-translate-y-2 transition-transform">
                <div className="text-4xl font-bold mb-2">{metric.number}</div>
                <div className="text-blue-100">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Technology Transformation',
                challenge: 'Fortune 500 technology company struggling with declining market share and operational inefficiencies across 15 countries.',
                outcome: 'Delivered 40% cost reduction, 60% faster time-to-market, and $500M revenue growth within 18 months.'
              },
              {
                title: 'Healthcare Innovation Strategy',
                challenge: 'Regional healthcare network facing regulatory pressures and need for digital patient experience improvements.',
                outcome: 'Implemented AI-driven care coordination resulting in 25% improved patient outcomes and $200M cost savings.'
              },
              {
                title: 'Financial Services Market Entry',
                challenge: 'International bank seeking to enter competitive emerging markets with limited local expertise.',
                outcome: 'Successfully launched in 5 new markets, capturing 15% market share and generating $300M ARR within 2 years.'
              }
            ].map((study, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform">
                <h3 className="text-xl font-bold text-blue-800 mb-4">{study.title}</h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Challenge:</p>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Outcome:</p>
                  <p className="text-gray-600">{study.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section id="insights" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Latest Insights</h2>
            <p className="text-lg text-gray-600">Strategic perspectives on industry trends and breakthrough innovations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'AI',
                meta: 'Research Report • March 2025',
                title: 'The AI Strategy Imperative: Beyond Automation',
                description: 'How leading organizations are leveraging artificial intelligence not just for efficiency, but for strategic competitive advantage.'
              },
              {
                icon: 'SC',
                meta: 'Speaking Engagement • February 2025',
                title: 'Resilient Supply Chains in an Uncertain World',
                description: 'Keynote presentation at Global Supply Chain Summit on building adaptive, sustainable supply networks.'
              },
              {
                icon: 'DL',
                meta: 'White Paper • January 2025',
                title: 'Digital Leadership: The New Executive Playbook',
                description: 'Essential frameworks for executives navigating digital transformation and leading high-performance teams.'
              }
            ].map((insight, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-blue-800 font-bold">{insight.icon}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{insight.meta}</p>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{insight.title}</h3>
                  <p className="text-gray-600">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section id="journey" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Professional Journey</h2>
            <p className="text-lg text-gray-600">Two decades of strategic leadership and transformational impact</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 bg-blue-300 h-full"></div>

            {[
              {
                year: '2020 - Present',
                title: 'Independent Strategic Advisor',
                description: 'Providing strategic counsel to Fortune 500 CEOs and boards on transformation, innovation, and growth strategies across multiple industries.'
              },
              {
                year: '2015 - 2020',
                title: 'Partner, Global Strategy Consulting',
                description: 'Led the Technology Practice, delivering $2B+ in client value through digital transformation and operational excellence initiatives.'
              },
              {
                year: '2010 - 2015',
                title: 'VP Strategy, Fortune 100 Technology',
                description: 'Drove strategic planning and M&A activities, including $5B+ in acquisitions that expanded market presence across emerging technologies.'
              },
              {
                year: '2005 - 2010',
                title: 'Principal, Management Consulting',
                description: 'Specialized in operational transformation and change management, leading cross-functional teams to deliver breakthrough results.'
              }
            ].map((item, index) => (
              <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.year}</h3>
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-800 rounded-full"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">How We Work Together</h2>
            <p className="text-lg text-gray-600">Collaborative approaches tailored to your unique challenges and objectives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Strategic Consulting', description: 'Comprehensive strategy development, market analysis, and implementation roadmaps for sustainable competitive advantage.' },
              { icon: '🤝', title: 'Executive Advisory', description: 'Board advisory and C-suite counsel on critical business decisions, transformation initiatives, and stakeholder alignment.' },
              { icon: '🎤', title: 'Speaking & Workshops', description: 'Thought leadership presentations, executive workshops, and strategic planning facilitation for teams and conferences.' },
              { icon: '💡', title: 'Innovation Strategy', description: 'Innovation frameworks, technology roadmaps, and organizational capability development for digital-first growth.' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center shadow-lg hover:-translate-y-2 transition-transform">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Create Breakthrough Results</h2>
              <p className="text-lg mb-8 opacity-90">
                Ready to transform your biggest challenges into competitive advantages? Let's discuss how strategic thinking and proven methodologies can drive extraordinary outcomes for your organization.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Direct Access</h3>
                <p className="mb-2">📧 strategy@yourname.com</p>
                <p className="mb-2">📱 +1 (555) 123-4567</p>
                <p className="mb-6">📍 New York • London • Singapore</p>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-amber-400 transition-colors">📱</a>
                <a href="#" className="text-2xl hover:text-amber-400 transition-colors">💼</a>
                <a href="#" className="text-2xl hover:text-amber-400 transition-colors">🐦</a>
                <a href="#" className="text-2xl hover:text-amber-400 transition-colors">📺</a>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Type of Inquiry</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                    <option value="">Select inquiry type</option>
                    <option value="strategic">Strategic Consulting</option>
                    <option value="advisory">Executive Advisory</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="media">Media Interview</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" required />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" required />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Company</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:border-blue-500 focus:outline-none" placeholder="Tell us about your challenge and how we can help..." required></textarea>
                </div>

                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Strategic Leadership</h3>
              <p className="text-gray-300">Transforming complex challenges into breakthrough results through strategic thinking and proven impact.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <p><a href="#expertise" className="text-gray-300 hover:text-white transition-colors">Expertise Finder</a></p>
                <p><a href="#impact" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></p>
                <p><a href="#insights" className="text-gray-300 hover:text-white transition-colors">Latest Insights</a></p>
                <p><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Resources</h3>
              <div className="space-y-2 text-gray-300">
                <p>Strategic Frameworks</p>
                <p>Industry Reports</p>
                <p>Executive Insights</p>
                <p>Speaking Topics</p>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-700 text-gray-400">
            <p>&copy; 2025 Strategic Leadership. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .scrolled {
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
