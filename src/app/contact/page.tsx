'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
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
            We'd love to hear from you. Send us a message and we'll respond as soon as possible
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left side - Our Office */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
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
                <p className="text-gray-400 text-lg">8401 Mayland Dr # 7297</p>
                <p className="text-gray-400 text-lg">Richmond, VA 23294</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-gray-800/50">
              <CardContent className="p-8 space-y-5">
                <form action="mailto:hello@madwess.ai" method="post" encType="text/plain">
                  <div className="space-y-5">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Name</label>
                      <Input 
                        type="text"
                        name="name"
                        placeholder="" 
                        required
                        className="h-12 bg-black/40 border-gray-800 focus:border-gold transition-colors" 
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Email</label>
                      <Input 
                        type="email"
                        name="email"
                        placeholder="" 
                        required
                        className="h-12 bg-black/40 border-gray-800 focus:border-gold transition-colors" 
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Phone</label>
                      <Input 
                        type="tel"
                        name="phone"
                        placeholder="" 
                        className="h-12 bg-black/40 border-gray-800 focus:border-gold transition-colors" 
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
                      className="w-full h-12 text-base font-semibold bg-gradient-to-r from-gold to-blue hover:opacity-90 transition-opacity text-black" 
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
      </div>

      <Footer />
    </div>
  );
}
