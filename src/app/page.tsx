'use client';

import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Landmark, CheckCircle2, ArrowRight, Zap, TrendingUp, Users, DollarSign, Sparkles, Shield, Globe, Clock, Star, ChevronDown, ChevronLeft, ChevronRight, MapPin, Mail, Phone } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const powerfulFeatures = [
    {
      icon: Sparkles,
      title: 'AI-Powered Intelligence',
      description: 'Leverage cutting-edge artificial intelligence to streamline complex workflows and boost productivity. Our AI learns from your operations to provide intelligent suggestions and handle routine processes, freeing your team to focus on strategic initiatives.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade AES-256 encryption, SOC 2 compliance, and multi-tenant isolation with Row-Level Security ensure your data is always protected. We implement strict security protocols, regular audits, and comprehensive compliance logging to meet the highest industry standards.'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Get real-time insights with comprehensive dashboards, detailed reports, and predictive analytics. Track key performance metrics, identify trends, and make data-driven decisions that accelerate growth. Our analytics engine provides actionable intelligence tailored to your business needs.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your business worldwide with multi-language support, international payment processing, and localized experiences. Our platform handles currency conversions, regional compliance, and cultural adaptations, enabling you to serve customers across borders seamlessly.'
    },
    {
      icon: Clock,
      title: '24/7 AI Assistance',
      description: 'Round-the-clock intelligent support that never sleeps. Our AI-powered assistance handles customer inquiries, troubleshoots issues, and provides instant responses at any time. Ensure business continuity with continuous monitoring and proactive problem resolution.'
    },
    {
      icon: Users,
      title: 'Collaborative Tools',
      description: 'Built-in team collaboration features with role-based access control, real-time updates, and seamless communication. Enable your team to work together efficiently with shared workspaces, task management, and integrated messaging, all within a secure environment.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, PropTech Solutions',
      image: '/madwess-logo.png',
      rating: 5,
      text: 'MADWESS transformed our real estate operations. The AI platform saved us countless hours and the ROI was immediate. Best investment we\'ve made this year.'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      image: '/madwess-logo.png',
      rating: 5,
      text: 'The platform is incredibly intuitive and powerful. Our team was up and running in days, not weeks. The support team is exceptional and always available.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Digital Agency',
      image: '/madwess-logo.png',
      rating: 5,
      text: 'We\'ve tried many tools, but MADWESS stands out. The AI is smart, the interface is beautiful, and the results speak for themselves.'
    },
    {
      name: 'David Thompson',
      role: 'CTO, FinTech Startup',
      image: '/madwess-logo.png',
      rating: 5,
      text: 'The security and compliance features are top-notch. MADWESS gave us the confidence to scale our operations without worrying about data protection.'
    },
    {
      name: 'Lisa Martinez',
      role: 'Marketing Director',
      image: '/madwess-logo.png',
      rating: 5,
      text: 'Our content creation process is now 10x faster. The AI understands our brand voice perfectly and delivers consistent, high-quality results every time.'
    },
    {
      name: 'James Wilson',
      role: 'Business Owner',
      image: '/madwess-logo.png',
      rating: 5,
      text: 'MADWESS helped us reduce operational costs by 40% while improving service quality. The analytics dashboard provides insights we never had before.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const visibleTestimonials = testimonials.slice(currentTestimonialIndex * 3, currentTestimonialIndex * 3 + 3);

  const faqItems = [
    {
      question: 'How soon can I use my benefits?',
      answer: 'Most benefits are available immediately after signing up. However, some premium features may have a waiting list. You will be notified once you gain access to any waitlisted features.'
    },
    {
      question: 'What is the best package for me?',
      answer: 'The best package depends on your business needs and goals. Our Sentry tier is perfect for startups, Engine for growing businesses, Matrix for scaling operations, and MAÏ for enterprise solutions.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time from your dashboard. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use AES-256 encryption at rest, HTTPS for all connections, and implement strict multi-tenant isolation with Row-Level Security. We maintain SOC 2 compliance and conduct regular security audits.'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-8 flex justify-center">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-gradient-to-br from-gold via-yellow-500 to-blue rounded-full blur-xl opacity-50 animate-glow" />
              <Image
                src="/madwess-logo.png"
                alt="MADWESS"
                width={80}
                height={80}
                className="relative z-10"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">MADWESS</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            Where <span className="text-yellow-400 font-semibold">Innovation</span> Meets <span className="text-blue-400 font-semibold">Excellence</span>
          </p>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Transform your digital presence with cutting-edge solutions powered by next-generation technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => router.push('/products')} 
              className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 shadow-lg shadow-yellow-500/50"
            >
              Explore Products
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => router.push('/signup')}
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold px-8"
            >
              Get Started
            </Button>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, idx) => (
              <div key={idx} className="glass glass-border rounded-xl p-6 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Powerful Features Section */}
      <section id="features" className="relative z-10 container mx-auto px-4 py-20 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the tools and capabilities that make MADWESS the ultimate platform for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {powerfulFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-gold/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold via-yellow-500 to-blue flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 container mx-auto px-4 py-20 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
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
          {[
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
          ].map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              <Card className={`h-full flex flex-col ${tier.popular ? 'ring-2 ring-gold shadow-xl shadow-gold/20' : ''}`}>
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
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.popular ? 'default' : 'glass'}
                    className={tier.popular ? 'w-full btn-gradient text-black' : 'w-full'}
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
              <Button size="lg" className="btn-gradient text-black" onClick={() => router.push('/audit')}>
                Get AI Audit
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from businesses that have transformed their operations with MADWESS
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full glass glass-border flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-gold" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full glass glass-border flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-gold" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((testimonial, idx) => (
                <Card key={idx} className="h-full hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">{testimonial.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-blue flex items-center justify-center">
                        <span className="text-black font-bold text-sm">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                        <div className="text-gray-400 text-xs">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonialIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentTestimonialIndex === idx 
                    ? 'bg-gradient-to-r from-gold to-blue w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 container mx-auto px-4 py-20 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our platform and services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass glass-border rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-base font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openFaqIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openFaqIndex === idx ? 'auto' : 0,
                  opacity: openFaqIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-300 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="btn-gradient text-black" onClick={() => router.push('/faq')}>
            View All FAQs
          </Button>
        </motion.div>
      </section>

      {/* Get in Touch Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left side - Our Office */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass glass-border rounded-xl p-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold via-yellow-500 to-blue flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-black" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 text-center">Our Office</h3>
              <div className="text-center space-y-2">
                <p className="text-gray-400 text-lg">Will be added later</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-gray-800/50">
              <CardContent className="p-8 space-y-5">
                <form action="mailto:hello@madwess.ai" method="post" encType="text/plain">
                  <div className="space-y-5">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Name</label>
                      <input 
                        type="text"
                        name="name"
                        placeholder="" 
                        required
                        className="w-full h-12 px-4 rounded-lg border border-gray-800 bg-black/40 text-white placeholder:text-muted-foreground focus:ring-2 focus:ring-gold focus:border-gold backdrop-blur-xl transition-colors" 
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Email</label>
                      <input 
                        type="email"
                        name="email"
                        placeholder="" 
                        required
                        className="w-full h-12 px-4 rounded-lg border border-gray-800 bg-black/40 text-white placeholder:text-muted-foreground focus:ring-2 focus:ring-gold focus:border-gold backdrop-blur-xl transition-colors" 
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Phone</label>
                      <input 
                        type="tel"
                        name="phone"
                        placeholder="" 
                        className="w-full h-12 px-4 rounded-lg border border-gray-800 bg-black/40 text-white placeholder:text-muted-foreground focus:ring-2 focus:ring-gold focus:border-gold backdrop-blur-xl transition-colors" 
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Message</label>
                      <textarea
                        name="message"
                        required
                        className="w-full h-32 px-4 py-3 rounded-lg border border-gray-800 bg-black/40 text-white placeholder:text-muted-foreground focus:ring-2 focus:ring-gold focus:border-gold backdrop-blur-xl resize-none transition-colors"
                        placeholder=""
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full h-12 text-base font-semibold btn-gradient text-black hover:opacity-90 transition-opacity" 
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
