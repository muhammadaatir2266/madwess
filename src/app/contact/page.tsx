'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'Support@madwess.store',
      color: 'from-gold via-yellow-500 to-blue'
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '(804) 488-3517',
      color: 'from-gold via-yellow-500 to-blue'
    },
    {
      icon: MapPin,
      title: 'Virtual Address',
      detail: '8401 Mayland Dr # 7297',
      detail2: 'Richmond, VA 23294',
      color: 'from-gold via-yellow-500 to-blue'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />

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
            className="text-6xl font-bold mb-6"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            We'd love to hear from you
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left side - Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx + 0.3, duration: 0.5 }}
              >
                <Card className="group hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 border-gray-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-gray-400 text-sm">{info.detail}</p>
                        {info.detail2 && <p className="text-gray-400 text-sm">{info.detail2}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="border-gray-800/50">
              <CardContent className="p-8 space-y-5">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Name</label>
                  <Input 
                    placeholder="" 
                    className="h-12 bg-black/40 border-gray-800 focus:border-gold transition-colors" 
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="" 
                    className="h-12 bg-black/40 border-gray-800 focus:border-gold transition-colors" 
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Phone</label>
                  <Input 
                    placeholder="" 
                    className="h-12 bg-black/40 border-gray-800 focus:border-gold transition-colors" 
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Message</label>
                  <textarea
                    className="w-full h-32 px-4 py-3 rounded-lg border border-gray-800 bg-black/40 text-white placeholder:text-muted-foreground focus:ring-2 focus:ring-gold focus:border-gold backdrop-blur-xl resize-none transition-colors"
                    placeholder=""
                  />
                </div>
                
                <Button 
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-gold to-blue hover:opacity-90 transition-opacity text-black" 
                  size="lg"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
