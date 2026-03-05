'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>('getting-started-0');

  const faqCategories = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How soon can I use my benefits?',
          answer: 'Most benefits are available immediately after signing up. However, some premium features may have a waiting list. You will be notified once you gain access to any waitlisted features.'
        },
        {
          question: 'What is the best package for me?',
          answer: 'The best package depends on your business needs and goals. Our Sentry tier is perfect for startups, Engine for growing businesses, Matrix for scaling operations, and MAÏ for enterprise-level automation. Contact our team for personalized recommendations.'
        },
        {
          question: 'How many pages can I have?',
          answer: 'Page limits vary by tier. Sentry includes up to 10 pages, Engine up to 50 pages, Matrix up to 200 pages, and MAÏ offers unlimited pages. Additional pages can be purchased as add-ons for lower tiers.'
        }
      ]
    },
    {
      category: 'Account & Membership',
      questions: [
        {
          question: 'Can my account be suspended?',
          answer: 'Accounts may be suspended for violations of our Terms of Service, including fraudulent activity, abuse of the platform, or non-payment. We will always notify you before suspension and provide an opportunity to resolve any issues.'
        },
        {
          question: 'Do you take mobile payment?',
          answer: 'Yes, we accept all major payment methods including credit cards, debit cards, and digital wallets. Our payment system is fully mobile-optimized and secure, powered by Stripe for your protection.'
        }
      ]
    },
    {
      category: 'Partnership Program',
      questions: [
        {
          question: 'What are the requirements for partnership?',
          answer: 'Our partnership program is open to businesses and individuals who want to promote Madwess. Requirements include an active online presence, alignment with our values, and commitment to quality. Partners earn competitive commissions and receive dedicated support.'
        }
      ]
    },
    {
      category: 'Dropshipping Services',
      questions: [
        {
          question: 'How does your dropshipping service work?',
          answer: 'Our dropshipping service integrates seamlessly with your online store. We handle inventory, fulfillment, and shipping while you focus on marketing and customer relationships. Our AI optimizes product selection and pricing for maximum profitability.'
        },
        {
          question: 'How can I dropship my products to USA?',
          answer: 'We provide full support for international dropshipping to the USA. Our platform handles customs documentation, shipping logistics, and compliance requirements. We partner with reliable carriers to ensure fast delivery and tracking for all orders.'
        }
      ]
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
          className="max-w-3xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Frequently Asked <span className="text-gradient">Questions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              Find answers to common questions about our platform, membership plans, and services
            </motion.p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIdx) => (
              <motion.div
                key={categoryIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * categoryIdx + 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gold mb-6">{category.category}</h2>
                <div className="space-y-3">
                  {category.questions.map((faq, idx) => {
                    const questionId = `${category.category.toLowerCase().replace(/\s+/g, '-')}-${idx}`;
                    const isOpen = openIndex === questionId;
                    
                    return (
                      <div
                        key={idx}
                        className="glass glass-border rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : questionId)}
                          className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="text-base font-medium text-white pr-4">{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-300 leading-relaxed text-sm">
                            {faq.answer}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <div className="glass glass-border rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">
                Still Have <span className="text-gradient">Questions?</span>
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Cannot find the answer you are looking for? Our support team is here to help!
              </p>
              <button
                onClick={() => window.location.href = '/contact'}
                className="btn-gradient text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105"
              >
                Contact Support
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
