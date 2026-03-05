'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Pricing() {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const tiers = [
    {
      name: 'SENTRY',
      description: 'Perfect for getting started',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        '100MB memory usage',
        '10 automations/month',
        '50 documents/month',
        'Real Estate OS access',
        'Email support',
        'Basic analytics',
      ],
      popular: false,
    },
    {
      name: 'ENGINE',
      description: 'For growing businesses',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        '500MB memory usage',
        '50 automations/month',
        '200 documents/month',
        'Real Estate OS access',
        'Advanced workflows',
        'Priority support',
        'Advanced analytics',
      ],
      popular: true,
    },
    {
      name: 'MATRIX',
      description: 'Scale your operations',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      features: [
        '2GB memory usage',
        '200 automations/month',
        '1000 documents/month',
        'Real Estate + Banking OS',
        'Advanced workflows',
        'Dedicated support',
        'Custom integrations',
        'API access',
      ],
      popular: false,
    },
    {
      name: 'MAÏ',
      description: 'Enterprise unlimited',
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      features: [
        '10GB memory usage',
        'Unlimited automations',
        'Unlimited documents',
        'All OS access',
        'White-label options',
        '24/7 dedicated support',
        'Custom AI training',
        'SLA guarantee',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />

      {/* Header */}
      <Header />

      <div className="relative z-10 container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gradient mb-4">
            Choose Your Plan
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Scale as you grow. All plans include core features.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 glass glass-border rounded-full p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'btn-gradient text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'yearly'
                  ? 'btn-gradient text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <Badge variant="gold" className="ml-2">Save 17%</Badge>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge variant="gold" className="shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              <Card className={`h-full ${tier.popular ? 'ring-2 ring-gold' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gradient">
                      ${billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.popular ? 'default' : 'glass'}
                    className="w-full"
                    onClick={() => router.push('/signup')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">Not sure which plan?</CardTitle>
              <CardDescription>
                Start with our $300 AI Audit to get personalized recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" onClick={() => router.push('/audit')}>
                Get AI Audit
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
