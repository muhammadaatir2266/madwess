'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { agentApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  LogOut, 
  Send, 
  Loader2, 
  Building2, 
  BarChart3, 
  Settings,
  User,
  Menu,
  X
} from 'lucide-react';
import Image from 'next/image';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('en');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = { role: 'user', content: message };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await agentApi.realEstate({ message, language });
      const agentMessage = {
        role: 'agent',
        content: response.data.response,
        metadata: response.data.metadata,
      };
      setMessages((prev) => [...prev, agentMessage]);
    } catch (err: any) {
      const errorMessage = {
        role: 'error',
        content: err.response?.data?.error || 'Failed to process request',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/10 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 flex h-screen">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: sidebarOpen ? 0 : -300 }}
          className="w-64 glass border-r border-white/10 flex flex-col"
        >
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-center mb-6">
              <Image src="/madwess-logo.png" alt="MADWESS" width={48} height={48} className="w-12 h-12" priority />
            </div>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gold/10 text-gold border border-gold/30">
                <Building2 className="w-5 h-5" />
                <span className="font-medium">Real Estate</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition">
                <BarChart3 className="w-5 h-5" />
                <span className="font-medium">Analytics</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition">
                <Settings className="w-5 h-5" />
                <span className="font-medium">Settings</span>
              </button>
            </div>
          </div>

          <div className="flex-1" />

          <div className="p-6 border-t border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-gold-blue flex items-center justify-center">
                <User className="w-5 h-5 text-black" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{user.email}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="w-full justify-start text-gray-400 hover:text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </motion.aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <header className="glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <h1 className="text-2xl font-bold text-gradient">Real Estate Agent</h1>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="glass glass-border rounded-lg px-4 py-2 text-sm bg-black/40 text-white focus:ring-2 focus:ring-blue"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
              <Badge variant="gold">SENTRY</Badge>
            </div>
          </header>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <Building2 className="w-16 h-16 text-gold mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gradient mb-2">
                    Real Estate AI Agent
                  </h2>
                  <p className="text-gray-400">
                    Ask about lead qualification, tour scheduling, lease renewals, or maintenance
                  </p>
                </motion.div>
              ) : (
                messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-3 ${
                        msg.role === 'user'
                          ? 'btn-gradient text-black'
                          : msg.role === 'error'
                          ? 'bg-destructive/20 border border-destructive text-destructive'
                          : 'glass glass-border text-white'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))
              )}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="glass glass-border rounded-lg px-4 py-3">
                    <Loader2 className="w-5 h-5 animate-spin text-gold" />
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="glass border-t border-white/10 p-6">
            <div className="max-w-4xl mx-auto flex gap-2">
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !loading && handleSend()}
                placeholder="Type your message..."
                disabled={loading}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                disabled={loading || !message.trim()}
                size="lg"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
