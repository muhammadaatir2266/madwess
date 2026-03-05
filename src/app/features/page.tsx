'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Shield, Zap, Globe, BarChart3, Lock, Plug } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Multi-Tenant Architecture',
      description: 'Secure, isolated environments for each organization with row-level security.',
      benefits: ['Data isolation', 'Tenant-specific configurations', 'Scalable infrastructure']
    },
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Intelligent workflows that learn and adapt to your business processes.',
      benefits: ['Automated task routing', 'Smart decision making', 'Continuous learning']
    },
    {
      icon: Lock,
      title: 'Compliance & Security',
      description: 'Enterprise-grade security with full audit logging and compliance tracking.',
      benefits: ['AES-256 encryption', 'Immutable audit logs', 'GDPR compliant']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboards and insights into your operations.',
      benefits: ['Performance metrics', 'Usage analytics', 'Custom reports']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Communicate with your customers in their preferred language.',
      benefits: ['English & Spanish', 'Auto-detection', 'Cultural adaptation']
    },
    {
      icon: Plug,
      title: 'Integration Ready',
      description: 'Connect with your existing tools and workflows seamlessly.',
      benefits: ['REST API', 'Webhooks', 'Custom integrations']
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-24">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />

      <Header />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-bold text-gradient mb-6"
          >
            Platform Features
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto"
          >
            Everything you need to transform your business operations with AI
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full group hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold to-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx + 0.1 * i }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
