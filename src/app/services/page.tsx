'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Landmark, Zap, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Real Estate AI OS',
      description: 'Automate property management, tenant operations, and lease workflows with AI-powered intelligence.',
      features: ['Lead Qualification', 'Tour Scheduling', 'Lease Automation', 'Maintenance Triage'],
      color: 'from-gold to-yellow-600'
    },
    {
      icon: Landmark,
      title: 'Banking & Finance AI OS',
      description: 'Compliance-first AI solutions for financial operations with full audit logging and security.',
      features: ['Policy Explanation', 'Fraud Detection', 'Compliance Documentation', 'Internal Reporting'],
      color: 'from-blue to-cyan-500'
    },
    {
      icon: Zap,
      title: 'AI Audit Services',
      description: 'Comprehensive operational analysis to identify AI automation opportunities in your business.',
      features: ['Operational Analysis', 'ROI Projections', 'Implementation Roadmap', 'Tier Recommendations'],
      color: 'from-gold to-blue'
    },
    {
      icon: Shield,
      title: 'Enterprise Solutions',
      description: 'Custom AI solutions tailored to your specific business needs with dedicated support.',
      features: ['Custom AI Training', 'White-label Options', '24/7 Support', 'SLA Guarantees'],
      color: 'from-purple-500 to-blue'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-24">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />

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
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto"
          >
            Enterprise-grade AI solutions designed to transform your business operations
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Card className="h-full group hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300">
                <CardHeader>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-black" />
                  </div>
                  <CardTitle className="text-3xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx + 0.1 * i }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-blue group-hover:text-black transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Contact our team to discuss how MADWESS can transform your business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="text-lg px-8">
                Schedule a Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
