'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { stripeApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, Loader2, DollarSign } from 'lucide-react';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function AuditPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await stripeApi.createAuditCheckout({ tenantId: email, tenantName });
      window.location.href = response.data.url;
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to create checkout session');
      setLoading(false);
    }
  };

  const benefits = [
    'Comprehensive operational analysis',
    'AI readiness assessment',
    'Personalized tier recommendation',
    'ROI projections',
    'Implementation roadmap',
    '$300 credit toward first subscription',
  ];

  const faqs = [
    {
      q: 'What does the audit include?',
      a: 'A detailed analysis of your operations, AI readiness, and personalized recommendations for implementing VAOS.',
    },
    {
      q: 'How is the $300 credit applied?',
      a: 'The credit is automatically applied to your first subscription invoice after you choose a plan.',
    },
    {
      q: 'How long does the audit take?',
      a: 'Most audits are completed within 24-48 hours after payment.',
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge variant="gold" className="mb-4">
              <DollarSign className="w-3 h-3 mr-1" />
              One-time payment
            </Badge>
            <h1 className="text-5xl font-bold text-gradient mb-4">
              $300 AI Audit
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get a comprehensive analysis of your operations and discover how AI can transform your business. Credit applied to your first subscription.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Start Your Audit</CardTitle>
                  <CardDescription>
                    Enter your details to begin the checkout process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-destructive/10 border border-destructive/50 text-destructive p-3 rounded-lg mb-4 text-sm"
                    >
                      {error}
                    </motion.div>
                  )}

                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Company Name
                      </label>
                      <Input
                        type="text"
                        value={tenantName}
                        onChange={(e) => setTenantName(e.target.value)}
                        placeholder="Acme Corp"
                        required
                        disabled={loading}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Corporate Email
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        disabled={loading}
                      />
                    </div>

                    <div className="glass glass-border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">AI Audit</span>
                        <span className="text-xl font-bold text-gradient">$300</span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Credit applied to first subscription invoice
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full"
                      size="lg"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Proceed to Checkout'
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Secure payment powered by Stripe
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits & FAQ */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Get</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-white mb-1">{faq.q}</h4>
                        <p className="text-sm text-gray-400">{faq.a}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
