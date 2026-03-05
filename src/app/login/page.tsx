'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { authApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Mail, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

type Step = 'email' | 'verify';

export default function Login() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  // Handle email submission
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authApi.sendMagicCode({
        email,
        type: 'login'
      });

      setStep('verify');
      startResendCooldown();
    } catch (err: any) {
      const errorCode = err.response?.data?.code;
      const errorMessage = err.response?.data?.error;

      if (errorCode === 'USER_NOT_FOUND') {
        setError('No account found with this email. Please sign up first.');
      } else {
        setError(errorMessage || 'Failed to send verification code');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle code verification
  const handleCodeVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authApi.verifyMagicCode({
        email,
        code,
        type: 'login'
      });

      const { token, user } = response.data;

      // Store token and user
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err: any) {
      const errorMessage = err.response?.data?.error;
      setError(errorMessage || 'Invalid or expired code');
    } finally {
      setLoading(false);
    }
  };

  // Resend code
  const handleResend = async () => {
    if (resendCooldown > 0) return;

    setError('');
    setLoading(true);

    try {
      await authApi.sendMagicCode({
        email,
        type: 'login'
      });

      startResendCooldown();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to resend code');
    } finally {
      setLoading(false);
    }
  };

  // Start resend cooldown
  const startResendCooldown = () => {
    setResendCooldown(60);
    const interval = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1s' }} />

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 glass">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => router.push('/')} className="hover:opacity-80 transition">
            <Image src="/madwess-logo.png" alt="MADWESS" width={48} height={48} className="w-12 h-12" priority />
          </button>
          <Button variant="outline" onClick={() => router.push('/signup')}>
            Sign Up
          </Button>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md relative z-10"
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">
                {step === 'email' ? 'Welcome Back' : 'Verify Your Email'}
              </CardTitle>
              <CardDescription>
                {step === 'email' 
                  ? 'Sign in to your account' 
                  : `We sent a 6-digit code to ${email}`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-destructive/10 border border-destructive/50 text-destructive p-3 rounded-lg mb-4 text-sm flex items-start gap-2"
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {/* Step 1: Email */}
                {step === 'email' && (
                  <motion.form
                    key="email"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleEmailSubmit}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        disabled={loading}
                        className="h-12"
                        autoFocus
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12"
                      size="lg"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending code...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Verification Code
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}

                {/* Step 2: Verify Code */}
                {step === 'verify' && (
                  <motion.form
                    key="verify"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleCodeVerify}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Verification Code
                      </label>
                      <Input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        placeholder="000000"
                        required
                        disabled={loading}
                        className="h-12 text-center text-2xl tracking-widest"
                        maxLength={6}
                        autoFocus
                      />
                      <p className="text-xs text-gray-500 text-center">
                        Code expires in 10 minutes
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading || code.length !== 6}
                      className="w-full h-12"
                      size="lg"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Sign In
                        </>
                      )}
                    </Button>

                    <div className="text-center space-y-2">
                      <button
                        type="button"
                        onClick={handleResend}
                        disabled={resendCooldown > 0 || loading}
                        className="text-sm text-blue hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {resendCooldown > 0
                          ? `Resend code in ${resendCooldown}s`
                          : 'Resend code'}
                      </button>

                      <div>
                        <button
                          type="button"
                          onClick={() => setStep('email')}
                          className="text-sm text-gray-400 hover:text-white flex items-center gap-1 mx-auto"
                        >
                          <ArrowLeft className="w-3 h-3" />
                          Change email
                        </button>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {step === 'email' && (
                <div className="mt-6 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-black/40 text-gray-400">
                        Don't have an account?
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="link"
                    onClick={() => router.push('/signup')}
                    className="mt-4"
                  >
                    Create an account
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <p className="text-center text-sm text-gray-500 mt-6">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </motion.div>
      </div>
    </div>
  );
}
