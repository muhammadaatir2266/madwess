'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Globe, Users, Zap, DollarSign, TrendingUp } from 'lucide-react';

export default function OurStory() {
  const sections = [
    {
      icon: Heart,
      title: 'The Burden of the Hustle',
      content: `Madwess, LLC was born not out of simple market research, but out of a deep, personal necessity. Our founder, a mother, a wife, and an entrepreneur, faced the overwhelming reality that plagues so many in the online space: the relentless pressure of consistent social media presence, the financial drain of ineffective marketing, and the constant battle to find personal identity while building a business.

After navigating and ultimately pausing efforts in industries from e-commerce to beauty, it became clear that the current model of online entrepreneurship was broken—it demanded too much physical time and emotional energy. We realized the world needed a different solution: a system that allows passion to drive profit, not exhaustion.`
    },
    {
      icon: Target,
      title: 'Our Vision: Automation and Abundance',
      content: `Madwess is a digital platform created to make life easier for entrepreneurs, creators, influencers, and anyone seeking sustainable online income. Our central goal is simple: financial abundance through intelligent automation and reduced physical effort.

We believe that your income streams should be low-maintenance based on your unique background, your passions, and what you genuinely love to do. By harnessing the power of artificial intelligence (AI), Madwess provides the immersion necessary to make money effortlessly. We are building the toolkit to avoid social media burnout, offering solutions like:`,
      features: [
        { icon: Zap, title: 'Frictionless Content Creation', description: 'Generating high-quality, engaging content without requiring your constant personal presence.' },
        { icon: DollarSign, title: 'Custom Income Streams', description: 'Integrating flexible marketplace, boutique affiliate programs, and tailored revenue streams.' },
        { icon: TrendingUp, title: 'Financial Freedom', description: 'Giving you the space of living that a baseline income, a steady income to you. Helping you to live your life.' }
      ]
    },
    {
      icon: Globe,
      title: 'Global Inclusion: Removing the Barriers',
      content: `The need for economic inclusion is woven into the fabric of our mission. We recognized that in many developing countries, particularly across Africa, Asia, and Latin America, entrepreneurs often face unnecessary barriers and lack the "head-codes" needed to tap into the global online market.

At Madwess, we are committed to dismantling those barriers. We are creating a platform where there is no difference or disadvantage based on geography. Anyone, from any corner of the world, can create an account and build a substantial income, regardless of their location.`
    },
    {
      icon: Users,
      title: 'The Ultimate Angle: Community and Ownership',
      content: `Our long-term vision extends beyond online revenue. We aim to create a community where financial freedom translates into real-world stability. Our housing program is an initiative where high-performing members own—one that high-level of being that offers personal homeownership.

While we currently focus on empowering African countries in this endeavor, we also offer dedicated support for our American members through credit building and business lending guidance, helping them leverage their business credit to achieve personal financial goals.`
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />

      <Header />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Our <span className="text-gradient">Story</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              A New Blueprint for Entrepreneurship
            </motion.p>
          </div>

          {/* Story Sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx + 0.3, duration: 0.5 }}
              >
                <Card className="border-gray-800/50 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold via-yellow-500 to-blue flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-black" />
                      </div>
                      <CardTitle className="text-2xl flex-1">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                    
                    {section.features && (
                      <div className="space-y-4 mt-6">
                        {section.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-blue flex items-center justify-center flex-shrink-0 mt-1">
                              <feature.icon className="w-5 h-5 text-black" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                              <p className="text-gray-400 text-sm">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <Card className="border-gray-800/50 text-center bg-gradient-to-br from-gold/5 to-blue/5">
              <CardHeader>
                <CardTitle className="text-3xl">
                  Welcome to <span className="text-gradient">Madwess</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                  We are here to change your life by giving you the tools for high-income and the peace of mind to enjoy it.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
