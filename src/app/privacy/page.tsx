'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Shield, Share2, UserCheck, Cookie, Mail, Eye } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      icon: Database,
      title: '1. Information We Collect',
      content: 'We collect information you provide directly, including account information, usage data, and communication preferences. This includes your name, email, company details, and service usage patterns.'
    },
    {
      icon: Eye,
      title: '2. How We Use Your Information',
      content: 'We use your information to provide, maintain, and improve our services, communicate with you, ensure security, and comply with legal obligations. Your data helps us deliver personalized experiences.'
    },
    {
      icon: Shield,
      title: '3. Data Security',
      content: 'We implement industry-standard security measures including AES-256 encryption, multi-tenant isolation, and regular security audits to protect your data from unauthorized access.'
    },
    {
      icon: Share2,
      title: '4. Data Sharing',
      content: 'We do not sell your personal information. We only share data with service providers necessary to operate our platform, and they are bound by strict confidentiality agreements.'
    },
    {
      icon: UserCheck,
      title: '5. Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You can also request data portability and object to certain processing activities. Contact us to exercise these rights.'
    },
    {
      icon: Cookie,
      title: '6. Cookies and Tracking',
      content: 'We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie preferences through your browser settings.'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-24">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />

      <Header />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl font-bold text-gradient mb-6">Privacy Policy</h1>
            <p className="text-gray-400 text-lg">Last Updated: January 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-300 leading-relaxed">
                  At MADWESS, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx + 0.3 }}
              >
                <Card className="group hover:shadow-xl hover:shadow-blue/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <section.icon className="w-6 h-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-3">{section.title}</CardTitle>
                        <p className="text-gray-300 leading-relaxed">{section.content}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">7. Data Retention</h4>
                  <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Banking-related logs are retained for 7 years as required by law.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">8. International Transfers</h4>
                  <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">9. Children's Privacy</h4>
                  <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">10. Changes to This Policy</h4>
                  <p>We may update this Privacy Policy from time to time. We will notify you of any material changes via email or platform notification.</p>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold" />
                    <div>
                      <h4 className="font-semibold text-white">Contact Us</h4>
                      <p className="text-sm">For privacy-related questions, contact us at privacy@madwess.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
