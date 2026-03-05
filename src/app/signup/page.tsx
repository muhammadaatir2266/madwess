'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { authApi, stripeApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Mail, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

type Step = 'email' | 'verify' | 'payment';

export default function Signup() {
  const router = useRouter();
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [userData, setUserData] = useState<any>(null);

  // Handle email submission
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authApi.sendMagicCode({
        email,
        type: 'signup',
        companyName: companyName || undefined
      });

      setStep('verify');
      startResendCooldown();
    } catch (err: any) {
      const errorCode = err.response?.data?.code;
      const errorMessage = err.response?.data?.error;

      if (errorCode === 'INVALID_EMAIL') {
        setError(errorMessage || 'Please use a corporate email address');
      } else if (errorCode === 'USER_EXISTS') {
        setError('An account with this email already exists');
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
        type: 'signup'
      });

      const { token, user, requiresAuditPayment } = response.data;

      // Store token and user
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUserData(user);

      if (requiresAuditPayment) {
        setStep('payment');
      } else {
        // Redirect to dashboard
        router.push('/dashboard');
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.error;
      setError(errorMessage || 'Invalid or expired code');
    } finally {
      setLoading(false);
    }
  };

  // Handle payment
  const handlePayment = async () => {
    setError('');
    setLoading(true);

    try {
      const response = await stripeApi.createAuditCheckout({
        tenantId: userData.tenantId,
        tenantName: userData.tenantName
      });

      // Redirect to Stripe checkout
      window.location.href = response.data.url;
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to create checkout session');
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
        type: 'signup',
        companyName: companyName || undefined
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
          <Button variant="outline" onClick={() => router.push('/login')}>
            Sign In
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
                {step === 'email' && 'Create Account'}
                {step === 'verify' && 'Verify Your Email'}
                {step === 'payment' && 'Complete Setup'}
              </CardTitle>
              <CardDescription>
                {step === 'email' && 'Start your AI transformation journey'}
                {step === 'verify' && `We sent a 6-digit code to ${email}`}
                {step === 'payment' && 'Get your $300 AI Operational Audit'}
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
                        Corporate Email *
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        disabled={loading}
                        className="h-12"
                      />
                      <p className="text-xs text-gray-500">
                        Personal emails (Gmail, Yahoo, etc.) are not allowed
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Company Name (Optional)
                      </label>
                      <Input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Acme Corp"
                        disabled={loading}
                        className="h-12"
                      />
                      <p className="text-xs text-gray-500">
                        We'll auto-detect from your email if not provided
                      </p>
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
                          Verify & Continue
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

                {/* Step 3: Payment */}
                {step === 'payment' && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="bg-gradient-to-br from-gold/10 to-blue/10 border border-gold/20 rounded-lg p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-gradient">
                        AI Operational Audit
                      </h3>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                          <span>Comprehensive operational analysis</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                          <span>AI automation opportunities identified</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                          <span>ROI projections and implementation roadmap</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                          <span>$300 credit applied to first subscription</span>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">One-time payment</span>
                          <span className="text-3xl font-bold text-gradient">$300</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={handlePayment}
                      disabled={loading}
                      className="w-full h-12"
                      size="lg"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Continue to Payment'
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Secure payment powered by Stripe
                    </p>
                  </motion.div>
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
                        Already have an account?
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="link"
                    onClick={() => router.push('/login')}
                    className="mt-4"
                  >
                    Sign in instead
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <p className="text-center text-sm text-gray-500 mt-6">
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>
        </motion.div>
      </div>
    </div>
  );
}
