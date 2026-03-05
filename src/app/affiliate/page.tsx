'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Users, TrendingUp, Award, Target, Zap, Gift, BarChart } from 'lucide-react';

export default function Affiliate() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Generous Commissions',
      description: 'Earn up to 30% recurring commission on all referrals',
      color: 'from-gold to-yellow-600'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Get help from our affiliate success team',
      color: 'from-blue to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Materials',
      description: 'Access to banners, landing pages, and content',
      color: 'from-purple-500 to-blue'
    },
    {
      icon: Award,
      title: 'Performance Bonuses',
      description: 'Extra rewards for top-performing affiliates',
      color: 'from-gold to-blue'
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'Easy Tracking',
      description: 'Real-time dashboard to monitor your referrals and earnings'
    },
    {
      icon: Zap,
      title: 'Quick Payouts',
      description: 'Monthly payments via PayPal, bank transfer, or wire'
    },
    {
      icon: Gift,
      title: 'Exclusive Offers',
      description: 'Special promotions and discounts for your audience'
    },
    {
      icon: BarChart,
      title: 'Growth Tools',
      description: 'Analytics and insights to optimize your campaigns'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-24">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />

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
            Affiliate Program
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto"
          >
            Partner with MADWESS and earn recurring commissions by promoting our AI solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl mb-4">Earn Up To 30% Commission</CardTitle>
              <CardDescription className="text-lg">
                Join hundreds of partners earning recurring income by recommending MADWESS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20">
                  <div className="text-4xl font-bold text-gradient mb-2">30%</div>
                  <p className="text-gray-400">Commission Rate</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue/10 to-transparent border border-blue/20">
                  <div className="text-4xl font-bold text-gradient mb-2">∞</div>
                  <p className="text-gray-400">Recurring Payments</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20">
                  <div className="text-4xl font-bold text-gradient mb-2">24h</div>
                  <p className="text-gray-400">Cookie Duration</p>
                </div>
              </div>
              <Button size="lg" className="text-lg px-12 h-14">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 0.4, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full group hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 text-center">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-black" />
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-gradient mb-12">Why Join Our Program?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx + 0.9 }}
              >
                <Card className="group hover:shadow-xl hover:shadow-blue/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                        <CardDescription className="text-base">{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="max-w-3xl mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">Ready to Get Started?</CardTitle>
              <CardDescription className="text-center text-base">
                Join our affiliate program today and start earning recurring income
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Our affiliate program is perfect for content creators, consultants, agencies, and businesses who want to earn recurring income by recommending MADWESS to their audience.
                </p>
                <p className="leading-relaxed">
                  Whether you have a blog, YouTube channel, social media following, or professional network, you can monetize your influence by sharing MADWESS with your community.
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
