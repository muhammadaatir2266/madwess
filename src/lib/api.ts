import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authApi = {
  // Send magic code
  sendMagicCode: (data: { email: string; type: 'signup' | 'login'; companyName?: string }) =>
    api.post('/auth/send-magic-code', data),
  
  // Verify magic code
  verifyMagicCode: (data: { email: string; code: string; type: 'signup' | 'login' }) =>
    api.post('/auth/verify-magic-code', data),
  
  // Refresh token
  refresh: () => api.post('/auth/refresh'),
  
  // Get current user
  me: () => api.get('/auth/me'),
};

export const auditApi = {
  generate: (data: any) => api.post('/audit/generate', data),
  
  get: (auditId: string) => api.get(`/audit/${auditId}`),
};

export const agentApi = {
  realEstate: (data: { message: string; language?: string }) =>
    api.post('/agent/real-estate', data),
  
  banking: (data: { message: string; language?: string }) =>
    api.post('/agent/banking', data),
};

export const stripeApi = {
  createAuditCheckout: (data: { tenantId: string; tenantName: string }) =>
    api.post('/stripe/checkout/audit', data),
};
