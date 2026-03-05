'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Landmark, ArrowRight, CheckCircle2, Shield, Zap, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Products() {
  const router = useRouter();

  const reFeatures = [
    { icon: Users, text: 'Automated lead qualification and scoring' },
    { icon: Zap, text: 'Smart tour scheduling with reminders' },
    { icon: CheckCircle2, text: 'Lease renewal automation' },
    { icon: Shield, text: 'Maintenance ticket triage' },
    { icon: CheckCircle2, text: 'Multi-language tenant communication' },
    { icon: Shield, text: 'Fair Housing compliance built-in' },
  ];

  const bankingFeatures = [
    { icon: Shield, text: 'Policy explanation and guidance' },
    { icon: Zap, text: 'Fraud workflow intake and routing' },
    { icon: CheckCircle2, text: 'Automated compliance documentation' },
    { icon: Shield, text: 'PII redaction and data protection' },
    { icon: CheckCircle2, text: 'Full audit trail logging' },
    { icon: Shield, text: 'Regulatory compliance built-in' },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />

      <Header />

      <div className="relative z-10 container mx-auto px-4 py-16 pt-32">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-gradient mb-6">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-specific AI operating systems built for enterprise scale and compliance
          </p>
        </motion.div>

        {/* Real Estate OS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="glass glass-border rounded-3xl overflow-hidden hover:glow-gold transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-gold" />
                  </div>
                  <Badge variant="gold" className="text-sm px-4 py-1">Available Now</Badge>
                </div>
                <h2 className="text-4xl font-bold text-gradient mb-4">Real Estate AI OS</h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Complete automation platform for property management and real estate operations. Streamline workflows, reduce manual tasks, and scale your operations effortlessly.
                </p>
                <Button 
                  size="lg" 
                  onClick={() => router.push('/pricing')}
                  className="group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-6">Key Features</h3>
                {reFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <feature.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Banking OS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="glass glass-border rounded-3xl overflow-hidden hover:glow-blue transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="order-2 lg:order-1 space-y-4">
                <h3 className="text-xl font-semibold text-white mb-6">Key Features</h3>
                {bankingFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <feature.icon className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue/20 to-blue/5 flex items-center justify-center">
                    <Landmark className="w-10 h-10 text-blue" />
                  </div>
                  <Badge variant="blue" className="text-sm px-4 py-1">Phase 3</Badge>
                </div>
                <h2 className="text-4xl font-bold text-gradient mb-4">Banking & Finance AI OS</h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Compliance-first AI platform for financial institutions. Built with security, audit logging, and regulatory compliance at its core.
                </p>
                <Button 
                  size="lg" 
                  variant="glass"
                  disabled
                >
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass glass-border rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-gradient mb-4">Ready to Transform Your Operations?</h3>
          <p className="text-gray-400 mb-8 text-lg">
            Start with our $300 AI Audit to discover which solution is right for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => router.push('/audit')}>
              Get AI Audit
            </Button>
            <Button size="lg" variant="glass" onClick={() => router.push('/pricing')}>
              View Pricing
            </Button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
