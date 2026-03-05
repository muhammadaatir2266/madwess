'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Phone, Clock, Send, HelpCircle, BookOpen, Video } from 'lucide-react';

export default function Support() {
  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: '9 AM - 5 PM EST',
      color: 'from-gold to-yellow-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed help via email',
      availability: '24 hour response time',
      color: 'from-blue to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      availability: 'Mon-Fri: 9 AM - 5 PM EST',
      color: 'from-purple-500 to-blue'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Browse our comprehensive guides',
      availability: 'Available 24/7',
      color: 'from-gold to-blue'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-24">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />

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
            Support Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto"
          >
            We're here to help you succeed with MADWESS
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {supportOptions.map((option, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full group hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 text-center">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-8 h-8 text-black" />
                  </div>
                  <CardTitle className="text-xl mb-2">{option.title}</CardTitle>
                  <CardDescription className="text-sm">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{option.availability}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-blue flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400 text-sm">support@madwess.com</p>
                    <p className="text-gray-400 text-sm">sales@madwess.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400 text-sm">Sales: +1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Support: +1 (555) 123-4568</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-gray-400 text-sm">Monday - Friday</p>
                    <p className="text-gray-400 text-sm">9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your Name" className="h-12" />
                <Input type="email" placeholder="Your Email" className="h-12" />
                <Input placeholder="Subject" className="h-12" />
                <textarea
                  className="w-full h-32 px-4 py-3 rounded-lg border border-input bg-black/40 text-white placeholder:text-muted-foreground focus:ring-2 focus:ring-blue backdrop-blur-xl"
                  placeholder="Your Message"
                />
                <Button className="w-full h-12 text-base" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <HelpCircle className="w-12 h-12 text-gold mx-auto mb-4" />
              <CardTitle className="text-2xl">Need Immediate Help?</CardTitle>
              <CardDescription className="text-base">
                Check out our FAQ section or browse our documentation for quick answers
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4 justify-center">
              <Button variant="outline" size="lg">
                <BookOpen className="w-5 h-5 mr-2" />
                View Documentation
              </Button>
              <Button variant="outline" size="lg">
                <Video className="w-5 h-5 mr-2" />
                Watch Tutorials
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
