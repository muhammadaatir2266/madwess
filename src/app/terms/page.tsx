'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, CreditCard, Scale, Lock, AlertCircle } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: 'By accessing and using MADWESS services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.'
    },
    {
      icon: Shield,
      title: '2. Use of Services',
      content: 'You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that violates applicable laws or regulations.'
    },
    {
      icon: Lock,
      title: '3. Account Responsibilities',
      content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized access.'
    },
    {
      icon: CreditCard,
      title: '4. Payment Terms',
      content: 'Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days notice.'
    },
    {
      icon: Scale,
      title: '5. Intellectual Property',
      content: 'All content, features, and functionality are owned by MADWESS and protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.'
    },
    {
      icon: AlertCircle,
      title: '6. Limitation of Liability',
      content: 'MADWESS shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.'
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
            <h1 className="text-6xl font-bold text-gradient mb-6">Terms and Conditions</h1>
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
                  Please read these Terms and Conditions carefully before using MADWESS services. These terms govern your access to and use of our platform, including any content, functionality, and services offered.
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
                <Card className="group hover:shadow-xl hover:shadow-gold/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
                <CardTitle className="text-2xl">Additional Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">7. Termination</h4>
                  <p>We may terminate or suspend your account immediately, without prior notice, for any breach of these Terms.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">8. Changes to Terms</h4>
                  <p>We reserve the right to modify these terms at any time. We will notify users of any material changes via email or platform notification.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">9. Governing Law</h4>
                  <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law provisions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">10. Contact Information</h4>
                  <p>For questions about these Terms, please contact us at legal@madwess.com</p>
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
